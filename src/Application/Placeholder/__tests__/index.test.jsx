import render from 'preact-render-spy';
import { Placeholder } from '..';

describe('<Placeholder />', () => {
  test('<Placeholder /> matches snapshot', () => {
    expect(
      render(
        <Placeholder />,
      ),
    ).toMatchSnapshot();
  });
});
