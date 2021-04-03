import { render, screen } from '../../../infra/test/testUtils';
import Footer from './index';

describe('<Footer />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(<Footer show isTest />);
    // screen.debug();
    // expect(true).toBe(true);

    const footerRendered = screen.getByRole('contentinfo');
    expect(footerRendered).toMatchSnapshot();
  });
});
