import React, { Component } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <RRNavLink to={props.link} className='nav-item is-tab' activeClassName="is-active" onClick={props.onClick}>
      {props.title}
    </RRNavLink>
  );
};

class Navigation extends Component {
  state = {
    mobileActive: false
  }

  toggleMenu= () => {
    this.setState({mobileActive: !this.state.mobileActive});
  }

  closeMenu = () => {
    this.setState({mobileActive: false});
  }

  render () {
    let isActive = this.state.mobileActive ? "is-active" : '';

    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="nav-item is-tab">
              Behcets Tracker
            </Link>
          </div>
          <span className="nav-toggle" onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className={`${isActive} nav-right nav-menu`}>
            {this.props.user &&
              [<NavLink link="/feed" title="Feed" key="feed" onClick={this.closeMenu} />,
               <NavLink link="/profile" title={this.props.user.displayName} key="profile" onClick={this.closeMenu} />,
               <NavLink link="/logout" title="Logout" key="logout" onClick={this.closeMenu} /> ]
               }

               {!this.props.user &&
                 <NavLink link="/login" title="Login" key="login" onClick={this.closeMenu} />
                 }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
