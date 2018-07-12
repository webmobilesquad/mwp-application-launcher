# mwp-application-launcher

> All the `yarn` commands below are applicable to `npm`.

## Usage

Add the module to your dependencies:
```
> yarn add mwp-application-launcher
```

Import it in your code and initiate the module:
```javascript
import { initLauncher } from 'mwp-application-launcher';

const launcher = initLauncher({ url: 'http://path/to/your/api/endpoint' });
```
| Option | Type | Description |
| --- | --- | --- |
| url | string | Indicate from which url to fetch the items from. |

This init function returns 2 functions:
* `renderLauncher({ container, ...props })` to display the items in a vertical full-height bar,
* `renderLauncherButton({ container, ...props})` to display a control button which opens a modal containing the items.

| Option | Type | Description |
| --- | --- | --- |
| container | string | A selector matching a HTML element to which the launcher will be attached. |
| ...props | any number of options of any type | These options will be passed down to the launcher parent element. |


## Development

Launch the development server:
```
yarn dev
```
The source folder is `/src`.
Files with global code and functions should directly be in `/src`. The associated test folder is `/src/__tests__`.
Components folders are in the form: `/src/NameOfComponent`. They are composed of an `index.jsx` and `style.module.scss` files, and a `__tests__` folder.


## Build

Build the module in `/dist`:
```
yarn build
```

## Test

Tests are made with [Jest](https://jestjs.io/). The following command launches all tests:
```
yarn test
```
> Jest CLI arguments can be passed directly to the above command, like so: `yarn test -u` (updates snapshots).