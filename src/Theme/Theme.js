import { Button, createTheme, withStyles } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({


    palette: {
        primary: {
            main: '#FFFFFF', // red
        },
        secondary: {
            main: '#3F0071', // blue
        },
        success: {
            main: '#008000'
        },
        white: {
            main: '#000000'
        }
    },

    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight:'bold',
                    color: '#ffffff',
                    fontSize:'16px',
                    textTransform:'lowercase'
                },
            }
        }
    }

});

