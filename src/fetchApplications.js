import fetch from 'unfetch';

function fallback() {
  return [];
}

export async function fetchApplications(url) {
  let applications;
  try {
    const res = await fetch(url);
    applications = res.ok ? await res.json() : fallback();
  } catch (error) {
    applications = fallback();
  }
  return applications;
}
