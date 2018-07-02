import { render } from 'preact';
import { Provider } from 'unistore/preact';
import { ApplicationLauncher } from './ApplicationLauncher';
import { ApplicationLauncherButton } from './ApplicationLauncherButton';
import { store } from './store';

export const renderLauncher = ({ container, ...props }) => render(
  <Provider store={store}>
    <ApplicationLauncher {...props} />
  </Provider>,
  container,
);

export const renderLauncherButton = ({ container, ...props }) => render(
  <Provider store={store}>
    <ApplicationLauncherButton {...props} />
  </Provider>,
  container,
);
