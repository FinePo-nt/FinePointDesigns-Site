import * as React from 'react';
import '../../../App.css'
import Hero from '../../content/Hero';
import Portfolio from '../Portfolio/Portfolio';
import HowItWorks from '../../content/HowItWorks';

const Home = () => {
 return(
    <React.Fragment>
         <Hero /> 
         <Portfolio/>
         <HowItWorks />
    </React.Fragment>
 );
}

export default Home;