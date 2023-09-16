import url from './url';

// Index loader to load all todos
export const indexLoader = async () => {
    // make api call to backend index route
    const response = await fetch(url)
    // turn response into a javascript object
    const todos = await response.json()
    // return the javascript object so the Index component can use it
    return todos
}

// Show loader to load a single todo
export const showLoader = async ({params}) => {
    // grab the id from params
    const id = params.id
    // make api call to backend show route
    const response = await fetch(url + id)
    // turn response into a javascript object
    const todo = await response.json()
    // return the javascript object so the Show component can use it
    return todo
}