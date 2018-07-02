import { fetchApplications } from './fetchApplications';

export const actions = store => ({
  // TODO use async/await syntax if possible (see below)
  // Setting "async getApplications" with "await fetchApplications",
  // it seems that we cannot interact with the store
  async getApplications({ applications }) {
    // Do nothing if applications are already being loaded
    if (applications.loading) { return; }
    // Set the loading to true
    store.setState({
      applications: {
        loading: true,
      },
    });
    // Async fetch applications
    fetchApplications('toto').then((applicationsData) => {
      // Once done, update the state
      store.setState({
        applications: {
          data: applicationsData,
          loading: false,
        },
      });
    });
  },
});
