import { render } from 'preact';
import { ApplicationLauncher } from './ApplicationLauncher';

export const renderLauncher = ({ container, ...props }) => render(
  <ApplicationLauncher {...props} />,
  container,
);
