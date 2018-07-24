
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul className="left hide-on-med-and-down">
                        <li key="1"><a href="/">HOME <i className="material-icons right">home</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

function mapStateToProps({auth=null}) {
    return {auth};
}
  
export default connect(mapStateToProps)(Header);