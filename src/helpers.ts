import { FoodItem } from "./types";

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

export const formatTime = (date: string, options: any) => {
  const formatter = Intl.DateTimeFormat("id", {
    weekday: "short",
    day: "numeric",
    ...options,
  });

  return formatter.format(new Date(date));
};

export const getTotalPrice = (items: FoodItem[]) => {
  return items.reduce((sum, item) => sum + item.final_price, 0);
};
