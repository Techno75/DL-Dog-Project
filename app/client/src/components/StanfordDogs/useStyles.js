import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    contentSD: {
        width: '90%',
        margin: '30px auto 0px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    submit: {
        border: '1px solid #8e2f05',
        color: '#fafafa',
        background: '#8e2f0587',
        padding: 10,
        marginTop: 20,
    },
    none: {
        display: 'none',
    },
    fileLabels: {
        padding: 10,
        textAlign: 'center',
        background: '#8e2f05',
        width: 220,
        margin: '0 auto',
        color: '#fafafa',
        fill: '#fafafa',
        cursor: 'pointer',
    },
    success: {
        background: '#058e39',
        width: 280,
    },
    span: {
        marginLeft: 20,
        fontWeight: 700,
    },
    imgUpload: {
        maxWidth: '100%',
        maxHeight: 350,
        marginBottom: 20,
    },
});

export default useStyles;