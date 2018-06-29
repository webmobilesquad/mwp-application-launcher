import cx from 'classnames';
import style from './style.module.scss';
import { ApplicationContainer } from '../ApplicationContainer';

export function ApplicationLauncherModal({ visible, ...props }) {
  const className = {
    [style.ApplicationLauncherModal__Visible]: visible,
  };
  return (
    <aside className={cx(style.ApplicationLauncherModal, className)} {...props}>
      <ApplicationContainer {...props} />
    </aside>
  );
}
