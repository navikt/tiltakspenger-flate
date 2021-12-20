const weights1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
const weights2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

const sum = (id: number[], factors: number[]) =>
  factors.map((f, i) => f * id[i]).reduce((acc, curr) => acc + curr, 0);

const checksum = (id: number[], weigths: number[]) =>
  (11 - (sum(id, weigths) % 11)) % 11;

export const isValidFnr = (id: string) => {
  if (id?.trim().length != 11) return false;

  const idAsArray: number[] = id.split('').map((c) => parseInt(c, 10));

  if (checksum(idAsArray, weights1) != idAsArray[9]) return false;

  return checksum(idAsArray, weights2) == idAsArray[10];
};
