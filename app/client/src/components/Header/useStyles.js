 import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header:{
        display:'flex',
        justifyContent: 'space-between',
        padding: '20px 20px 10px 20px',
        background: '#f8f8f8',
    },
    logo: {
        width: 100,
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        '& li': {
            margin: 'auto 10px',
            '& a': {
                textDecoration: 'none',
                color: '#8e2f05',
            }
        }
    },
});

export default useStyles;