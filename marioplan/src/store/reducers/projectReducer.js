const initState = {
    projects: [
        {id: '1', title: 'help me finding nemo', content: 'tengo la camisa negra'},
        {id: '2', title: 'found nemo', content: 'tengo la camisa negra'},
        {id: '3', title: 'it wasnt nemo', content: 'tengo la camisa negra'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;