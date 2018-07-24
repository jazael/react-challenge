import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Landing extends Component {
    render () {
        return (
            <div style = {{ textAlign: 'center'}}>
                <div className="row">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Welcome to the survey register</span>
                        </div>
                        <div className="card-action">
                            <Link to={ '/surveys' }>Click on this link to solve your survey</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth = null}) {
    return {auth};
}

export default connect(mapStateToProps)(Landing);