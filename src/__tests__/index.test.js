import { init } from '../index';

describe('index', () => {
  it('should throw an error when missing url', () => {
    expect(() => {
      init({ hasPermission: () => true });
    }).toThrow();
  });

  it('should throw an error when missing hasPermission', () => {
    expect(() => {
      init({ url: 'some/url' });
    }).toThrow();
  });

  it('should initialize correctly', () => {
    const params = {
      url: 'some/url',
      hasPermission: () => true,
    };
    const launcher = init(params);
    expect(launcher).toHaveProperty('renderLauncher');
    expect(launcher).toHaveProperty('renderLauncherButton');
  });
});
