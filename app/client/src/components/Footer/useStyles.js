import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    footer:{
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        width: '100%',
        background: '#8e2f05',
        padding: '20px 0px',
        color: '#fafafa',
    },
    date: {
        marginRight: 50,
    }
});

export default useStyles;