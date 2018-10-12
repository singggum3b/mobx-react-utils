export function* packGen<T>(t: T[]): IterableIterator<T> {
	while (true) {
		yield* t;
	}
}
