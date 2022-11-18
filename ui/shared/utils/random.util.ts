export const getRandomBetween = (a: number, b: number): number => {
  return Math.random() * (b - a) + a;
};

export const getRandomChoice = (a: Array<any>): any => {
  const index = Math.floor(Math.random() * a.length);
  return a[index];
};
