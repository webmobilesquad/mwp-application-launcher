import cx from 'classnames';
import style from './style.module.scss';

export function ApplicationLauncherModal({ visible, ...props }) {
  const className = {
    [style.ApplicationLauncherModal__Visible]: visible,
  };
  return (
    <aside className={cx(style.ApplicationLauncherModal, className)} {...props}>
      <div className={style.ApplicationLauncherModal_Content}>
        I am a modal that should contain applications
      </div>
    </aside>
  );
}
