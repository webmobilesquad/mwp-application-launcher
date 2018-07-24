import render from 'preact-render-spy';
import { Provider } from 'unistore/preact';
import { Placeholder } from '..';
import { store } from '../../../store';

describe('<Placeholder />', () => {
  test('<Placeholder /> matches snapshot', () => {
    expect(
      render(
        <Provider store={store}>
          <Placeholder />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
