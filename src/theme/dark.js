import { typographyVariants } from './typographyVariants'
import { breakpoints, defaultStyles } from './index'

export const colors = {
  background: {
    main: {
      color: '#00251a'
    },
    secondary: {
      color: '#004d40'
    }
  },
  text: {
    head1: {
      color: '#62757f'
    },
    head2: {
      color: '#90a4ae'
    },
    main: {
      color: '#eceff1'
    }
  },
  borders: {
    main: {
      color: '#ffad42'
    }
  },
  primary: {
    main: {
      color: '#546E7A',
      contrastText: '#fff'
    }
  },
  secondary: {
    main: {
      color: '#F57C00',
      contrastText: '#29434E'
    }
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff'
    },
    light: {
      color: '#819CA9',
      contrastText: '#fff'
    }
  }
}

export default {
  title: 'dark',
  colors,
  typographyVariants,
  breakpoints,
  defaultStyles
}
