import { Component } from 'preact';
import cx from 'classnames';
import style from './style.module.scss';
import isApplicationActive from '../isApplicationActive';

export class Application extends Component {
  state = {
    active: false,
  }

  componentDidMount() {
    const { application } = this.props;
    if (isApplicationActive(application)) {
      this.setState({
        active: true,
      });
    }
  }

  render({ application }, { active }) {
    const { name, url, icon } = application;
    const className = {
      [style.Application__Active]: active,
    };
    return (
      <div className={cx(style.Application, className)}>
        <a href={url} title={name}>
          <div className={style.Application_Content}>
            <img src={icon} alt={name} />
          </div>
        </a>
      </div>
    );
  }
}
