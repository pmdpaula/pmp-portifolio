import { render, screen } from '../../../infra/test/testUtils';
import Button from './index';

describe('<Button />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(<Button href="#">Botão</Button>);

    // screen.debug();
    // expect(true).toBe(true);

    const button = screen.getByRole('link', { name: /botão/i });
    expect(button).toMatchSnapshot();
  });
});
