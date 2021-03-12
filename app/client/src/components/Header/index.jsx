import { NavLink, Link } from 'react-router-dom';
import { labels } from '../../utils/labels';
import { roadMap } from '../../router';
import logo from '../../assets/img/stanford-vl-logo.png';
import useStyles from './useStyles';

const Header = () => {
    const classes = useStyles();

    return <header className={classes.header}>
        <img src={logo} alt={labels.header.logoAlt} className={classes.logo} />
        <ul className={classes.ul}>
            {
                roadMap.map((prop, key) => (!prop.redirect && !prop.externalLink) 
                    ? <li key={key}>
                        <NavLink to={prop.path}>
                            {prop.name}
                        </NavLink>
                    </li>
                    : prop.externalLink && <li key={key}>
                        <Link to={prop.path} component={prop.component} />
                    </li>
                )
            }
        </ul>
    </header>
}

export default Header;