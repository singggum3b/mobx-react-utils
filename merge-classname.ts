export interface IStyles {
	[key: string]: string,
}

export function mergeClassName<T extends IStyles>(target: T, source?: Readonly<Partial<T>>): T {
	if (!source) {
		return target;
	}
	const res = {} as T;
	for (const id in target) {
		if (target.hasOwnProperty(id)) {
			res[id as string] = (target[id] || "") + " " + (source[id] || "");
		}
	}
	return res;
}
