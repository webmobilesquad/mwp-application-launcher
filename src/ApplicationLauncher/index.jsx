import cx from 'classnames';
import { ApplicationList } from '../ApplicationList';
import style from './style.module.scss';

export function ApplicationLauncher({ light, ...props }) {
  const classes = {
    [style.ApplicationLauncher__Light]: light,
  };
  return (
    <ApplicationList
      className={cx(style.ApplicationLauncher, classes)}
      applicationClassName={style.Application}
      applicationActiveClassName={style.Application__Active}
      light={light}
      {...props}
    />
  );
}
