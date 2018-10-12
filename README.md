# mobx-react-utils

> Utilities often needed for react-mobx development

[![npm](https://img.shields.io/npm/v/mobx-react-utils.svg)](https://www.npmjs.com/package/mobx-react-utils)

## Install

```bash
npm i -S mobx-react-utils
```

## Usage

### @autoDispose

Decorate a function which return a `disposer` function, and automatically excute it when `react` component unmount

Type: `method decorator`

Context: `React component class`

Target: `() => Disposer`

```typescript

    public componentDidMount(): void {
	    // listen the change of query and do action
	    this.loadStatsReaction();
	}

	@autoDispose
	public loadStatsReaction(): () => void {
		return reaction(() => this.query, () => {
			this.model.loadStats(this.query);
		}, {
			fireImmediately: true,
		});
	}
```

### Packgen

Generate an infinite iterator from an input array

Type: `Iterator factory`

Context: `any`

Target: `T[]`

Produce: `Iterable Iterator`

```typescript
const pages = [0 , 1 , 2];

const choicePack: IterableIterator<number> = packGen(pages);
```

### Comparer

Sets of comparer for using with `Array.sort` function

Member: 
```typescript
// Sorters
aZComparer<string>
zAComparer<string>
INComparer<number>
NIComparer<number>

// Preset pack (generate with packgen)
numberPack
stringPack
```

```typescript
export declare type Comparer<T> = (a: T, b: T) => number;
export declare function aZComparer(a: string, b: string): number;
export declare function zAComparer(a: string, b: string): number;
export declare function INComparer(a: number, b: number): number;
export declare function NIComparer(a: number, b: number): number;
export declare const stringPack: IterableIterator<typeof aZComparer | null>;
export declare const numberPack: IterableIterator<typeof INComparer | null>;

```

```typescript
const pack1 = numberPack();
pack1.next().value === null // true
pack1.next().value === INComparer // true
```

### copyFields

Shallow copy property from one object to another with simple typing

Type: `function`

Context: `any`

Target: `object`

Produce: `mutation`

```typescript
const x: A;
const y: A;
copyFields<A>(x, y);

```

### groupBy

Group array of object by one property value into another result object

Type: `function`

Context: `any`

Target: `T[]`

Produce: `object`

```typescript
export interface IGroupByResult<T> {
    [key: string]: T[];
}
export declare function groupBy<T>(arrayInput: T[], key: keyof T): IGroupByResult<T>;

```

### mergeClassName

Merge two css modules styles object into one by concatenate each field

```typescript
export interface IStyles {
    [key: string]: string;
}
export declare function mergeClassName<T extends IStyles>(target: T, source?: Readonly<Partial<T>>): T;
```

### notEmpty
Type guard T from `undefined` or `null`

```typescript
export declare function notEmpty<T>(value: T | null | undefined): value is T;
```

## License

Apache license 2.0