import { Component } from 'preact';
import cx from 'classnames';
import style from './style.module.scss';
import { ApplicationLauncherModal } from '../ApplicationLauncherModal';

export class ApplicationLauncherButton extends Component {
  state = {
    modalVisible: false,
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  render({ className, color, ...props }, { modalVisible }) {
    return (
      <div>
        <button type="button" className={cx(style.ApplicationLauncherButton, className)} onClick={this.showModal} {...props}>
          {/* https://material.io/tools/icons/?search=apps&icon=apps&style=baseline */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" fill={color} />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        <ApplicationLauncherModal visible={modalVisible} closeHandler={this.hideModal} />
      </div>
    );
  }
}
