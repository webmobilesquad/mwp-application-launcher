import { Component } from 'preact';
import cx from 'classnames';
import { fetchApplications } from '../fetchApplications';
import { Application } from '../Application';

import style from './style.module.scss';

export class ApplicationContainer extends Component {
  state = {
    applications: undefined,
  }

  componentDidMount() {
    this.initApplications();
  }

  async initApplications() {
    const { url } = this.props;
    const applications = await fetchApplications(url);
    this.setState({ applications });
  }

  render({ className, ...props }, { applications }) {
    return (
      <div className={cx(style.ApplicationContainer, className)} {...props}>
        {applications && applications.map(application => <Application application={application} />)}
      </div>
    );
  }
}
