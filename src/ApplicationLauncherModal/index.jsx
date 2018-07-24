import cx from 'classnames';
import { connect } from 'unistore/preact';
import style from './style.module.scss';
import { ApplicationList } from '../ApplicationList';

function ApplicationLauncherModalWithStore({ visible, light, ...props }) {
  const classes = {
    [style.ApplicationLauncherModal__Visible]: visible,
    [style.ApplicationLauncherModal__Light]: light,
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

export const ApplicationLauncherModal = connect(
  state => ({ light: state.light }),
)(ApplicationLauncherModalWithStore);
