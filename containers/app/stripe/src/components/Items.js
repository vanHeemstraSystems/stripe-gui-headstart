import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box, Heading, Text, Image, Card, Button, Mask, IconButton } from 'gestalt';
import { calculatePrice, getCart, setCart } from '../utils';
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';
const currencySymbol = process.env.REACT_APP_CURRENCY_SYMBOL || '$';
const strapi = new Strapi(apiUrl);

class Items extends React.Component {
  state= {
    items: [],
    group: '',
    cartItems: []
  }

  async componentDidMount() {
    try {  
      // console.log(this.props.match.params.groupId);
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `{
            group(id: "${this.props.match.params.groupId}") {
              _id 
              name
              items {
                _id
                name
                description
                image {
                  url
                }
                price
              }
            }            
          }` 
        }
      })
      // console.log(response);
      this.setState({
        items: response.data.group.items,
        group: response.data.group.name,
        cartItems: getCart()
      })
    } catch(err) {
      console.error(err);
    }
  }

  addToCart = item => {
    const alreadyInCart = this.state.cartItems.findIndex(cartItem => cartItem._id === item._id);

    if(alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...item,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  }

  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };

  render() {
    const { group, items, cartItems } = this.state;  
    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Items Section */}
        <Box
          display="flex"
          direction="column"
          alignItems="center"
        >
          {/* Items Heading */}
          <Box
            margin={2}
          >
            <Heading color="midnight">{group}</Heading>
          </Box>
          {/* Items */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: '#e6f3ff'         
              }
            }}
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
            wrap
          >
            {items.map(item => (
              <Box
              dangerouslySetInlineStyle={{
                __style: {
                    backgroundColor: 'white'
                }
              }}
              shape="rounded"  
              paddingY={4}
              margin={2}
              width={210}
              key={item._id}
              >
                <Card
                  image={ 
                    <Box height={200} width={200}>
                      <Image 
                        fit="cover"
                        alt="Group"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${item.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    >
                    <Box
                      marginBottom={2}
                    >    
                      <Text bold size="xl">{item.name}</Text>
                    </Box>
                    <Box padding={2}>
                      <Text>{item.description}</Text>
                    </Box>
                    <Text color="midnight">{`${currencySymbol}${item.price}`}</Text>
                    <Box marginTop={2}>
                      <Text size="xl">
                        <Button onClick={() => this.addToCart(item)} color="blue" text="Add to Cart"/>
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        {/* User Cart */}
        <Box
          alignSelf="end"
          marginTop={2}
          marginLeft={8}
        >
          <Mask
            shape="rounded"
            wash
          >
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading
                align="center"
                size="sm"
              >
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>
              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - {process.env.REACT_APP_CURRENCY_SYMBOL}{(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete Item"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                    onClick={() => this.deleteItemFromCart(item._id)}
                  />
                </Box>
              ))}
              <Box display="flex" alignItems="center" justifyContent="center" direction="column">
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: {calculatePrice(cartItems)}</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Items;
