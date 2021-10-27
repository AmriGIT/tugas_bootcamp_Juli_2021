import React, {Component} from 'react';
import {ActivityIndicator, Alert, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }

  renderItem = items => {
    const {item} = this.props.propsUser;
    return (
      <ListItem
        bottomDivider
        onPress={() => Alert.alert('Warning', 'Hi, ' + item.name)}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  render() {
    console.log(this.state.users);
    if (this.state.loading) return <ActivityIndicator />;

    return (
      <FlatList
        keyExtractor={(data, idx) => idx.toString()}
        data={this.state.users}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Admin;
