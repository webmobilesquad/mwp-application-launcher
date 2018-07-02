import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { ApplicationLauncherModal } from '../index';
import { store } from '../../store';

describe('<ApplicationLauncherModal />', () => {
  test('<ApplicationLauncherModal /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <ApplicationLauncherModal />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
