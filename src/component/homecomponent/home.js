import React,{Component} from 'react';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import {Link} from 'react-router-dom';
import {Main} from '../maincomponent/main';
import {FooterPage} from '../layout/footercomponent/footer'
import { Footer } from 'mdbreact';
class Home extends Component 
{

  render()
  {
    return(
      <div >
      <Layout className="demo-big-content" style={{position:'relative'}}>
          <Header className="header-color" title="Logo" scroll>
              <Navigation>
              <Link to="/login">Login</Link>
                  <Link to="/">Signup</Link>
                  <Link to="/">About Us</Link>
                  <Link to="/">Contact Us</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
              <Link to="/login">Login</Link>
                  <Link to="/">Signup</Link>
                  <Link to="/">About Us</Link>
                  <Link to="/">Contact Us</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
      <Footer>
      <FooterPage/>
      </Footer>
  </div>
    );
  }
}
export default Home;
