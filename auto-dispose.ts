import * as React from "react";
const DISPOSER_SYMBOL = Symbol("disposerList");

export interface IReactClass extends React.Component<any> {
	componentWillUnmount?: () => void,
	readonly [DISPOSER_SYMBOL]?: Array<() => any>,
}

export function autoDispose(target: IReactClass, _: string, descriptor: PropertyDescriptor):
	PropertyDescriptor {
	const original = descriptor.value;
	const oldUnmount = target.componentWillUnmount;

	if (!target[DISPOSER_SYMBOL]) {
		Object.defineProperty(target, DISPOSER_SYMBOL, {
			value: [],
		});
	}

	descriptor.value = function(...args: any[]): void {
		const disposer = original.apply(this, args);
		if (target[DISPOSER_SYMBOL]) {
			target[DISPOSER_SYMBOL]!.push(disposer);
		}
	};

	Object.defineProperty(target, "componentWillUnmount", {
		value(): void {
			oldUnmount && oldUnmount();
			if (target[DISPOSER_SYMBOL] !== undefined) {
				target[DISPOSER_SYMBOL]!.forEach(f => f());
				target[DISPOSER_SYMBOL]!.length = 0;
			}
		},
		writable: true,
	});
	return descriptor;
}
