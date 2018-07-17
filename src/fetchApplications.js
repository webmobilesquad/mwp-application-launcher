export async function fetchApplications(url) {
  // TODO
  // fetch applications from server api

  return Promise.resolve([
    {
      name: 'Home',
      url: 'http://localhot:8082/home',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F0bdccdb6e6922c299d6e75f76e5aedd3.png?alt=media&token=76613b65-08ff-4375-9700-5a8a33eaaf9d',
    },
    {
      name: 'Administration',
      url: 'http://localhot:8082/admin',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2Fd28c81414c3b03c4aab0d700e116ea78.png?alt=media&token=a9a65e13-aaed-4393-aba2-f8573f700466',
    },
    {
      name: 'MyInspection',
      url: 'http://localhost:8082/my-inspection',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F61f8514e339ede3de5229a1a08883a9c.png?alt=media&token=7979ad18-be58-4952-b4dd-5b79c088ab83',
    },
    {
      name: 'MyTraining',
      url: 'http://localhost:8082/my-training',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F358f5f65a1b62ac1d6745186d76a2cdb.png?alt=media&token=43d27b04-eb65-45bf-bd32-3be4eb3ad230',
    },
    {
      name: 'MyBestRoute',
      url: 'http://localhost:8082/my-best-route',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2Fcb82eb178b8707b9257035c855175e7c.png?alt=media&token=1de81cea-111f-4993-9888-21ed5399030b',
    },
    {
      name: 'MyRewards',
      url: 'http://localhost:8082/my-rewards',
      icon: 'https://firebasestorage.googleapis.com/v0/b/effidrive-967c0.appspot.com/o/application-launcher%2F5685653e1a9e7bc6dd42d67afc138e56.png?alt=media&token=1e00dd50-c1d5-4bb2-8bd1-c6f92bd330de',
    },
  ]);
}
