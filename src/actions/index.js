const projectsLoaded = (projects) => {
    return {
        type: 'PROJECTS_LOADED',
        payload: projects
    };     
}

const projectDeleted = (idx) => {
    return {
        type: 'PROJECT_DELETED',
        payload: idx
    };   
}

const setMode = (isEditModeActive) => {
    return {
        type: 'SET_MODE',
        payload: isEditModeActive
    };   
}

const postsLoaded = (posts) => {
    return {
        type: 'POSTS_LOADED',
        payload: posts
    };     
}

const postUnpublish = (postId) => {
    return {
        type: 'POST_UNPUBLISHED',
        payload: postId
    };     
}

const postPublish = (postId) => {
    return {
        type: 'POST_PUBLISHED',
        payload: postId
    };     
}

const postRemove = (postId) => {
    return {
        type: 'POST_REMOVED',
        payload: postId
    };     
}

const postCreated = (newPost) => {
    return {
        type: 'POST_CREATED',
        payload: newPost
    };     
}

const staffLoaded = (staff) => {
    return {
        type: 'STAFF_LOADED',
        payload: staff
    };     
}

const notifClosed = () => {
    return {
        type: 'NOTIF_CLOSED'
    };     
}

const fetchProjects = (assistantService) => () => (dispatch) => {
    dispatch(projectsLoaded(assistantService.data));
};

export {
    fetchProjects,
    projectsLoaded,
    setMode,
    projectDeleted,
    postsLoaded,
    staffLoaded,
    postUnpublish,
    postPublish,
    postRemove,
    postCreated,
    notifClosed
};