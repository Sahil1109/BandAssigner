import React, {Component} from 'react'
import Myheader from './Components/Myheader';
import Profiles from './Components/Profiles';
import Searchform from './Components/SearchForm';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       searchText: 'Sahil1109',
       data: '',
    }
  }
  fetchSearch=username=>{
    const API = 'https://api.github.com/';
    let url=`${API}search/users?q=${username}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      this.setState({
        data: data
      });
    })
    .catch((error)=>
    console.log('Oops! There is a problem'+error))
  }
  componentDidMount(){
    
    this.fetchSearch(this.state.searchText);
  }
  
  render() {
    
    return (
      <div>
        <Myheader/>
        <Searchform  fetchSearch={this.fetchSearch}/>
        <Profiles data={this.state.data}/>
      </div>
    )
  }
}

export default App
