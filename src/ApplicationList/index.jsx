import { Component } from 'preact';
import { connect } from 'unistore/preact';
import cx from 'classnames';
import { Application } from '../Application';
import { Placeholder } from '../Application/Placeholder';
import { actions } from '../actions';
import style from './style.module.scss';

class ApplicationListWithStore extends Component {
  state = {
    url: window.location.href,
  };

  componentDidMount() {
    const { getApplications } = this.props;
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
    const items = applications
      ? applications.map(application => (
        <Application
          application={application}
          className={applicationClassName}
          activeClassName={applicationActiveClassName}
          onClick={this.handleUrlChange(application)}
          url={url}
        />
      ))
      : Array.from(Array(6)).map(() => <Placeholder className={applicationClassName} />);
    return (
      <ul className={cx(style.ApplicationList, className)} {...props}>
        {items}
      </ul>
    );
  }
}

export const ApplicationList = connect(
  state => ({ applications: state.applications.data }),
  actions,
)(ApplicationListWithStore);