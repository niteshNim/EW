import React,{Component} from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Grid,Cell,Card,CardText,CardTitle,CardMenu,IconButton,CardActions,Button} from 'react-mdl';
import SocialMediaIcons from 'react-social-media-icons';

export class FooterPage extends Component 
{

  render()
  {
    return(
        <div className="footer">
          <Grid>
          <Cell col={6}>
              <h5 >Footer Content</h5>
              <p>
                Footer Links
                              </p>
            </Cell>
            <Cell col={6}>
              <h5>Links</h5>
              <i class="fab fa-facebook-f"></i>
            </Cell>
            </Grid>

        <div className="footer-copyright text-center py-3">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </div>
        </div>
 );
  }
}





