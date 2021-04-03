import { render, screen } from '../../../infra/test/testUtils';
import Link from './index';

describe('<Button />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(<Link href="/">Link</Link>);

    // screen.debug();
    // expect(true).toBe(true);

    const button = screen.getByRole('link', { name: /link/i });
    expect(button).toMatchSnapshot();
  });
});
