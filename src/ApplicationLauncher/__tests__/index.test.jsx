import render from 'preact-render-spy';
import { ApplicationLauncher } from '../index';

describe('<ApplicationLauncher />', () => {
  test('<ApplicationLauncher /> matches snapshot', () => {
    expect(render(<ApplicationLauncher />)).toMatchSnapshot();
  });
});
