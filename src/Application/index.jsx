import { Component } from 'preact';
import style from './style.module.scss';

export class Application extends Component {
  state = {
    active: false,
  }

  render({ name, href, img }) {
    return (
      <div className={style.Application}>
        <a href={href}>
          <img src={img} alt={name} />
          <span>{name}</span>
        </a>
      </div>
    );
  }
}
