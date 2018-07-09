import { ApplicationContainer } from '../ApplicationContainer';
import style from './style.module.scss';

export function ApplicationLauncher({ ...props }) {
  return (
    <ApplicationContainer
      className={style.ApplicationLauncher}
      applicationClassName={style.Application}
      applicationActiveClassName={style.Application__Active}
      {...props}
    />
  );
}
