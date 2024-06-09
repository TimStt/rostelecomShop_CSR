export const summirizeArray = (array: any[]) =>
  array.reduce((acc: number, cur: number) => acc + cur, 0);
