import {packGen} from "./pack-gen";

export type Comparer<T> = (a: T, b: T) => number

export function aZComparer(a: string, b: string): number {
	if (a > b) { return 1; }
	if (a < b) { return -1; }
	return 0;
}

export function zAComparer(a: string, b: string): number {
	return - aZComparer(a, b);
}

export function INComparer(a: number, b: number): number {
	return a - b;
}

export function NIComparer(a: number, b: number): number {
	return b - a;
}

const stringComparerList = [aZComparer, zAComparer, null];
const numberComparerList = [INComparer, NIComparer, null];

export function stringPack() {
	return packGen(stringComparerList);
}

export function numberPack() {
	return packGen(numberComparerList);
}
