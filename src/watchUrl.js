import history from 'history-events';
import { store } from './store';

const updateCurrentUrl = () => {
  store.setState({ currentUrl: window.location.href });
};

export function watchUrl() {
  if (history.isHistorySupported() && window !== undefined) {
    window.addEventListener('changestate', updateCurrentUrl);
    updateCurrentUrl();
  }
}
