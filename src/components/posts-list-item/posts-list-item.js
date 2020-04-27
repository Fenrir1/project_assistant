import React from 'react'
import './posts-list-item.css';

const PostsListItem = ({ post, author, isEditModeActive, postUnpublish, postPublish, postRemove, onPostAddFormOpen }) => {
    const { title, isPublished, image }= post;

    const editModeElementOnly = isEditModeActive ? "" : " d-none";

    if (post === -1) {
        return  (
            <React.Fragment> 
                <div className="post-add-body flex-grow-1 d-flex justify-content-center align-content-center flex-wrap" >
                    <div className="post-add-icon" >
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.408 0 0 9.408 0 21C0 32.592 9.408 42 21 42C32.592 42 42 32.592 42 21C42 9.408 32.592 0 21 0ZM21 10.5C19.845 10.5 18.9 11.445 18.9 12.6V18.9H12.6C11.445 18.9 10.5 19.845 10.5 21C10.5 22.155 11.445 23.1 12.6 23.1H18.9V29.4C18.9 30.555 19.845 31.5 21 31.5C22.155 31.5 23.1 30.555 23.1 29.4V23.1H29.4C30.555 23.1 31.5 22.155 31.5 21C31.5 19.845 30.555 18.9 29.4 18.9H23.1V12.6C23.1 11.445 22.155 10.5 21 10.5ZM4.2 21C4.2 30.261 11.739 37.8 21 37.8C30.261 37.8 37.8 30.261 37.8 21C37.8 11.739 30.261 4.2 21 4.2C11.739 4.2 4.2 11.739 4.2 21Z" fill="#6883E4" fillOpacity="0.2"/>
                        </svg>
                        <span>New post</span>
                    </div>
                </div>
                <div className="post-line-under mt-auto"><div className="line-under"></div></div>
                <div className="post-add-footer mt-auto" >
                    <div className="d-flex flex-wrap align-content-center justify-content-around h-100">
                        <button type="button" className="btn btn-outline-add-post" onClick={onPostAddFormOpen} >CREATE</button>
                    </div>
                </div>        
            </React.Fragment> 
        )
    }

    if (isEditModeActive) {
        let buttons;
        if (!isPublished) {
            buttons = <div className="d-flex flex-wrap align-content-center justify-content-around h-100">
            <button type="button" className="btn btn-outline-publish" onClick={postPublish} >publish</button>
            <button type="button" className="btn btn-outline-remove" onClick={postRemove} >remove</button>
        </div>
        } else {
            buttons =  <div className="d-flex flex-wrap align-content-center justify-content-around h-100">
            <button type="button" className="btn btn-outline-unpublish" onClick={postUnpublish} >unpublish</button>
            </div>
        }


        return (
            <React.Fragment> 
                <div className={"post-edit mb-auto"+editModeElementOnly} >
                    {buttons}
                </div>
                { image ? (<div className="post-title post-title-image flex-grow-1" style={{ background: "url('"+image+"') white", backgroundSize: "cover" }} ><div className="post-title-text">{title}</div></div>) :
                           <div className="post-title flex-grow-1" ><div className="post-title-text" dangerouslySetInnerHTML={{ __html: title }} ></div></div>  }
               
                { !isPublished ? (<div className="post-not-published mt-auto" ><i className="fa fa-eye-slash" aria-hidden="true"></i>not published</div>) : null } 
                <div className="post-line-under mt-auto"><div className="line-under"></div></div>
                <div className="post-author mt-auto" >
                    <img src={author.photo} alt="alt1" className="post-author-photo" />
                    <h2 className="post-author-name">{author.name}</h2>
                    <span className="post-author-role">{author.role}</span>
                </div>           
            </React.Fragment> 
        )
    } else {
        return (
            <React.Fragment> 
                { image ? (<div className="post-title post-title-image flex-grow-1" style={{ background: "url('"+image+"') white", backgroundSize: "cover" }} ><div className="post-title-text">{title}</div></div>) :
                           <div className="post-title flex-grow-1" ><div className="post-title-text"  dangerouslySetInnerHTML={{ __html: title }}  ></div></div>  }
                <div className="post-line-under mt-auto"><div className="line-under"></div></div>
                <div className="post-author mt-auto" >
                    <img src={author.photo} alt="alt2" className="post-author-photo" />
                    <h2 className="post-author-name">{author.name}</h2>
                    <span className="post-author-role">{author.role}</span>
                </div>           
            </React.Fragment> 
        )        

    }

}

export default PostsListItem;