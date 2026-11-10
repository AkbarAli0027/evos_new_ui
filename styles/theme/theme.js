import { createTheme } from '@mui/material/styles'
import { color, fontSize } from '@mui/system'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#F6F8F9',
    },
    primary: {
      main: '#077855',
      dark: '#007749',
      black: 'red',
      yellow: '#FFCD00',
    },
    secondary: {
      main: '#F6F8F9',
    },
    background: {
      main: '#E5E5E5',
    },
    gray: {
      200: '#6E7C87',
      400: '#9AA6AC',
    },
  },
  button: {
    primarys: {
      background: 'red',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '13px 94px',
          background: '#F6F8F9',
          whiteSpace: 'nowrap',
          color: '#000000',
          fontSize: '17px',
          lineHeight: '22px',
          letterSpacing: '-0.41px',
        },
        fullWidth: {
          width: '100%',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width:1295px)': {
            paddingLeft: 8,
            paddingRight: 8,
          },
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width:1295px)': {
            maxWidth: '1360px',
            width: '100%',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 116,
          '@media (min-width:600px)': {
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          borderRadius: 0,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#F6F8F992',
          color: '#000',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          maxWidth: 261,
        },
        arrow: { color: '#F6F8F992' },
      },
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    caption: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '28px',
    },
    h1: {
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: '48px',
      color: '#000',

      letterSpacing: '0.41px',
      '@media (max-width:575px)': {
        fontSize: 30,
        lineHeight: '38px',
      },
    },
    h2: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: '22px',
      color: '#309B42',

      letterSpacing: '0.41px',
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: '25px',
      color: '#000000',
      letterSpacing: '0.41px',
    },
    h4: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: '22px',
      color: '#000000',

      letterSpacing: '0.41px',
    },
    h5: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: '20px',
      color: '#ffffff',

      letterSpacing: '0.41px',
    },
    h6: {
      fontSize: 22,
      fontWeight: 500,
      lineHeight: '28px',
      color: '#000000',

      letterSpacing: '0.35px',
    },
    h7: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '25px',
      color: 'red',

      letterSpacing: '0.38px',
    },
    h8: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '25px',
      color: '#309B42',

      letterSpacing: '0.38px',
    },
    h9: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: '34px',
      color: '#000000',

      letterSpacing: '0.34px',
    },
    h10: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: '34px',
      color: '#309B42',

      letterSpacing: '0.34px',
    },
    h11: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '25px',
      color: '#6E7C87',

      letterSpacing: '0.38px',
    },
    h12: {
      fontSize: 22,
      fontWeight: 500,
      lineHeight: '28px',
      color: '#309B42',

      letterSpacing: '0.35px',
    },
    h13: {
      fontSize: 20,
      fontWeight: '550',
      lineHeight: '25px',
      color: '#000000',
      fontFamily: 'Helvetica',
      letterSpacing: '0.41px',
    },
    h14: {
      fontSize: 15,
      fontWeight: '550',
      lineHeight: '20px',
      color: '#5B6871',

      letterSpacing: '0.24px',
    },
    h15: {
      fontSize: 15,
      fontWeight: '550',
      lineHeight: '20px',
      color: '#B0BABF',

      letterSpacing: '0.24px',
    },
    h16: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '28px',
      color: '#000000',

      letterSpacing: '0.35px',
    },
    h17: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: '22px',
      color: '#5B6871',

      letterSpacing: '0.41px',
    },
    h18: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: '18px',
      color: '#84919A',

      letterSpacing: '0.08px',
    },
    h19: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '20px',
      color: '#48535B',

      letterSpacing: '0.24px',
    },
    h20: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '28px',
      color: '#5B6871',

      letterSpacing: '0.24px',
    },
    h21: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '18px',
      color: '#000000',

      letterSpacing: '0.24px',
    },
    h22: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: '20px',
      color: '#fff',

      letterSpacing: '0.24px',
    },
    h23: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '25px',
      color: '#84919A',

      letterSpacing: '0.38px',
    },
    h24: {
      fontSize: 17,
      fontWeight: 500,
      lineHeight: '28px',
      color: '#5B6871',

      letterSpacing: '0.24px',
    },
    body1: {
      fontWeight: 500,
      fontSize: 17,
      lineHeight: '22px',
      color: '#6E7C87',
    },
    body2: {
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '18px',
      color: '#9AA6AC',

      letterSpacing: '0.08px',
    },
    body3: {
      fontWeight: 500,
      fontSize: 15,
      lineHeight: '20px',
      color: '#000',
      letterSpacing: '0.41px',
    },
    body4: {
      fontWeight: 500,
      fontSize: 15,
      lineHeight: '20px',
      color: '#9AA6AC',

      letterSpacing: '0.08px',
    },
    button: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: 17,
      lineHeight: '22px',
      color: '#000',
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
  },
})

export default lightTheme
