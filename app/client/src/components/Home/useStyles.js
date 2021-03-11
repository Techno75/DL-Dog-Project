import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    contentHome: {
        width: '90%',
        margin: '30px auto 0px',
    },
    title: {
        textTransform: 'uppercase',
        color: '#8e2f05',
    },
    article: {
        display: 'flex',
        margin: '30px 0px',
    },
    notFirstArticle: {
        marginTop: 15,
    },
    img: {
        marginRight: 30,
    },
    titleArticle: {
        marginBottom: 15,
    }
});

export default useStyles;