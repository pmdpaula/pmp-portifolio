import { breakpoints, defaultStyles } from './index';
import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    main: {
      color: '#00251a',
    },
    secondary: {
      color: '#004d40',
    },
  },
  text: {
    head1: {
      color: '#9ea7aa',
    },
    head2: {
      color: '#cfd8dc',
    },
    main: {
      color: '#eceff1',
    },
    link: {
      color: '#cfd8dc',
    },
    black: {
      color: '#000',
    },
    white: {
      color: '#fff',
    },
  },
  borders: {
    main: {
      color: '#ffad42',
    },
  },
  primary: {
    main: {
      color: '#546E7A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#F57C00',
      contrastText: '#000',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#819CA9',
      contrastText: '#fff',
    },
  },
};

export default {
  title: 'dark',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles,
};
