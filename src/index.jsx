import { render } from 'preact';
import { ApplicationLauncher } from './ApplicationLauncher';

export function initApplicationLauncher({ element, ...props }) {
  render(
    <ApplicationLauncher {...props} />,
    element,
  );
}
