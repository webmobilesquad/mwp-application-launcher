import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { ApplicationList } from '../index';
import { store } from '../../store';

describe('<ApplicationList />', () => {
  test('<ApplicationList /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <ApplicationList />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
