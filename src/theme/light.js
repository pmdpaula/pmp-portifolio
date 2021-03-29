import { breakpoints, defaultStyles } from './index';
import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    main: {
      color: '#cfd8dc',
    },
    secondary: {
      color: '#eceff1',
    },
  },
  text: {
    head1: {
      color: '#000a12',
    },
    head2: {
      color: '#263238',
    },
    main: {
      color: '#29434E',
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
      contrastText: '#29434E',
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
  title: 'light',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles,
};
