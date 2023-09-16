import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const todos = useLoaderData()

    // map/loop over the todos and create a Post component for each todo
    return <>
        <div style={{textAlign: "center"}}>
            <h2>Create a Todo</h2>
            <Form method="post" action="/create">
                <input type="text" name="subject" placeholder='Subject'/>
                <input type="text" name="details" placeholder='Details'/>
                <button>Create a new Todo</button>
            </Form>
        </div>
    
    {todos.map((todo) => <Post key={todo.id} post={todo} />)}
    </> 
}

export default Index;