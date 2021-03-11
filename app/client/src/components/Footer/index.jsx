import useStyles from './useStyles';

const Footer = () => {
    const classes = useStyles();

    return <footer className={classes.footer}>
        <p className={classes.date}>© {new Date().getFullYear()}</p>
        <p>Guillaume Depretz & Robin Palmier</p>
    </footer>
}

export default Footer;