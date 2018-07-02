import { ApplicationContainer } from '../ApplicationContainer';
import style from './style.module.scss';

export const ApplicationLauncher = ({ ...props }) => (
  <div className={style.ApplicationLauncher}>
    <ApplicationContainer {...props} />
  </div>
);
