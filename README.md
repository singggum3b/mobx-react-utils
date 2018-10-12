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



## License

Apache license 2.0