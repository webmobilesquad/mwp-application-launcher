import { h } from 'preact';
import { fetchApplications } from '../fetchApplications';
import { Application } from '../Application';

export function ApplicationLauncher({ url }) {
  const applications = fetchApplications(url);

  return (
    <div>
      <span>Hello JSX!</span>
      {applications.map(application => <Application {...application} />)}
    </div>
  );
}
