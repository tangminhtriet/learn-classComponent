import React, { Component } from 'react';
import './App.css';
import ToDoFeature from './components/ToDo/ToDoFeature';
import PostList from './components/Post/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import SearchFilter from './components/SearchFilter';
import Clock from './components/Clock/Clock';
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
      clockVisible: true
    }
  }
  async fetchPostList() {
    try {
      const params = queryString.stringify(this.state.filter)
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${params}`
      const response = await fetch(requestUrl)
      const responseJSON = await response.json()
      this.setState({
        postList: responseJSON.data,
      })
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
  handleClearClock = () => {
    this.setState({
      clockVisible: false
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

        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
          <button onClick={() => this.setState({ clockVisible: false })} style={{ textAlign: 'center' }}>Clear Clock</button>
        </div>
        <div style={{ textAlign: 'center' }}>{this.state.clockVisible && <Clock />}</div>
      </div>

    );
  }
}

export default App;
