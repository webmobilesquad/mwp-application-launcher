import render from 'preact-render-spy';
import { Application } from '../index';

describe('<Application />', () => {
  test('<Application /> matches snapshot', () => {
    expect(render(<Application />)).toMatchSnapshot();
  });
});
