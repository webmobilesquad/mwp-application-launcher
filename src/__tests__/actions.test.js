import createStore from 'unistore';
import { actions } from '../actions';
import * as fetcher from '../fetchApplications';

const mockApplications = [
  {
    name: 'Test app',
    permission: 'some.permission',
  },
];

fetcher.fetchApplications = jest.fn().mockResolvedValue(mockApplications);

const store = createStore();
const actionsWithStore = actions(store);

describe('action: getApplications', () => {
  it('should not fetch applications if endpoint url is not present', () => {
    actionsWithStore.getApplications({
      applications: {
        url: null,
      },
    });
    expect(fetcher.fetchApplications).not.toHaveBeenCalled();
  });

  it('should try to fetch applications', () => {
    const endpoint = 'test-api-endpoint';
    const hasPermission = jest.fn();
    actionsWithStore.getApplications({
      applications: {
        url: endpoint,
      },
      hasPermission,
    });
    expect(fetcher.fetchApplications).toHaveBeenCalledTimes(1);
    expect(fetcher.fetchApplications).toHaveBeenCalledWith(endpoint);
  });
});
