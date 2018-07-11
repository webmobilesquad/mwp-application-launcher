import cx from 'classnames';
import style from './style.module.scss';
import { ApplicationList } from '../ApplicationList';

export function ApplicationLauncherModal({ visible, ...props }) {
  const classes = {
    [style.ApplicationLauncherModal__Visible]: visible,
  };
  return (
    <aside className={cx(style.ApplicationLauncherModal, classes)} {...props}>
      <ApplicationList
        className={style.ApplicationLauncherModal_Content}
        applicationClassName={style.Application}
        applicationActiveClassName={style.Application__Active}
      />
    </aside>
  );
}
