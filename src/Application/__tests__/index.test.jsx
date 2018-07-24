import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { Application } from '../index';
import { store } from '../../store';

describe('<Application />', () => {
  test('<Application /> matches snapshot', () => {
    const application = {
      name: 'Test application',
      url: 'test/url',
      icon: 'icon.png',
    };
    const currentUrl = '/current/url';
    expect(
      render(
        <Provider store={store}>
          <Application application={application} url={currentUrl} />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
