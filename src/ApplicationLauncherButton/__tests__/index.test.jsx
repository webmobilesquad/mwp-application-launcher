import render from 'preact-render-spy';
import { ApplicationLauncherButton } from '../index';

describe('<ApplicationLauncherButton />', () => {
  test('<ApplicationLauncherButton /> matches snapshot', () => {
    expect(render(<ApplicationLauncherButton />)).toMatchSnapshot();
  });
});
