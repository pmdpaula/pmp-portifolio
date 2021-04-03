import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Text from '../../../foundation/Text/index';
import { render, screen } from '../../../infra/test/testUtils';
import GlassButton from './index';

describe('<GlassButton />', () => {
  // const { colors } = useContext(ThemeContext);
  test('renders component', () => {
    render(
      <GlassButton
        href="#"
        setIsModalState={() => {}}
        isModalOpen={false}
        otherColor="orange"
      >
        Pedro
      </GlassButton>,
    );
    // screen.debug();
    // expect(true).toBe(true);

    const glassButton = screen.getByRole('link', { name: /pedro/i });
    expect(glassButton).toMatchSnapshot();
  });
});
