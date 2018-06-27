import { h, Component } from 'preact';
import { fetchApplications } from '../fetchApplications';
import { Application } from '../Application';

export class ApplicationLauncher extends Component {
  constructor() {
    super();
    this.state = {
      applications: undefined,
    };
  }

  componentDidMount() {
    this.initApplications();
  }

  initApplications() {
    const { url } = this.props;
    const applications = fetchApplications(url);
    this.setState({ applications });
  }

  render(props, { applications }) {
    return (
      <div>
        <span>Hello JSX!</span>
        {applications && applications.map(application => <Application {...application} />)}
      </div>
    );
  }
}
