import { isUrlActiveForApplication } from '../isApplicationActive';

describe('isUrlActiveForApplication', () => {
  const application = {
    url: 'https://mywebportal.michelin-solutions.com/msn/my-inspection',
  };

  it('should return true if current url is the same as the application url', () => {
    expect(
      isUrlActiveForApplication(
        'https://mywebportal.michelin-solutions.com/msn/my-inspection',
        application,
      ),
    ).toBe(true);
  });

  it('should return true if current url starts with the application url', () => {
    expect(
      isUrlActiveForApplication(
        'https://mywebportal.michelin-solutions.com/msn/my-inspection/checklists',
        application,
      ),
    ).toBe(true);
  });

  it('should return false if current url does not start with the application url', () => {
    expect(
      isUrlActiveForApplication(
        'https://mywebportal.michelin-solutions.com/msn/my-training',
        application,
      ),
    ).toBe(false);
  });
});
