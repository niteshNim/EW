import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {LandingActions} from './landingactions'
export class Landing extends Component 
{

  render()
  {
    return(
<div style={{width:'100%',margin:'auto'}}>
<Grid >
<Cell col={4}><LandingActions/></Cell>
<Cell col={8}>8</Cell>
</Grid>
</div>
    );
  }
}
// export default Login;
