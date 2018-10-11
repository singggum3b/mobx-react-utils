# mobx-react-utils

> Utilities often needed for react-mobx development

[![NPM Version][npm-image]][https://www.npmjs.com/package/mobx-react-utils]

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

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master