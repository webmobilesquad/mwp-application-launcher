import render from 'preact-render-spy';
import { ApplicationContainer } from '../index';

describe('<ApplicationContainer />', () => {
  test('<ApplicationrContainer /> matches snapshot', () => {
    expect(render(<ApplicationContainer />)).toMatchSnapshot();
  });
});
