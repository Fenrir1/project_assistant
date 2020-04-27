import React, { Component } from 'react';
import { connect } from 'react-redux';

import withAssistantService from '../hoc';
import { compose } from '../../utils';
import './footer.css';

class Footer extends Component {
    render() {
        const { isEditModeActive } = this.props;

        return (
            <React.Fragment>
             { isEditModeActive ?  (
                <div className="text-left notification-switch">
                    <h2 className="section-title" >Notifications</h2>
                    <div className="custom-control custom-switch mr-auto">
                        <input type="checkbox" className="custom-control-input" defaultChecked id="isNotifications" />                 
                        <label className="custom-control-label" htmlFor="isNotifications">Show all notifications</label>
                    </div>
                </div>) : null }
            <div className="container footer-container">
                <div className="text-center footer-copyrate">Hosta LLC 2015–2020. Made by Igor Berdnikov</div>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ isEditModeActive }) => {
    return { isEditModeActive };
}

const mapDispatchToProps = {}

export default compose(
    withAssistantService(),
    connect(mapStateToProps, mapDispatchToProps),
)(Footer);