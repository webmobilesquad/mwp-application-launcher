import { render } from 'preact';
import { Provider } from 'unistore/preact';
import { ApplicationLauncher } from './ApplicationLauncher';
import { ApplicationLauncherButton } from './ApplicationLauncherButton';
import { store } from './store';
import { watchUrl } from './watchUrl';

const renderLauncher = ({ container, ...props }) => render(
  <Provider store={store}>
    <ApplicationLauncher {...props} />
  </Provider>,
  container,
);

const renderLauncherButton = ({ container, ...props }) => render(
  <Provider store={store}>
    <ApplicationLauncherButton {...props} />
  </Provider>,
  container,
);

export function init({ url, hasPermission }) {
  if (url === undefined) {
    throw new Error('MissingParameter: url was not provided');
  }
  if (hasPermission === undefined) {
    throw new Error('MissingParameter: hasPermission() was not provided');
  }
  store.setState({
    applications: {
      url,
    },
    hasPermission,
  });
  watchUrl();
  return {
    renderLauncher,
    renderLauncherButton,
  };
}
