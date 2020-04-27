import React, { Component } from 'react';
import { connect } from 'react-redux';

import withAssistantService from '../hoc';
import { postsLoaded, staffLoaded, postUnpublish, postPublish, postRemove, postCreated } from '../../actions';
import PostsListItem from '../posts-list-item';
import PostListItemCreate from '../post-list-item-create';
import PostListItemDetails from '../post-list-item-details';
import { compose } from '../../utils';
import './posts-list.css';


const PostsList = ({ posts, isEditModeActive, staff, postUnpublish, postPublish, postRemove, 
    onPostAddFormClose, isAddPostFormActive, onPostAddFormOpen, postCreated,
    selectedPost, onPostDetailsClose, onPostDetailsOpen,isPostDetailsFormActive }) => {

    let addButton = null;
    let postsLimit = 8;
    let editModeClass = "";
    if (isEditModeActive) {
        postsLimit = 12;
        editModeClass=" edit-mode";
        addButton = (<div className="post-list-item-wraper col-12 col-md-3" key={-1}>  
                    <div className="post-list-item d-flex flex-column">  
                        <PostsListItem post={-1} isEditModeActive={isEditModeActive} onPostAddFormOpen={onPostAddFormOpen} />
                    </div> 
                    </div>  );
      }

    return (
        <React.Fragment>
        <h2 className="section-title" >Highlights</h2>
        <div className={"posts-list-container container"+editModeClass } >
        <div className="row">
           {  
             posts.filter((post) => { return (isEditModeActive || post.isPublished)} ).map((post, idx) => {
                   if( (idx<postsLimit) && (isEditModeActive || post.isPublished)) {
                       if(isEditModeActive) {
                            return ( 
                                <div className="post-list-item-wraper col-12 col-md-3" key={post.id}>  
                                <div className="post-list-item d-flex flex-column">                 
                                    <PostsListItem 
                                        post={post}
                                        author={staff.find(({id}) => id === post.author ) }
                                        isEditModeActive={isEditModeActive}
                                        postUnpublish={() => postUnpublish(post.id)} 
                                        postPublish={() => postPublish(post.id)} 
                                        postRemove={() => postRemove(post.id)}
                                        onPostDetailsOpen={() => onPostDetailsOpen(post)}
                                        /> 
                                    </div> 
                                    </div>              
                            )       
                       } else {
                            return ( 
                                <div className="post-list-item-wraper col-12 col-md-3" key={post.id}>  
                                <div className="post-list-item dashboar-mode d-flex flex-column" onClick={() => onPostDetailsOpen(post)} >                 
                                    <PostsListItem 
                                        post={post}
                                        author={staff.find(({id}) => id === post.author ) }
                                        isEditModeActive={isEditModeActive}
                                        postUnpublish={() => postUnpublish(post.id)} 
                                        postPublish={() => postPublish(post.id)} 
                                        postRemove={() => postRemove(post.id)}
                                        /> 
                                    </div> 
                                    </div>              
                            )
                       }

                   } else { return null; }
               })
            }
        { addButton }
        </div> 
        </div>
        {  isAddPostFormActive ? (<div className='popup'><PostListItemCreate staff={staff} onPostAddFormClose={onPostAddFormClose} postCreated={postCreated} /></div>) : null }

               
        { isPostDetailsFormActive ? (
            <div className='popup'>
            <PostListItemDetails author={staff.find(({id}) => id === selectedPost.author ) } onPostDetailsClose={onPostDetailsClose} post={selectedPost} />
            </div>) : null }

        </React.Fragment>
    );
};

class PostsListContainer extends Component {

    state = {
        isAddPostFormActive: false,
        isPostDetailsFormActive: false,
        selectedPost: null
      };

    componentDidMount() {
        const { assistantService } = this.props;
        const data = assistantService.getPosts();
        this.props.postsLoaded(data);  
        const staff = assistantService.getStaff(); 
        this.props.staffLoaded(staff);      
    }

    render() {       
        const { posts, isEditModeActive, staff, postUnpublish, postPublish, postRemove, postCreated } = this.props;

        const onPostAddFormClose = () => {
            this.setState(() => ({
                isAddPostFormActive: false,                
              }));
        };  
        
        const onPostAddFormOpen = () => {
            this.setState(() => ({
                isAddPostFormActive: true,                
              }));
        };   

        const onPostDetailsClose = () => {            
            this.setState(() => ({
                isPostDetailsFormActive: false,                
              }));
        };  
        
        const onPostDetailsOpen = (post) => {
            this.setState(() => ({
                selectedPost: post,
                isPostDetailsFormActive: true,                
              }));
        };

        return <PostsList posts={posts} 
                        staff={staff} 
                        isEditModeActive={isEditModeActive} 
                        postUnpublish={postUnpublish} 
                        postPublish={postPublish} 
                        postRemove={postRemove} 
                        isAddPostFormActive={this.state.isAddPostFormActive}
                        onPostAddFormOpen={onPostAddFormOpen} 
                        onPostAddFormClose={onPostAddFormClose} 
                        onPostDetailsClose={onPostDetailsClose}
                        onPostDetailsOpen={onPostDetailsOpen}
                        selectedPost={this.state.selectedPost}
                        isPostDetailsFormActive={this.state.isPostDetailsFormActive}
                        postCreated={postCreated}
                        />
    }
}

const mapStateToProps = ({posts, isEditModeActive, staff}) => {
    return {posts, isEditModeActive, staff};
}

const mapDispatchToProps = {
    postsLoaded, staffLoaded, postUnpublish, postPublish, postRemove, postCreated
}

export default compose(
    withAssistantService(),
    connect(mapStateToProps, mapDispatchToProps),
)(PostsListContainer);
