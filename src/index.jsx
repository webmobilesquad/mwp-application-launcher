import { render } from 'preact';
import { Provider } from 'unistore/preact';
import { ApplicationLauncher } from './ApplicationLauncher';
import { ApplicationLauncherButton } from './ApplicationLauncherButton';
import { store } from './store';

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

export function initLauncher({ url }) {
  store.setState({
    applications: {
      url,
    },
  });
  return {
    renderLauncher,
    renderLauncherButton,
  };
}
