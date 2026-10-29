import {cacheLife} from "next/cache";

export const getCurrentYear = async () => {
  'use cache';

  cacheLife('max');

  return new Date().getFullYear();
}