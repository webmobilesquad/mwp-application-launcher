export async function fetchApplications(domain) {
  // TODO
  // fetch applications from server api

  const url = `${domain}/msn/api/applications`;

  return Promise.resolve([
    {
      name: 'Home',
      url: 'https://mywebportal.michelin-solutions.com/home',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/5da990a45725cd07b890f6b62a7bbb66.png',
    },
    {
      name: 'Administration',
      url: 'https://mywebportal.michelin-solutions.com/admin',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/5da990a45725cd07b890f6b62a7bbb66.png',
    },
    {
      name: 'MyInspection',
      url: 'https://mywebportal.michelin-solutions.com/my-inspection',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/595847694218e668013f7dc4339790f2.png',
    },
    {
      name: 'MyTraining',
      url: 'https://mywebportal.michelin-solutions.com/my-training',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/ae001618ead2779cbb3f7e5c44b6ec0f.png',
    },
    {
      name: 'MyBestRoute',
      url: 'https://mywebportal.michelin-solutions.com/my-best-route',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/05046645ac2e122e4c4508e9f1490836.png',
    },
    {
      name: 'MyRewards',
      url: 'https://mywebportal.michelin-solutions.com/my-rewards',
      icon: 'https://mywebportal.michelin-solutions.com/msn-applications/070f89ea3a305fcf1dc3f8c348669a9a.png',
    },
  ]);
}
