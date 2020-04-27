import React, {Component} from 'react';
import './post-list-item-create.css';


export default class PostListItemCreate extends Component {
    state = {
        isAutoPublish: true,
        isErrors: false,
        fileName: null,
        post: {
          image: null,         
        },
      };

    render() {   
        const { onPostAddFormClose, staff, postCreated } = this.props;

        const onSubmit = (e) => {
            e.preventDefault();
            const { post } = this.state;
            if (post.author && post.title && post.text) {
                this.setState(() => ({
                    ...this.state,
                    isErrors: false,                
                  }));

                postCreated({ ...post, author: parseInt(post.author) ,isPublished: this.state.isAutoPublish });
                onPostAddFormClose();  
            } else {
                this.setState(() => ({
                    ...this.state,
                    isErrors: true,                
                  }));
            }
        };

        const handleInput = (event) => {
            const { value, name } = event.currentTarget;
            this.setState(() => ({
              post: {
                ...this.state.post,
                [name]: value,
              }
            }));
          };

        const handleInputImg = (event) => {
            this.setState({
                fileName: event.currentTarget.value,
                post: {
                    ...this.state.post,                    
                    image: URL.createObjectURL(event.target.files[0]),
                  }
              })
          };
        
        const switchAutopublish = () => {
            this.setState(() => ({
                ...this.state,
                isAutoPublish: !this.state.isAutoPublish,                
              }));
        }
        
        return (
            <form className="post-add-form d-flex flex-column" onSubmit={onSubmit}>
                <div className="post-add-form-head mb-auto">
                    <span>New post</span>
                    <div className="post-add-form-close-btn pull-right" onClick={onPostAddFormClose} >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6672 0.344125C14.4547 0.131096 14.1661 0.0113766 13.8652 0.0113766C13.5643 0.0113766 13.2757 0.131096 13.0631 0.344125L7.5 5.8959L1.93686 0.332749C1.72431 0.119719 1.43574 0 1.13481 0C0.833882 0 0.545315 0.119719 0.332765 0.332749C-0.110922 0.776435 -0.110922 1.49316 0.332765 1.93685L5.8959 7.49999L0.332765 13.0631C-0.110922 13.5068 -0.110922 14.2235 0.332765 14.6672C0.776451 15.1109 1.49317 15.1109 1.93686 14.6672L7.5 9.10409L13.0631 14.6672C13.5068 15.1109 14.2235 15.1109 14.6672 14.6672C15.1109 14.2235 15.1109 13.5068 14.6672 13.0631L9.1041 7.49999L14.6672 1.93685C15.0995 1.50454 15.0995 0.776435 14.6672 0.344125Z" fill="#D2D2D2"/>
</svg>

                    </div>
                </div>

                <div className="post-add-form-body flex-grow-1">
                    <div className="part-title" >Message</div>
                    <div className="form-group post-add-message-group">
                        <input type="text" placeholder="Title" name="title" className="form-control" onChange={handleInput} />   
                        <textarea placeholder="Text here..." name="text" className="form-control" rows="5" onChange={handleInput} />                 
                    </div>                  
                    <div className="part-title" >Photo</div>                                    
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" name="image" id="image" onChange={handleInputImg} />
                            <label className="custom-file-label" htmlFor="image">{ this.state.post.image ? this.state.fileName : "Select an image" }</label>
                        </div>
                    </div>
                    <div className="part-title" >Author</div> 
                    <div className="form-group post-add-author">
                        <select className="form-control post-author-select" id="author" name="author" onChange={handleInput} defaultValue="-1" >
                            <option disabled="disabled" className="d-none" value="-1" >Who said?</option>
                            { staff.map((staff) => { return <option key={staff.id} value={staff.id} >{staff.name}</option>})  }
                        </select>
                        
                        <svg className="author-search-icon" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9047 10.1514L7.3541 6.60078C7.90508 5.88848 8.20312 5.01758 8.20312 4.10156C8.20312 3.00508 7.7752 1.97695 7.00137 1.20176C6.22754 0.426562 5.19668 0 4.10156 0C3.00645 0 1.97559 0.42793 1.20176 1.20176C0.426562 1.97559 0 3.00508 0 4.10156C0 5.19668 0.42793 6.22754 1.20176 7.00137C1.97559 7.77656 3.00508 8.20312 4.10156 8.20312C5.01758 8.20312 5.88711 7.90508 6.59941 7.35547L10.15 10.9047C10.1604 10.9151 10.1728 10.9234 10.1864 10.929C10.2 10.9346 10.2146 10.9375 10.2293 10.9375C10.244 10.9375 10.2586 10.9346 10.2722 10.929C10.2858 10.9234 10.2982 10.9151 10.3086 10.9047L10.9047 10.31C10.9151 10.2995 10.9234 10.2872 10.929 10.2736C10.9346 10.26 10.9375 10.2454 10.9375 10.2307C10.9375 10.2159 10.9346 10.2014 10.929 10.1877C10.9234 10.1741 10.9151 10.1618 10.9047 10.1514ZM6.26719 6.26719C5.6875 6.84551 4.91914 7.16406 4.10156 7.16406C3.28398 7.16406 2.51562 6.84551 1.93594 6.26719C1.35762 5.6875 1.03906 4.91914 1.03906 4.10156C1.03906 3.28398 1.35762 2.51426 1.93594 1.93594C2.51562 1.35762 3.28398 1.03906 4.10156 1.03906C4.91914 1.03906 5.68887 1.35625 6.26719 1.93594C6.84551 2.51562 7.16406 3.28398 7.16406 4.10156C7.16406 4.91914 6.84551 5.68887 6.26719 6.26719Z" fill="#8C8C8C"/>
                        </svg>                          
                    </div>

                    { this.state.isErrors ? <div className="post-add-form-error" > All fieds except image must be filled</div> : null }
                </div>
                <div className="post-line-under mt-auto"><div className="line-under"></div></div>
                <div className="post-add-form-footer mt-auto d-flex align-content-center flex-wrap">
                    <div className="custom-control custom-switch mr-auto">
                        <input type="checkbox" className="custom-control-input" id="isAutoPublish" checked={this.state.isAutoPublish} onChange={switchAutopublish} />                 
                        <label className="custom-control-label" htmlFor="isAutoPublish">Instant publish</label>
                    </div>
                    <div className="btn-add-post-group">
                        <span className="btn-add-post-cancel"  onClick={onPostAddFormClose} >Cancel</span>
                        <span className="btn-add-post-text">or</span>
                        <button type="submit" className="btn btn-outline-add-post">CREATE</button>
                    </div>
                </div>
            </form> 
        )  
    }      


}
