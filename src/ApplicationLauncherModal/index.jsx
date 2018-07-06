import cx from 'classnames';
import style from './style.module.scss';
import { ApplicationContainer } from '../ApplicationContainer';

export function ApplicationLauncherModal({ visible, onClose, ...props }) {
  const classes = {
    [style.ApplicationLauncherModal__Visible]: visible,
  };
  return (
    <aside className={cx(style.ApplicationLauncherModal, classes)} {...props}>
      <div className={style.ApplicationLauncherModal_Header}>
        <button type="button" className={style.CloseButton} onClick={onClose}>
          {/* https://material.io/tools/icons/?search=close&icon=close&style=baseline */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </div>
      <ApplicationContainer className={style.ApplicationLauncherModal_Content} grid />
    </aside>
  );
}
