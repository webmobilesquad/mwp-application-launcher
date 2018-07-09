import { Component } from 'preact';
import { connect } from 'unistore/preact';
import cx from 'classnames';
import { Application } from '../Application';
import { actions } from '../actions';

import style from './style.module.scss';

class ApplicationList extends Component {
  async componentDidMount() {
    const { getApplications } = this.props;
    getApplications();
  }

  render({ applications, className, applicationClassName, applicationActiveClassName, ...props }) {
    return (
      <ul className={cx(style.ApplicationList, className)} {...props}>
        {applications && applications.map(
          application => <Application application={application} className={applicationClassName} activeClassName={applicationActiveClassName} />,
        )}
      </ul>
    );
  }
}

export const ApplicationContainer = connect(
  state => ({ applications: state.applications.data }), actions,
)(ApplicationList);
