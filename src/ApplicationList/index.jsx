import { Component } from 'preact';
import { connect } from 'unistore/preact';
import cx from 'classnames';
import { Application } from '../Application';
import { Placeholder } from '../Application/Placeholder';
import { actions } from '../actions';
import style from './style.module.scss';

class ApplicationListWithStore extends Component {
  componentDidMount() {
    const { getApplications } = this.props;
    getApplications();
  }

  render({
    applications,
    className,
    applicationClassName,
    applicationActiveClassName,
    currentUrl,
    light,
    ...props
  }) {
    let items;
    if (applications) {
      items = applications.map(application => (
        <Application
          application={application}
          className={applicationClassName}
          activeClassName={applicationActiveClassName}
          url={currentUrl}
          light={light}
        />
      ));
    } else {
      const placeholder = <Placeholder className={applicationClassName} light={light} />;
      items = Array.from(Array(4)).map(() => placeholder);
    }
    return (
      <ul className={cx(style.ApplicationList, className)} {...props}>
        {items}
      </ul>
    );
  }
}

export const ApplicationList = connect(
  state => ({ applications: state.applications.data, currentUrl: state.currentUrl }),
  actions,
)(ApplicationListWithStore);
