import React,{Component} from 'react';
import {Grid,Cell,Card,CardText,CardTitle,CardMenu,IconButton,CardActions,Button} from 'react-mdl';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class LandingSlider extends Component 
{

  render()
  {
    return(

    <Card shadow={2} style={{width: '512px', margin: 'auto',height:'400px'}}>
     <Carousel>
                <div>
                    <img src=".../assets/education1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
</Card>
    );
  }
}











