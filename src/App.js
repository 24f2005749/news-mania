import './App.css';
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'

export class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        
        <Router>
        <Navbar title='NewsMania' />
        <Routes>
          <Route path='/' element={<NewsComp apikey={this.apikey} key="general" pageSize={12} country='us' category='general' />} />
          <Route path='/business' element={<NewsComp apikey={this.apikey} key="business" pageSize={12} country='us' category='business' />} />
          <Route path='/entertainment' element={<NewsComp apikey={this.apikey} key="entertainment" pageSize={12} country='us' category='entertainment' />} />
          <Route path='/health' element={<NewsComp apikey={this.apikey} key="health" pageSize={12} country='us' category='health' />} />
          <Route path='/technology' element={<NewsComp apikey={this.apikey} key="technology" pageSize={12} country='us' category='technology' />} />
          <Route path='/science' element={<NewsComp apikey={this.apikey} key="science" pageSize={12} country='us' category='science' />} />
          <Route path='/sports' element={<NewsComp apikey={this.apikey} key="sports" pageSize={12} country='us' category='sports' />} />
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App