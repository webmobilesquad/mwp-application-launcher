import { ApplicationList } from '../ApplicationList';
import style from './style.module.scss';

export function ApplicationLauncher({ ...props }) {
  return (
    <ApplicationList
      className={style.ApplicationLauncher}
      applicationClassName={style.Application}
      applicationActiveClassName={style.Application__Active}
      {...props}
    />
  );
}
