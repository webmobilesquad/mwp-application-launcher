export async function fetchApplications(domain) {
  // TODO
  // fetch applications from server api

  const url = `${domain}/msn/api/applications`;
  console.log('url: ', url);

  return [
    {
      id: 1,
      name: 'MyInspection',
      href: 'https://mywebportal.michelin-solutions.com/my-inspection',
      img: '',
    },
    {
      id: 2,
      name: 'MyTraining',
      href: 'https://mywebportal.michelin-solutions.com/my-training',
      img: '',
    },
  ];
}
