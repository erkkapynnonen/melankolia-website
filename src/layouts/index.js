import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import logo from './assets/logo-occu-min.png'
import down from './assets/caret-down.png'

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <Navbar dark fixed="top">
          <NavbarBrand href="/">MELANKOLIA</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Band</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Tour Dates</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Media and Releases</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
const Header = () => (
  <div>
    <Navigation />
    <Jumbotron fluid>
      <Container fluid>
        <div className="hero-inner">
          <img src={logo} className="logo" alt="Logo" />
          <SocialIconLinks />
        </div>
      </Container>
    </Jumbotron>
  </div>
)

const Footer = () => (
  <footer>
    <Container>
      <SocialIconLinks />
    </Container>
  </footer>
)

const SocialIconLinks = () => (
  <div>
    <Link to=""><FontAwesomeIcon icon={["fab", "facebook"]} /></Link>
    <Link to=""><FontAwesomeIcon icon={["fab", "instagram"]} /></Link>
    <Link to=""><FontAwesomeIcon icon={["fab", "spotify"]} /></Link>
    <Link to=""><FontAwesomeIcon icon={["fab", "youtube"]} /></Link>
    <Link to=""><FontAwesomeIcon icon={["fab", "soundcloud"]} /></Link>
  </div>
)

const TemplateWrapper = ({ children, data }) => {
  return (
  <div>
    <Helmet
      title="Band Name"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Container>
      {children()}
    </Container>
    <Footer />
  </div>
)
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

