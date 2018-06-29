import { ApplicationContainer } from '../ApplicationContainer';
import style from './style.module.scss';

export function ApplicationLauncher({ ...props }) {
  return (
    <div className={style.ApplicationLauncher}>
      <ApplicationContainer {...props} />
    </div>
  );
}
