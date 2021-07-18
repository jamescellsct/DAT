// eslint-disable-next-line import/no-anonymous-default-export
export default {
  breakpoints: ['40em', '52em', '64em'],
  space: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '40px',
    xxl: '64px',
  },
  borders: {
    borderLight: '1px solid #b5b2b1',
    borderPrimary: '1px solid #ffc907',
  },
  fonts: {
    body: '"Ubuntu", Helvetica, Arial, sans-serif',
    heading: '"Ubuntu", Helvetica, Arial, sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primaryColor: '#ffc907',
    primaryText: '#b5b2b1',
    primaryMeter: '#00da48',
    primaryActive: '#0bcae6',
    bodyBg: '#353535',
    panelBg: '#505050',
    toolbarBg: '#202020',
    toolbarSelected: '#202020',
    indicatorColorRed: '#ff1200',
    indicatorColorBlue: '#0bcae6',
    indicatorColorGreen: '#00da48',
    groupingColorPink: '#a224a1',
    transparent: 'transparent',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 500,
    display: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      uppercase: 'uppercase',
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
  },
  styles: {
    body: {
      backgroundColor: 'bodyBg',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'textStyles.display',
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1,
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    img: {
      maxWidth: '100%',
    },
  },
  images: {
    headerPanel: {
      height: 14,
    },
  },
  buttons: {
    primary: {
      color: 'primaryText',
      borderRadius: 2,
      cursor: 'pointer',
      border: 'none',
      bg: 'bodyBg',
      '&:hover': {
        bg: 'primaryColor',
      },
    },
    secondary: {
      color: 'background',
      bg: '',
    },
  },
};
