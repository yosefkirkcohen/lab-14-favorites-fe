import React, { Component } from 'react'
import {

  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  Link

} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Login from './Login';
import FavoritesPage from './FavoritesPage'
import HomePage from './HomePage.js';

import './App.css'

const TOKEN_KEY = 'TOKEN'

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN_KEY) || ''
  }


  handleTokenChange = async (token) => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token })
  }
  logout = () => {
    localStorage.clear()
    this.setState({ token: '' })
  }

  render() {
    const { token } = this.state;
    return (
      <div className="app-div">
        <Router>
          <header>
            <NavLink
              exact
              activeClassName='active-link'
              className='navlink'
              to='/'>Home
            </NavLink>
            <NavLink
              exact
              activeClassName='active-link'
              className='navlink'
              to='/search'>Search
            </NavLink>
            <NavLink
              exact
              activeClassName='active-link'
              className='navlink'
              to='/favorites'>Favorites
            </NavLink>

            {token === '' ? (
              <NavLink
                exact
                activeClassName='active-link'
                className='navlink'
                to='/login'
              >
                Login
              </NavLink>
            ) : (
              <Link
                className='navlink'
                to='/'
                onClick={this.logout}
              >
                Logout
              </Link>
            )}
            
          </header>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
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
              render={(routerProps) => this.state.token
              ? <FavoritesPage token={this.state.token} {...routerProps} />
              : <Redirect to='/login' /> } 
            />
          </Switch>
        </Router>
      </div>
    )
  }

}
