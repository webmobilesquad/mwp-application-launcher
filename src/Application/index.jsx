import { Component } from 'preact';
import cx from 'classnames';
import style from './style.module.scss';
import { isUrlActiveForApplication } from '../isApplicationActive';
import { PlaceholderImage } from './Placeholder/PlaceholderImage';

export class Application extends Component {
  state = {
    loaded: false,
  }

  imageOnLoad() {
    this.setState({
      loaded: true,
    });
  }

  render(
    {
      application, className, activeClassName, url: currentUrl, onClick, light,
    },
    {
      loaded,
    },
  ) {
    const { name, url, icon } = application;
    const classes = {
      [activeClassName]: isUrlActiveForApplication(currentUrl, application),
      [style.Application__Loaded]: loaded,
    };
    return (
      <li className={cx(style.Application, className, classes)}>
        <a href={url} title={name} onClick={onClick}>
          <PlaceholderImage className={style.PlaceholderImage} light={light} />
          <img src={icon} alt={name} onLoad={() => this.imageOnLoad()} />
        </a>
      </li>
    );
  }
}
