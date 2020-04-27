const initialState = {
    projects: [],
    posts: [],
    staff: [],
    isNotificationOpened: true,
    isEditModeActive: false   

}


const updatePost = (state, postId, details) => {
    const { posts } = state;
    if ( postId === -1) {
        let newId = Math.floor(Math.random()*(27-6))+6;
        const newPost = { ...details, id: newId};
        return [
            ...posts,
            newPost
        ]
    } else {
        const curPostIdx = posts.findIndex(({id}) => id === postId);
        const post = posts[curPostIdx];
        const newPost = {...post, ...details};
        return [
            ...posts.slice(0, curPostIdx),
            newPost,
            ...posts.slice(curPostIdx + 1)
        ]
    }
};

const reducer = (state = initialState, action) => {

    switch (action.type) {  
        case 'PROJECTS_LOADED':   
            return {
                ...state,
                projects: action.payload
            };
        
        case 'PROJECT_DELETED':   
            const projectId = action.payload;
            const idx = state.projects.findIndex(({id}) => id === projectId);            
            return {
                ...state,
                projects:  [
                    ...state.projects.slice(0, idx),
                    ...state.projects.slice(idx + 1)
                ]
            };

        case 'SET_MODE':
            return {
                ...state,
                isEditModeActive: action.payload
            };

        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload
            };

        case 'POST_CREATED':
            return {
                ...state,
                posts:  updatePost(state, -1, action.payload)
            };
            
        
        case 'POST_REMOVED':
            return {
                ...state,
                posts:  state.posts.filter(({id}) => id !== action.payload)
            };
        
        case 'POST_UNPUBLISHED':
            return {
                ...state,
                posts: updatePost(state, action.payload, { isPublished: false })
            };
        
        case 'POST_PUBLISHED':
            return {
                ...state,
                posts: updatePost(state, action.payload, { isPublished: true })
            };
                
            
        case 'STAFF_LOADED':
            return {
                ...state,
                staff: action.payload
            };
        
        case 'NOTIF_CLOSED':
            return {
                ...state,
                isNotificationOpened: false
            };

        default:
            return state;
    };
};

export default reducer;