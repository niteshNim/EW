import React from 'react' ;
import {Switch,Route} from 'react-router-dom';
import {Landing} from '../landingcomponent/landing';
import {Login} from '../logincomponent/login';


export const Main=()=>
(
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
)


// export default Main;