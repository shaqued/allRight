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
            default: "#FAFAFA",
            paper: "#FFFFFF",
            homepage: 'rgb(81,122,106)'
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
        MuiOutlinedInput: { 
            input: {
            },
        },
        MuiRadio: {
            root: {
                color: "#424242"
            }
        }
    },
    props: {
        MuiRadio: {
            color: 'primary',
            size: 'small'
        },
        MuiTextField: {
            variant: "outlined",
            inputlabelprops: {
                shrink: false
            },
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
            //fontWeight: "fontWeightMedium",
            fontSize: "0.8rem",
            letterSpacing: "0.05em",
            fontWeight: "normal",
            fontFamily: "Open Sans Hebrew",
        },
        h1: {
            fontWeight: 800,
            fontSize: "3.1rem"
        },
        h2: {
            fontWeight: 800,
            fontSize: "2rem"
        },
        h3: {
            fontWeight: 800,
            fontSize: "1.3em"
        },
        h4: {
            fontWeight: "bold",
            fontSize: "1rem"
        },
        h5: {
            fontWeight: 'bold',
            fontSize: "1rem"
        },
        h6: {
            fontWeight: "normal",
            fontSize: "0.8rem",
        },
        subtitle1: {
            fontSize: "0.8em",
            fontWeight: "lighter"
        },
        subtitle2: {
            fontSize: "0.8em",
            fontWeight: 'bold'
        },
        body1: {
            fontSize: "0.7rem"
        },
        body2: {
            fontSize: "1.1rem"
        }
    },
});