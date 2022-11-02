/* eslint-disable no-case-declarations */
import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import p5Type from 'p5';
import { FC } from 'react';
import { SHAPES } from 'shared/constants/shapes.const';
import { SketchParameters } from 'shared/models/sketch-parameters.model';

type propsType = { form: SketchParameters };

const Sketch = dynamic(import('react-p5'), { ssr: false }) as any;

let r = 3; // Distance between points
const k = 30;
let w = r / Math.sqrt(2); // Size of each cell;

let grid = [];
let active = [];
let ordered = [];

let cols, rows;
let color;
let canvas;
let p5Instance;

const SketchContainer: FC<propsType> = (props: propsType) => {
  r = props.form.r;
  w = (r - props.form.overlappingFactor * r * 0.1) / Math.sqrt(2);

  const setup = (p5: p5Type, canvasParentRef: Element) => {
    p5Instance = p5;
    grid = [];
    active = [];
    ordered = [];

    canvas = p5.createCanvas(350, 622).parent(canvasParentRef);
    p5.background(props.form.bgColor);
    p5.strokeCap(p5.ROUND);

    color = getColor(p5, props.form.colorPalette);

    initializationStep(p5);
    firstStep(p5);
  };

  const draw = (p5: p5Type) => {
    poissonDiscDistribution(p5);
  };

  const initializationStep = (p5: p5Type) => {
    cols = p5.floor(p5.width / w);
    rows = p5.floor(p5.height / w);
    for (let i = 0; i < cols * rows; i++) {
      grid[i] = undefined;
    }
  };

  const firstStep = (p5: p5Type) => {
    for (
      let initialPoints = 0;
      initialPoints < props.form.initialPoints;
      initialPoints++
    ) {
      const x = p5.random(p5.width);
      const y = p5.random(p5.height);
      const i = p5.floor(x / w);
      const j = p5.floor(y / w);
      const pos = p5.createVector(x, y);
      grid[i + j * cols] = pos;
      active.push(pos);
    }
  };

  const poissonDiscDistribution = (p5: p5Type) => {
    if (p5.frameCount % props.form.framesColor === 0) {
      color = getColor(p5, props.form.colorPalette);
    }
    for (let total = 0; total < props.form.speed; total++) {
      if (total % props.form.framesColor === 0) {
        color = getColor(p5, props.form.colorPalette);
      }

      if (active.length > 0) {
        const randIndex = p5.floor(p5.random(active.length));
        const pos = active[randIndex];
        let found = false;
        for (let n = 0; n < k; n++) {
          const sample = (p5.constructor as any).Vector.random2D();
          const m = p5.random(r, 2 * props.form.r);
          sample.setMag(m);
          sample.add(pos);
          const col = p5.floor(sample.x / w);
          const row = p5.floor(sample.y / w);
          if (
            col > -1 &&
            row > -1 &&
            col < cols &&
            row < rows &&
            !grid[col + row * cols]
          ) {
            let ok = true;
            for (let ii = -1; ii <= 1; ii++) {
              for (let jj = -1; jj <= 1; jj++) {
                const index = col + ii + (row + jj) * cols;
                const neighbor = grid[index];
                if (neighbor) {
                  const d = (p5.constructor as any).Vector.dist(
                    sample,
                    neighbor
                  );
                  if (d < props.form.r) {
                    ok = false;
                  }
                }
              }
            }
            if (ok) {
              found = true;
              grid[col + row * cols] = sample;
              active.push(sample);
              ordered.push(sample);

              p5.noFill();
              p5.stroke(color);
              p5.strokeWeight(props.form.strokeWeight);

              switch (props.form.shape) {
                case SHAPES.CONNECTED_LINE:
                  p5.line(sample.x, sample.y, pos.x, pos.y);
                  break;
                case SHAPES.LINE:
                  const angle =
                    props.form.lineAngle === -1
                      ? p5.random(360)
                      : props.form.lineAngle;
                  const direction = (p5.constructor as any).Vector.fromAngle(
                    p5.radians(angle),
                    m
                  );
                  direction.add(sample);

                  p5.line(sample.x, sample.y, direction.x, direction.y);
                  break;
                case SHAPES.POINT:
                  p5.point(sample.x, sample.y);
                  break;
                case SHAPES.CIRCLES:
                  drawRandomCircle(sample.x, sample.y, p5);
                  break;
              }
              // scribbleInstance.scribbleLine(sample.x, sample.y, pos.x, pos.y);

              break;
            }
          }
        }
        if (!found) {
          active.splice(randIndex, 1);
        }
      }
    }
  };

  const drawRandomCircle = (currentX: number, currentY: number, p5: p5Type) => {
    const layerNo = props.form.circleLayers;
    const size = p5.random(props.form.circleSize);
    const arcDistance = size / layerNo;

    for (let layer = 0; layer < layerNo; layer++) {
      const color = getColor(p5, props.form.colorPalette);

      p5.strokeWeight(props.form.strokeWeight);
      p5.stroke(color);
      p5.noFill();
      p5.arc(
        currentX,
        currentY,
        size - layer * arcDistance,
        size - layer * arcDistance,
        p5.random(p5.TWO_PI),
        p5.random(p5.TWO_PI)
      );
    }
  };

  const getColor = (p5: p5Type, colors: string[]) => {
    const color = p5.random(colors);

    return color + props.form.alpha;
  };

  const saveImage = () => {
    p5Instance.save(canvas, 'created-image.png');
  };

  return (
    <div
      className="flex flex-col align-center justify-center"
      style={{ width: '350px' }}
    >
      <div style={{ width: '350px', height: '622px' }}>
        <Sketch key={props.form.id} setup={setup} draw={draw} />
      </div>
      <Button className="my-8 text-lg" variant="outlined" onClick={saveImage}>
        Save Image
      </Button>
    </div>
  );
};

export default SketchContainer;
