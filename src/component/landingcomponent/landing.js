import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {LandingActions} from './landingactions'
import {LandingSlider} from './landingslider'

export class Landing extends Component 
{

  render()
  {
    return(
<div style={{width:'100%',margin:'auto'}}>
<Grid >
<Cell col={4}><LandingActions/></Cell>
<Cell col={8}><LandingSlider/></Cell>
</Grid>
</div>
    );
  }
}
// export default Login;
