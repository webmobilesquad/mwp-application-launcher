import { fetchApplications } from '../fetchApplications';

describe('fetch applications', () => {
  it('should fetch applications in the correct format', async () => {
    const applications = await fetchApplications('my.domain'); // TODO change me
    applications.every(application => expect(application).toHaveProperty('name')
      && expect(application).toHaveProperty('url')
      && expect(application).toHaveProperty('icon'));
  });
});
