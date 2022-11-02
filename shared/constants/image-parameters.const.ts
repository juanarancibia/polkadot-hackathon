import { SketchParameters } from 'shared/models/sketch-parameters.model';
import { getRandomBetween, getRandomChoice } from 'shared/utils/random.util';
import {
  BACKGROUND_COLORS,
  COLOR_PALETTES,
  COLOR_PALETTES_ARRAY,
} from './color-palettes.const';
import { SHAPES } from './shapes.const';

export const DEFAULT_IMAGE_PARAMETERS = [
  {
    id: 1,
    r: 5,
    initialPoints: 3,
    strokeWeight: 2,
    overlappingFactor: 1,
    speed: 25,
    framesColor: 25,
    bgColor: getRandomChoice(BACKGROUND_COLORS),
    colorPalette: COLOR_PALETTES['repetition'],
    alpha: 'FF',
    shape: SHAPES.LINE,
    lineAngle: 45,
    circleSize: 200,
    circleLayers: 7,
  },
];

export const getRandomParameters = (): SketchParameters => {
  return {
    id: Math.random(),
    ...getParameter(),
  } as SketchParameters;
};

export const getParameter = (): Partial<SketchParameters> => {
  return getRandomChoice([
    {
      r: getRandomBetween(4, 15),
      initialPoints: getRandomBetween(1, 7),
      strokeWeight: getRandomBetween(1, 3),
      overlappingFactor: getRandomBetween(1, 3),
      speed: 100,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.CONNECTED_LINE,
      lineAngle: 45,
      circleSize: 200,
      circleLayers: 7,
    },
    {
      r: getRandomBetween(2, 5),
      initialPoints: getRandomBetween(1, 5),
      strokeWeight: getRandomBetween(3, 10),
      overlappingFactor: getRandomBetween(1, 3),
      speed: 150,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.POINT,
      lineAngle: 45,
      circleSize: 200,
      circleLayers: 7,
    },
    {
      r: getRandomBetween(1, 7),
      initialPoints: getRandomBetween(1, 5),
      strokeWeight: getRandomBetween(1, 2),
      overlappingFactor: getRandomBetween(1, 3),
      speed: 350,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.CIRCLES,
      lineAngle: 45,
      circleSize: getRandomBetween(100, 300),
      circleLayers: getRandomBetween(1, 10),
    },
    {
      r: getRandomBetween(10, 15),
      initialPoints: getRandomBetween(1, 5),
      strokeWeight: getRandomBetween(1, 5),
      overlappingFactor: getRandomBetween(2, 7),
      speed: 350,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.CIRCLES,
      lineAngle: 45,
      circleSize: getRandomBetween(25, 200),
      circleLayers: getRandomBetween(1, 10),
    },
    {
      r: getRandomBetween(5, 20),
      initialPoints: getRandomBetween(1, 5),
      strokeWeight: getRandomBetween(1, 3),
      overlappingFactor: getRandomBetween(1, 5),
      speed: 100,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.LINE,
      lineAngle: -1,
      circleSize: 1,
      circleLayers: 1,
    },
    {
      r: getRandomBetween(2, 20),
      initialPoints: getRandomBetween(1, 5),
      strokeWeight: getRandomBetween(1, 3),
      overlappingFactor: getRandomBetween(3, 7),
      speed: 100,
      framesColor: 10,
      bgColor: getRandomChoice(BACKGROUND_COLORS),
      colorPalette: getRandomChoice(COLOR_PALETTES_ARRAY),
      alpha: '',
      shape: SHAPES.LINE,
      lineAngle: getRandomBetween(25, 170),
      circleSize: 1,
      circleLayers: 1,
    },
  ]);
};
