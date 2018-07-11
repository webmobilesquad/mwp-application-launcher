import { Component } from 'preact';
import { connect } from 'unistore/preact';
import cx from 'classnames';
import { Application } from '../Application';
import { actions } from '../actions';

import style from './style.module.scss';

class ApplicationListWithStore extends Component {
  state = {
    url: window.location.href,
  };

  componentDidMount() {
    const { getApplications } = this.props;
    // setTimeout(getApplications, 2000);
    getApplications();
  }

  handleUrlChange = application => () => {
    const { url: destinationUrl } = application;
    this.setState({ url: destinationUrl });
  };

  render(
    {
      applications, className, applicationClassName, applicationActiveClassName, ...props
    },
    { url },
  ) {
    return (
      <ul className={cx(style.ApplicationList, className)} {...props}>
        {applications
          && applications.map(application => (
            <Application
              application={application}
              className={applicationClassName}
              activeClassName={applicationActiveClassName}
              onClick={this.handleUrlChange(application)}
              url={url}
            />
          ))}
      </ul>
    );
  }
}

export const ApplicationList = connect(
  state => ({ applications: state.applications.data }),
  actions,
)(ApplicationListWithStore);
