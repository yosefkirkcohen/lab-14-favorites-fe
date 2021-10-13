import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    NavLink, 
    Route, 
    Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Signup from './Signup';
import Login from './Login';
import FavoritesPage from './FavoritesPage'
import HomePage from './HomePage.js';

import './App.css'

const TOKEN_KEY = 'TOKEN'

export default class App extends Component {

    state = {
      token: localStorage.getItem(TOKEN_KEY) || ''
    }

    handleTokenChange = async(token) => {
      localStorage.setItem(TOKEN_KEY, token)
      this.setState({ token: token})
    }

    render() {
        return (
            <div>
                <Router>
                  <header>
                  <NavLink
                      exact className='links'
                      activeStyle={{fontSize:'1.5rem'}}
                      to='/'>Home
                  </NavLink>
                  <NavLink
                      exact className='links'
                      activeStyle={{fontSize:'1.5rem'}}
                      to='/login'>Login
                  </NavLink>
                  <NavLink
                      exact className='links'
                      activeStyle={{fontSize:'1.5rem'}}
                      to='/signup'>Signup
                  </NavLink>
                  <NavLink
                      exact className='links'
                      activeStyle={{fontSize:'1.5rem'}}
                      to='/search'>Search
                  </NavLink>
                  <NavLink
                      exact className='links'
                      activeStyle={{fontSize:'1.5rem'}}
                      to='/favorites'>Favorites
                  </NavLink>
                  </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <Signup handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <Login handleTokenChange={this.handleTokenChange} {...routerProps} />} 
                        />
                        <Route 
                          path="/search" 
                          exact
                          render={(routerProps) => <SearchPage token={this.state.token} {...routerProps} />} 
                        />
                        <Route 
                          path="/favorites" 
                          exact
                          render={(routerProps) => <FavoritesPage token={this.state.token} {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
