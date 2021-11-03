import React, {Component} from 'react';
import {ActivityIndicator, Alert, FlatList, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      limit: 15,
      page: 1,
      todos: []
    };
  }

  fetchData = async () => {
    try {
      const {limit, page} = this.state;
      const nextLoad = (page - 1) * limit;
      this.setState({loading: true});

      const responseTodos = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${nextLoad}`,
      );
      const respJson = await responseTodos.json();
      console.log(respJson);
      this.setState(oldState => {
        if (page == 1) return {todos: respJson, loading: false};

        return {todos: [...oldState.todos, ...respJson], loading: false};
      });
    } catch (e) {
      console.log('Catch', e);
      this.setState({loading: false});
    }
  };

  resetPage = () => {
    this.setState({page: 1}, this.fetchData);
  };

  triggerNextPage = () => {
    console.log('triggerNextPage');
    this.setState(oldState => ({page: oldState.page + 1}), this.fetchData);
  };
  componentDidMount() {
    this.fetchData();
  }
  renderItem = items => {
    const {item} = items;
    // const {item} = this.props.propsUser;
    return ( 
    <TouchableHighlight
    onPress={()=>console.log('you Toched me')}
    underlayColor={''}>
      <View>
        <ListItem
        bottomDivider
        onPress={()=>Alert.alert('Warning',' Hi '+ item.title)}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
      </View>
    </TouchableHighlight>
    )
  };
  render() {
    console.log(this.state.users);
    if (this.state.loading) return <ActivityIndicator />;

    return (
      <View>
        <SwipeListView 
        keyExtractor={(data, idx)=> idx.toString()}
        data={this.state.todos}
        renderItem={this.renderItem}
        onRefresh={this.resetPage}
        refreshing={this.state.loading}
        onEndReachedThreshold={0.2}
        onEndReached={this.triggerNextPage}

        />
      </View>
    );
  }
}

export default Admin;
