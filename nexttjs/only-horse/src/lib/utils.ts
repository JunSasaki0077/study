import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const centsToDalls = (cents: number) => {
  return (cents / 100).toFixed(2);
};
