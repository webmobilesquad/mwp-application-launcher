import render from 'preact-render-spy';
import { Application } from '../index';

describe('<Application />', () => {
  test('<Application /> matches snapshot', () => {
    const application = {
      name: 'Test application',
      url: 'test/url',
      icon: 'icon.png',
    };
    expect(render(<Application application={application} />)).toMatchSnapshot();
  });
});
