import React, {Component} from 'react';
import Header from '../header';
import ProjectsList from '../projects-list';
import PostsList from '../posts-list';
import NotificationPanel from '../notification-panel';
import Footer from '../footer';
import ChartsPanel from '../charts-panel';

import { connect } from 'react-redux';
import withAssistantService from '../hoc';
import { setMode } from '../../actions';
import { compose } from '../../utils';

class EditModePage  extends Component {

    componentDidMount() {
        this.props.setMode(false)
    }

    render() {

        return (
            <React.Fragment>
                <Header/> 
                <main role="main" className="container">
                    <ChartsPanel />
                    <PostsList/>   
                    <NotificationPanel />        
                    <ProjectsList/>
                    <Footer/>
                </main>
            </React.Fragment>
        )

    }

};


const mapStateToProps = ({ isEditModeActive }) => {
    return { isEditModeActive };
}

const mapDispatchToProps = { setMode }

export default compose(
    withAssistantService(),
    connect(mapStateToProps, mapDispatchToProps),
)(EditModePage);