import render from 'preact-render-spy';
import { ApplicationLauncherModal } from '../index';

describe('<ApplicationLauncherModal />', () => {
  test('<ApplicationLauncherModal /> matches snapshot', () => {
    expect(render(<ApplicationLauncherModal />)).toMatchSnapshot();
  });
});
