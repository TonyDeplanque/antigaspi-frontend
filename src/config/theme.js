import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#fce2e3',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        form: {
            main: '#d8f5e0'
        },
        error: {
            main: '#fce2e3',
        }
    },
});

export default theme;