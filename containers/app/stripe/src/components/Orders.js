import React from 'react';
import { Box } from 'gestalt';

class OrderRow extends React.Component {
  render() {
    const id = this.props.id;
    return (
      <tr>
        <th colSpan="2">
          Order: {id}
        </th>
      </tr>
    );
  }
}

class ItemRow extends React.Component {
  render() {
    const item = this.props.item;
    const name = item.stocked ?
      item.name :
      <span style={{color: 'red'}}>
        {item.name}
      </span>;

    return (
      <tr>
        <td padding={2}>{name}</td>
        <td padding={2}>{item.description}</td>
        <td padding={2}>{process.env.REACT_APP_CURRENCY_SYMBOL}{item.price}</td>
        <td padding={2}>{item.quantity}</td>
      </tr>
    );
  }
}

class OrderTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const myOrdersOnly = this.props.myOrdersOnly;

    const rows = [];
    let lastOrder = null;
    let lastItem = null;
    
    this.props.orders.forEach((order) => {
      if (order.id.indexOf(filterText) === -1) {
        return;
      }
      if (myOrdersOnly && order.userId !== user.id ) {
        this.return;
      }
      if (order.id !== lastOrder) {
         rows.push(
           <OrderRow
             id={order.id}
             key={order.id} />
         );
      }
      order.items.forEach((item) => {
        if (item._id !== lastItem) {
          rows.push(
            <ItemRow
              item={item}
              key={item._id} />
          );
        }
        lastItem = item._id;
      });
      lastOrder = order._id;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleMyOrdersOnlyChange = this.handleMyOrdersOnlyChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleMyOrdersOnlyChange(e) {
    this.props.onMyOrdersOnlyChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}/>
        <p>
          <input 
            type="checkbox"
            checked={this.props.myOrdersOnly}
            onChange={this.handleMyOrdersOnlyChange} />
          {' '}
          Only show my orders
        </p>
      </form>
    );
  }
}

class FilterableOrderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      myOrdersOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleMyOrdersOnlyChange = this.handleMyOrdersOnlyChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleMyOrdersOnlyChange(myOrdersOnly) {
    this.setState({
      myOrdersOnly: myOrdersOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          myOrdersOnly={this.state.myOrdersOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onMyOrdersOnlyChange={this.handleMyOrdersOnlyChange}
        />
        <OrderTable 
          orders={this.props.orders} 
          filterText={this.state.filterText}
          myOrdersOnly={this.state.myOrdersOnly}
        />
      </div>
    );
  }
}

const ORDERS = [
  {
    "id": "61e6966e04f09e39e02374bb",
    "items": [
      {
        "_id": "61d2f8578b351a5620a02592",
        "name": "LIS Repository",
        "description": "LithoInsight (LIS) Repository",
        "image": {
          "url": "/uploads/Code_LIS_4965c83fc7.png"
        },
        "price": 0,
        "quantity": 3
      },
      {
        "_id": "61d6fd3a08a84e1ab4f3191d",
        "name": "VCP Test Cluster",
        "description": "Virtual Compute Platform (VCP) Test Cluster",
        "image": {
          "url": "/uploads/Provision_VCP_88cde1032e.png"
        },
        "price": 0,
        "quantity": 1
      }
    ],
    "userId": "61d709a96eb22f5919cce576"
  }
];

class Orders extends React.Component {
  state= {
    orders: []
  }

  render() {
    const { orders } = this.state;  
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
        {/* Orders Section */}
        <FilterableOrderTable orders={ORDERS} />           
      </Box>
    );
  }  
}

export default Orders;
