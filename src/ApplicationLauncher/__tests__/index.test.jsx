import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { ApplicationLauncher } from '../index';
import { store } from '../../store';

describe('<ApplicationLauncher />', () => {
  test('<ApplicationLauncher /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <ApplicationLauncher />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
