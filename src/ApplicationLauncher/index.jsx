import { connect } from 'unistore/preact';
import cx from 'classnames';
import { ApplicationList } from '../ApplicationList';
import style from './style.module.scss';

function ApplicationLauncherWithStore({ light, ...props }) {
  const classes = {
    [style.ApplicationLauncher__Light]: light,
  };
  return (
    <ApplicationList
      className={cx(style.ApplicationLauncher, classes)}
      applicationClassName={style.Application}
      applicationActiveClassName={style.Application__Active}
      {...props}
    />
  );
}

export const ApplicationLauncher = connect(
  state => ({ light: state.light }),
)(ApplicationLauncherWithStore);
