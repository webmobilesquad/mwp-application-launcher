import { fetchApplications } from '../fetchApplications';

describe('fetch applications', () => {
  it('should fetch applications in the correct format', () => {
    const applications = fetchApplications('my.domain'); // TODO change me
    applications.every(application => expect(application).toHaveProperty('name') && expect(application).toHaveProperty('href') && expect(application).toHaveProperty('img'));
  });
});
