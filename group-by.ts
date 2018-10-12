export interface IGroupByResult<T> {
	[key: string]: T[]
}

export function groupBy<T>(arrayInput: T[], key: keyof T): IGroupByResult<T> {
	return arrayInput.reduce((result: IGroupByResult<T>, t: T) => {
		if (!t[key]) {
			return result;
		}
		(result[t[key] as any] = result[t[key] as any] || []).push(t);
		return result;
	}, {});
}
