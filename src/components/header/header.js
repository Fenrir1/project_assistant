import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAssistantService from '../hoc';
import { setMode } from '../../actions';
import { compose } from '../../utils';

import { Link } from "react-router-dom";

import './header.css';

class Header extends Component {

    state = {
        isMobileMode: false
    }

    componentDidMount() {
        /* Max Mobile Width = 768px*/
        const isMobileMode = Boolean(window.innerWidth<=768);  
        this.setState(() => ({ isMobileMode: isMobileMode })); 
    }

    render() {        
        const { isEditModeActive } = this.props;

        let dashboeardMOdeClass = 'header-link';
        let editMOdeClass = 'header-link';
        if (isEditModeActive) {
            editMOdeClass += ' header-link-active'
        } else {
            dashboeardMOdeClass += ' header-link-active'
        }
        if (this.state.isMobileMode) {
            editMOdeClass += ' d-none';
        }

        return (
            <div className='header' >
                <div className="header-container container d-flex align-content-center flex-wrap">                
                    <Link to="/" className="mr-auto" ><span className={dashboeardMOdeClass}  >Dashboard mode</span></Link> 
                    <Link to="/editmode" className="ml-auto'" ><span className={editMOdeClass}  >Edit mode</span></Link>               
                </div>
            </div>
        );
        
    }
}

const mapStateToProps = ({ isEditModeActive}) => {
    return { isEditModeActive};
}

const mapDispatchToProps = {
    setMode
}

export default compose(
    withAssistantService(),
    connect(mapStateToProps, mapDispatchToProps),
)(Header);