import { render, screen } from '../../../infra/test/testUtils';
import Menu from './index';

describe('<Menu />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(<Menu show />);

    // screen.debug();
    // expect(true).toBe(true);

    const logo = screen.getByText(/pedro de paula/i);
    expect(logo).toMatchSnapshot();

    const homeButton = screen.getByRole('link', {
      name: /home/i,
    });

    expect(homeButton).toMatchSnapshot();

    const projectsButton = screen.getByRole('link', {
      name: /projetos/i,
    });
    expect(projectsButton).toMatchSnapshot();

    const aboutButton = screen.getByRole('link', {
      name: /sobre/i,
    });
    expect(aboutButton).toMatchSnapshot();
  });
});
