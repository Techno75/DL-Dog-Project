import cx from 'classnames';
import { labels } from '../../utils/labels';
import Snooky from '../../assets/img/snooky.jpg';
import useStyles from './useStyles';

const Home = () => {
    const classes = useStyles();

    return <div className={classes.contentHome}>
        <h1 className={classes.title}>{labels.home.title}</h1>
        <article className={classes.article}>
            <img src={Snooky} alt={labels.home.altImg} className={classes.img} />
            <div>
                <h2 className={classes.titleArticle}>Mise en situation</h2>
                <p>Vous êtes bénévole pour l'association de protection des animaux de votre quartier. C'est d'ailleurs ainsi que vous avez trouvé votre compagnon idéal, Snooky. Vous vous demandez donc ce que vous pouvez faire en retour pour aider l'association.</p>
                <br />
                <p>Vous apprenez, en discutant avec un bénévole, que leur base de données de pensionnaires commence à s'agrandir et qu'ils n'ont pas toujours le temps de référencer les images des animaux qu'ils ont accumulées depuis plusieurs années. Ils aimeraient donc obtenir un algorithme capable de classer les images en fonction de la race du chien présent sur l'image.</p>
                <h2 className={cx(classes.titleArticle, classes.notFirstArticle)}>Les données</h2>
                <p>Les bénévoles de l'association n'ont pas eu le temps de réunir les différentes images des pensionnaires dispersées sur leurs disques durs. Pas de problème, vous entraînerez votre algorithme en utilisant le Stanford Dogs Dataset.</p>
            </div>
        </article>
    </div>
}

export default Home;