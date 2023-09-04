import logo from '../../logo.svg';
import Main from '../Main/Main';
import './App.css';
import React from 'react';


class App extends React.Component {

  state = {
    isLoading: false
  }



  componentDidMount() {
    this.setState({
      isLoading: true
    })
    //wait
    this.setState({
      isLoading: false
    })
  }

  
  render() {
    let loading =  this.state.isLoading;

    return (
      <div  className='App'>
        <Main/>
        {/* <BigApp/>
        {loading && <p>Загрузка</p>}
        {!loading && <News addNews={this.onAddNews} last_news={this.state.news}/> }
        <Comments/> */}
      </div>
    );
  }
}

export default App;

