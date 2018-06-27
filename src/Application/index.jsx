import { Component } from 'preact';
import style from './style.module.scss';

export class Application extends Component {
  state = {
    active: false,
  }

  render({ application }) {
    const { name, url, icon } = application;
    return (
      <div className={style.Application}>
        <a href={url}>
          <img src={icon} alt={name} />
          <span>{name}</span>
        </a>
      </div>
    );
  }
}
