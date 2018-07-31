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
      // Check permission for each application
      Promise.all(
        applicationsData.map((element) => {
          if (element.permission === undefined) return Promise.resolve(true);
          return Promise.resolve(hasPermission(element.permission))
            .catch(() => Promise.resolve(false));
        }),
      )
        // Filter out non allowed applications
        .then(elements => applicationsData.filter(() => elements.shift()))
        // Update the state with the allowed applications
        .then(elements => store.setState(
          {
            applications: {
              data: elements,
              loading: false,
            },
          },
        ));
    });
  },
});
