# mwp-application-launcher

> All the `yarn` commands below are applicable to `npm`.

## Usage

Add the module to your dependencies:
```
> yarn add mwp-application-launcher
```

Import it in your code and initialize the module:
```javascript
import { init } from 'mwp-application-launcher';

const launcher = init(
  {
    url: 'https://path/to/your/api/endpoint',
    hasPermission: (permission) => { ... },
  }
);
```
| Option | Type | Default | Description |
| --- | --- | --- | --- |
| url | string | | Indicate from which url the items should be fetched. |
| hasPermission | function(permission: string): boolean\|Promise | | Tells whether the logged in user has the given permission. |

> The `hasPermission` function can either
> * be synchronous and return `true` for allowance, `false` otherwise
> * be asynchronous and return a promise that will be `resolved` for allowance, `rejected` otherwise

This init function returns 2 functions:
* `renderLauncher({ container, light, ...props })` to display the items in a vertical full-height bar,
* `renderLauncherButton({ container, light, ...props})` to display a control button which opens a modal containing the items.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| container | string | null | A selector matching a HTML element to which the launcher will be attached. |
| light | boolean | false | Whether to use the light theme instead of the dark one. |
| ...props | any number of options of any type | | These options will be passed down to the launcher parent element. |


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
