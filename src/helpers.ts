export const segmentNumber = (num: number, range = 0.25) => {
  const integer = Math.floor(num);
  let float = num - integer;

  if (float > 0.25 && float < 0.75) {
    float = 0.5;
  } else {
    float = 0;
  }

  return { integer, float };
};
