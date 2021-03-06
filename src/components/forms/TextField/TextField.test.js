import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Pedro"
        onChange={() => {}}
        name="nome"
      />,
    );
    // screen.debug();
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });
});
