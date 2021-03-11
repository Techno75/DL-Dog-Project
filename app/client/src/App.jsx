import { Route, Redirect } from 'react-router-dom';
import { roadMap } from './router';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return <>
    <Header />
    { 
      roadMap.map((prop,key) => 
        prop.redirect
        ? <Redirect from={prop.path} to={prop.to} key={key}/>
        : <Route path={prop.path} component={prop.component} key={key}/>
      )
    }
    <Footer />
  </>
}

export default App;
