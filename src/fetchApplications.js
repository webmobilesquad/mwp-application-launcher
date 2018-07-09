export async function fetchApplications(url) {
  // TODO
  // fetch applications from server api

  return Promise.resolve([
    {
      name: 'Home',
      url: 'https://mywebportal.michelin-solutions.com/home',
      icon: 'https://firebasestorage.googleapis.com/v0/b/newagent-24433.appspot.com/o/home_icon.png?alt=media&token=996d566b-2ab9-4349-afa5-9ac31a2994e3',
    },
    {
      name: 'Administration',
      url: 'https://mywebportal.michelin-solutions.com/admin',
      icon: 'https://firebasestorage.googleapis.com/v0/b/newagent-24433.appspot.com/o/administration_icon.png?alt=media&token=f05d9acd-eccd-4a88-b015-db3cb9a9f382',
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
