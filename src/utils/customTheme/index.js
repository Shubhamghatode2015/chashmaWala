import { createTheme } from "@mui/material";


export const customTheme=createTheme({
    palette:{
        primary:{
            main:'#0395AF'
        },
        secondary:{
            main:'#000000'
        },
        info:{
            main:'#7A7A7A'
        },
        danger:{
            main:'#BEE9EA'
        },
        white:{
            main:'#ffffff'
        },
        shubham:{
            main: '#57A2F9'
        }
    },
    typography:{
        fontFamily: 'Public Sans' ,
        // fontFamily: 'Poppins', 
        h5:{
            fontSize:'25px'
        },
        h4:{
            fontSize:'25px'
        },
        h3:{
            fontSize:'45px'
        },
    }
})