import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { ApplicationLauncherButton } from '../index';
import { store } from '../../store';

describe('<ApplicationLauncherButton />', () => {
  test('<ApplicationLauncherButton /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <ApplicationLauncherButton />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
