import React, { Component } from 'react';
import './post-list-item-details.css';


class PostListIemDetails extends Component {

    state = {
        isClosing: false
    }

    render() {
        const { onPostDetailsClose, author, post } = this.props;

        const postDetailsCloseHanler = () => {
            this.setState(() => ({
                isClosing: true,                
              }));
            setTimeout(onPostDetailsClose, 250);
        }; 

        return (
            <div className="post-details-form d-flex flex-column" 
                style={ this.state.isClosing ? { animation: "popdown .3s ease-out" } : { animation: "popup .25s ease-in" }  }
            >

<div className="post-details-form-close-btn pull-right" onClick={postDetailsCloseHanler} >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6672 0.344125C14.4547 0.131096 14.1661 0.0113766 13.8652 0.0113766C13.5643 0.0113766 13.2757 0.131096 13.0631 0.344125L7.5 5.8959L1.93686 0.332749C1.72431 0.119719 1.43574 0 1.13481 0C0.833882 0 0.545315 0.119719 0.332765 0.332749C-0.110922 0.776435 -0.110922 1.49316 0.332765 1.93685L5.8959 7.49999L0.332765 13.0631C-0.110922 13.5068 -0.110922 14.2235 0.332765 14.6672C0.776451 15.1109 1.49317 15.1109 1.93686 14.6672L7.5 9.10409L13.0631 14.6672C13.5068 15.1109 14.2235 15.1109 14.6672 14.6672C15.1109 14.2235 15.1109 13.5068 14.6672 13.0631L9.1041 7.49999L14.6672 1.93685C15.0995 1.50454 15.0995 0.776435 14.6672 0.344125Z" fill="#D2D2D2"/>
                        </svg>
                    </div>


                { post.image ?  (<div className="post-detail-img" style={{ background: "url('"+post.image+"') white", backgroundSize: "cover" }} >                    
                </div>) : null }
                <div className="post-details-form-head mb-auto">
                    <span dangerouslySetInnerHTML={{ __html: post.title }}></span>

                    
                </div>

                <div className="post-details-form-body flex-grow-1">
                    <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
                </div>

                <div className="post-author mt-auto" >
                    <img src={author.photo} alt="alt2" className="post-author-photo" />
                    <h2 className="post-author-name">{author.name}</h2>
                    <span className="post-author-role">{author.role}</span>
                </div>           

                <div className="post-line-under"><div className="line-under"></div></div>
                <div className="post-details-form-footer d-flex align-content-center flex-wrap">
                    <button type="button" className="btn btn-outline-add-post"  onClick={postDetailsCloseHanler} >CLOSE</button>
                </div>
                
            </div>
        )
    }
}

export default PostListIemDetails;
