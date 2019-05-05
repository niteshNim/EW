import React,{Component} from 'react';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';

class Home extends Component 
{

  render()
  {
    return(
      <div className="demo-big-content">
      <Layout>
          <Header title="Logo" scroll>
              <Navigation>
                  <a href="#">Login</a>
                  <a href="#">Signup</a>
                  <a href="#">About Us</a>
                  <a href="#">Contact Us</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
              <a href="/">Login</a>
                  <a href="/">Signup</a>
                  <a href="/">About Us</a>
                  <a href="/">Contact Us</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
          </Content>
      </Layout>
  </div>
    );
  }
}
export default Home;
