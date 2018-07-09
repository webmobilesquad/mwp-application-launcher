import render from 'preact-render-spy';
import { Application } from '../index';

describe('<Application />', () => {
  test('<Application /> matches snapshot', () => {
    const application = {
      name: 'Test application',
      url: 'test/url',
      icon: 'icon.png',
    };
    const currentUrl = '/current/url';
    expect(render(<Application application={application} url={currentUrl} />)).toMatchSnapshot();
  });
});
