'use client';
import { createTheme } from '@mui/material/styles';


declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        mobile: true;
        tablet: true;
        md: true;
        lg: true;
        xl: false;
    }
}



const theme = createTheme({
  breakpoints: {
    values: {
       mobile: 320,
       tablet: 480,
       md: 730,
       lg: 1024,
    },
  },
});


export default theme;