import cx from 'classnames';
import style from './style.module.scss';
import { ApplicationContainer } from '../ApplicationContainer';

export function ApplicationLauncherModal({ visible, ...props }) {
  const classes = {
    [style.ApplicationLauncherModal__Visible]: visible,
  };
  return (
    <aside className={cx(style.ApplicationLauncherModal, classes)} {...props}>
      <ApplicationContainer
        className={style.ApplicationLauncherModal_Content}
        applicationClassName={style.Application}
        applicationActiveClassName={style.Application__Active}
      />
    </aside>
  );
}
