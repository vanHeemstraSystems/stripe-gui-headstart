import React, { Component } from 'react';
// prettier-ignore
import { Container, Box, Heading, Card, Image, Text, SearchField, Icon } from 'gestalt';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    groups: [],
    searchTerm: "",
    loadingGroups: true
  }
  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query { groups { _id name description image {url} } }`
        }
      });
      console.log(response);
      this.setState({ groups: response.data.groups, loadingGroups: false });
    } catch(err) {
      console.log(err);
      this.setState({ loadingGroups: false });
    }
  }

  handleChange = ({ value }) =>{
    this.setState({ searchTerm: value});
  };

  filteredGroups = ({ searchTerm, groups }) => {
    return groups.filter(group => {
      return (
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  render() {
    const { searchTerm, loadingGroups } = this.state;

    return (
      <Container>
        {/* Groups Search Field */}
        <Box
          display="flex"
          justifyContent="center"
          marginTop={4}
        >
          <SearchField 
            id="searchfield"
            accessibilityLabel="Groups Search Field"
            onChange={this.handleChange}
            value={searchTerm}
            placeholder="Search Groups"
          />
          <Box margin={3}>
            <Icon 
              icon="filter"
              color={searchTerm ? 'orange': 'gray'}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>
        {/* Groups Section */}
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={2}
        >
          {/* Groups Heading */}
          <Heading
            color="midnight"
            size="md"
          >
            Catalogue
          </Heading>
        </Box>
        {/* Groups */}
        <Box
          dangerouslySetInlineStyle={{
            __style:{
              backgroundColor: '#e6f3ff'
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {this.filteredGroups(this.state).map(group => (
            <Box
              dangerouslySetInlineStyle={{
                __style: {
                  backgroundColor: 'white'
                }
              }}
              shape="rounded"  
              paddingY={4}
              margin={2}
              width={200}
              key={group._id}
            >
              <Card
                image={ 
                  <Box height={100} width={200}>
                    <Image 
                      fit="cover"
                      alt="Group"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${group.image.url}`}
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
                  <Text bold size="xl">{group.name}</Text>
                  <Text>{group.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${group._id}`}>View</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <Loader show={loadingGroups} />
      </Container>
    );
  }
}

export default App;
