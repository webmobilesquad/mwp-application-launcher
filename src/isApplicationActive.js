export function isUrlActiveForApplication(url, application) {
  const { url: applicationUrl } = application;
  return url.startsWith(applicationUrl);
}

export default function isApplicationActive(application) {
  const { href } = window.location;
  return isUrlActiveForApplication(href, application);
}
