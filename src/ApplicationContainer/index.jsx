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

  render({
    className, grid, applications, ...props
  }) {
    const classes = {
      [style.ApplicationContainer__Grid]: grid,
    };
    return (
      <div className={cx(style.ApplicationContainer, className, classes)} {...props}>
        {applications && applications.map(application => <Application application={application} />)}
      </div>
    );
  }
}

const wrapper = connect(state => ({ applications: state.applications.data }), actions);

export const ApplicationContainer = wrapper(ApplicationList);
