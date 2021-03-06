import React, {Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';
import Scroll from './components/Scroll';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: users }));  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
    
  }
  render() {
    const { cats, searchfield} = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.username.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!cats.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1>KittyFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>
        </div>

      );
    }
  }
}
  


export default App;