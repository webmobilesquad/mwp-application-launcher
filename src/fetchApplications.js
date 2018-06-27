export async function fetchApplications(domain) {
  // TODO
  // fetch applications from server api

  const url = `${domain}/msn/api/applications`;
  console.log('url: ', url);

  return Promise.resolve([
    {
      id: 0,
      name: 'Home',
      href: 'https://mywebportal.michelin-solutions.com/home',
      img: 'https://mywebportal.michelin-solutions.com/msn-applications/5da990a45725cd07b890f6b62a7bbb66.png',
    },
    {
      id: 1,
      name: 'MyInspection',
      href: 'https://mywebportal.michelin-solutions.com/my-inspection',
      img: 'https://mywebportal.michelin-solutions.com/msn-applications/595847694218e668013f7dc4339790f2.png',
    },
    {
      id: 2,
      name: 'MyTraining',
      href: 'https://mywebportal.michelin-solutions.com/my-training',
      img: 'https://mywebportal.michelin-solutions.com/msn-applications/ae001618ead2779cbb3f7e5c44b6ec0f.png',
    },
  ]);
}
