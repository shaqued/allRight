import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    direction: "rtl",
    palette: {
        type: 'light',
        primary: {
            //light:
            main: "#F095AF",
            //dark:
        },
        text: {
            primary: "#424242",
            darker: "#212121",
            secondary: "#FFFFFF"
        },
        background: {
            default: "#FFFFFF",
            paper: "#FAFAFA",
            dark: 'rgb(81,122,106)'
        },
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: '#FFFFFF',
            },
        },
        MuiFormControl: {
            marginNormal: {
                marginTop: "8px",
                marginBottom: "16px"
            }
        },
    },
    props: {
        MuiTextField: {
            variant: "outlined",
            inputlabelprops: {
                shrink: false
            }
        },
        MuiLink: {
            underline: "always"
        },
        MuiButton: {
            disableElevation: true,
        }
    },
    typography: {
        fontFamily: "Open Sans Hebrew",
        button: {
            fontWeight: "fontWeightMedium",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            fontWeight: "bold",
            fontFamily: "Open Sans Hebrew",
        },
        h1: {
            fontWeight: 800,
            fontSize: "7.5rem"
        },
        h2: {
            fontWeight: 800,
            fontSize: "2.5rem"
        },
        body1: {
            fontSize: "0.8rem"
        }
    },

});