import React from 'react';
import { Box, Text, Heading, Button } from 'gestalt';
import { getToken, clearToken, clearCart } from '../utils';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  handleSignout = () => {
    clearToken();
    clearCart();
    this.props.history.push('/');
  }

  render() {
    return getToken() !== null ? 
    <AuthNav handleSignout={this.handleSignout} /> : <UnAuthNav />;
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
  >
    {/* Title and Logo */}
    <Box display="flex" alignItems="start">
      <Heading size="sm" color="white">
        Stripe GUI  
      </Heading>
    </Box>

    {/* Catalogue Link */}
    <NavLink activeClassName="active" exact to="/">
      <Text size="md" color="white">Catalogue</Text>
    </NavLink>

    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="md" color="white">Checkout</Text>
    </NavLink>

    {/* Orders Link */}
    <NavLink activeClassName="active" to="/orders">
      <Text size="md" color="white">Orders</Text>
    </NavLink>

    {/* Sign Out Button */}
    <Button 
      onClick={handleSignout}
      color="transparent"
      text="Sign Out"
      inline
      size="md"
    />
  </Box>
) 

const UnAuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
  >
    {/* Title and Logo */}
    <Box display="flex" alignItems="start">
      <Heading size="sm" color="white">
        Stripe GUI  
      </Heading>
    </Box>

    {/* Catalogue Link */}
    <NavLink activeClassName="active" exact to="/">
      <Text size="md" color="white">Catalogue</Text>
    </NavLink>

    {/* Sign In Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="md" color="white">Sign In</Text>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="md" color="white">Sign Up</Text>
    </NavLink>
  </Box>
)

export default withRouter(Navbar);
