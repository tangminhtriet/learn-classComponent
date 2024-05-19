import React, { Component } from 'react';
import './App.css';
import ToDoFeature from './components/ToDo/ToDoFeature';
import PostList from './components/Post/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import SearchFilter from './components/SearchFilter';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      pagination: {
        _page: 1,
        _limit: 10,
        _totalRows: 50,
      },
      filter: {
        _page: 1,
        _limit: 10,
        title_like: ''
      },
    }
  }
  async fetchPostList() {
    try {
      const params = queryString.stringify(this.state.filter)
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${params}`
      const response = await fetch(requestUrl)
      const responseJSON = await response.json()
      console.log(responseJSON);
      this.setState({
        postList: responseJSON.data,
      })
      console.log(this.state.postList);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.fetchPostList()
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.state.filter !== prevState.filter) {
      this.fetchPostList()
    }
  }
  handleChangePage = (newPage) => {
    const newPagination = { ...this.state.pagination }

    const newFilter = { ...this.state.filter }
    this.setState({
      filter: {
        ...newFilter,
        _page: newPage
      },
      pagination: {
        ...newPagination,
        _page: newPage
      }

    })
    console.log(this.state.filter._page);
  }
  handleFilterChange = (formValue) => {
    this.setState({
      _page: 1,
      filter: {
        ...this.state.filter,
        title_like: formValue.value
      }
    })
  }
  render() {
    return (
      <div>
        <ToDoFeature />
        <h2>Post List </h2>
        <SearchFilter onChange={this.handleSearchChange} onSubMit={this.handleFilterChange} />
        <PostList list={this.state.postList} />
        <Pagination pagination={this.state.pagination} onChangePage={this.handleChangePage} />
      </div>
    );
  }
}

export default App;
