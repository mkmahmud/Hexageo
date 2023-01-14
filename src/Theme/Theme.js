import { Button, createTheme, withStyles } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({


    palette: {
        primary: {
            main: '#FFFFFF', // red
        },
        secondary: {
            main: '#A59263', // blue
        },
        success: {
            main: '#008000'
        },
        white: {
            main: '#000000'
        }
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    padding: '0px'
                }
            },
            defaultProps: {
                maxWidth: 'xl',
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    color: '#ffffff',
                    fontSize: '16px',
                    textTransform: 'lowercase'
                },
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF'
                }
            }
        },

        MuiSelect: {
            styleOverrides: {
                root: {
                    
                    color: '#FFFFFF',
                    'svg':{
                        color:'#A59263'
                    },
                    'fieldset':{
                        borderColor:'#A59263',
                        '&:focus':{
                            borderColor:'#A59263'
                        }
                    }
                    
                }
            },

        },

        MuiTextField:{
            styleOverrides: {
                root: {
                    
                    color: '#FFFFFF',
                    'textarea':{
                        color:'white'
                    },
                    
                    '&:hover:not(.Mui-disabled):before': {
                        borderColor: 'red',
                    },
                    'svg':{
                        color:'#A59263'
                    },
                    'fieldset':{
                        borderColor:'#A59263',
                        '&:focus':{
                            borderColor:'#A59263'
                        }
                    }
                    
                }
            },
        }

        
    }

});

