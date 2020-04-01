import React from 'react';
import Home from './pages/Home';
import Country from './pages/Country';
import { Route, BrowserRouter} from 'react-router-dom';
import { AnimatedSwitch} from 'react-router-transition';
import Loader from './components/Loader/Loader';
import './App';

//TODO: PropTypes

const App = () =>
{
    return(
        <BrowserRouter>
            <AnimatedSwitch atEnter={{opacity:0}} atLeave={{opacity:0}} atActive={{opacity:1}} className="switch-wrapper">
                <Route exact={true} path="/" component={Home} />
                <Route path="/:countryName" component={Country} />
                <Route path="/loader" component={Loader} />
            </AnimatedSwitch>
        </BrowserRouter>
    )
}

export default App;