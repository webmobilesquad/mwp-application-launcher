import { render } from 'preact';
import { ApplicationLauncher } from './ApplicationLauncher';
import { ApplicationLauncherButton } from './ApplicationLauncherButton';

export const renderLauncher = ({ container, ...props }) => render(
  <ApplicationLauncher {...props} />,
  container,
);

export const renderLauncherButton = ({ container, ...props }) => render(
  <ApplicationLauncherButton {...props} />,
  container,
);
