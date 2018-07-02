import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { ApplicationContainer } from '../index';
import { store } from '../../store';

describe('<ApplicationContainer />', () => {
  test('<ApplicationContainer /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <ApplicationContainer />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
