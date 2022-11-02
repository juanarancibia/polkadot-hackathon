import { SHAPES } from 'shared/constants/shapes.const';

export interface SketchParameters {
  id: number;
  r: number;
  overlappingFactor: number;
  bgColor: string;
  initialPoints: number;
  strokeWeight: number;
  speed: number;
  framesColor: number;
  colorPalette: string[];
  alpha: string;
  shape: SHAPES;
  lineAngle: number;
  circleSize: number;
  circleLayers: number;
}
