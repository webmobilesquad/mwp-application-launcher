import { h, render } from 'preact';
import { ApplicationLauncher } from './ApplicationLauncher';

export function initApplicationLauncher({ element, url, props }) {
  render(
    <ApplicationLauncher url={url} {...props} />,
    element,
  );
}
