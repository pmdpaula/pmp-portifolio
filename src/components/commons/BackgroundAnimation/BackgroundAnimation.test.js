import { render } from '../../../infra/test/testUtils';
import BackgroundAnimation from './index';

describe('<BackgroundAnimation />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(
      <BackgroundAnimation
        numberOfBlocks={30}
        duration={500}
        direction="normal"
        loop={false}
        easing="linear"
        dispersion={500}
      />,
    );
    // screen.debug();
    expect(true).toBe(true);

    // const glassButton = screen.getByRole('link', { name: /pedro/i });
    // expect(glassButton).toMatchSnapshot();
  });
});
