import React,{Component} from 'react';
import {Grid,Cell,Card,CardText,CardTitle,CardMenu,IconButton,CardActions,Button} from 'react-mdl';
import {Login} from '../logincomponent/login'

export class LandingActions extends Component 
{

  render()
  {
    return(

    <Card shadow={2} style={{width: '512px', margin: 'auto',height:'400px'}}>
    <CardTitle className="landing-grid">Welcome
    </CardTitle>
    {/* <CardText>
        </CardText> */}
        <Grid >
<Cell col={6}>
<CardActions border>
        <Button raised colored style={{width:'180px' ,margin:'10px'}}>Student</Button>
    </CardActions>

</Cell>
<Cell col={6}><CardActions border>
        <Button raised colored style={{width:'180px' ,margin:'10px'}}>Tutor</Button>
    </CardActions>
</Cell>
</Grid>
        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
    );
  }
}
// export default Login;











