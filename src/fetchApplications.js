export function fetchApplications(domain) {
  // TODO
  // fetch applications from server api

  const url = `${domain}/msn/api/applications`;
  console.log('url: ', url);

  return [
    {
      name: 'MyInspection',
      href: 'my-inspection',
      img: '',
    },
    {
      name: 'MyTraining',
      href: 'my-training',
      img: '',
    },
  ];

  // return Promise.resolve([
  //   {
  //     name: 'MyInspection',
  //     href: 'my-inspection',
  //     img: '',
  //   },
  //   {
  //     name: 'MyTraining',
  //     href: 'my-training',
  //     img: '',
  //   },
  // ]);
}
