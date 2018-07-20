import { fetchApplications } from './fetchApplications';

export const actions = store => ({
  getApplications({ applications, hasPermission }) {
    // Do nothing if url is not defined or applications are already being loaded
    if (!applications.url || applications.loading) { return; }
    // Set the loading to true
    store.setState({
      applications: {
        loading: true,
      },
    });
    // Async fetch applications
    fetchApplications(applications.url).then((applicationsData) => {
      // Filter out not allowed applications
      const allowedApplications = applicationsData.filter(
        application => application.permission === undefined
          || hasPermission(application.permission),
      );
      // Update the state
      store.setState({
        applications: {
          data: allowedApplications,
          loading: false,
        },
      });
    });
  },
});
