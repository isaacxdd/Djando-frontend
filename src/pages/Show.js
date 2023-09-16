import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const post = useLoaderData();
    
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }

    return <div style={div}>
        <h1>{post.subject}</h1>
        <h2>{post.details}</h2>
        <div style={{textAlign: "center"}}>
            <h2>Update Todo</h2>
            <Form method="post" action={`/update/${post.id}`}>
                <input type="text" name="subject" defaultValue={post.subject} />
                <input type="text" name="details" defaultValue={post.details} />
                <button>Update Todo</button>
            </Form>

            <Form method="delete" action={`/delete/${post.id}`}>
                <button>Delete Todo</button>
            </Form>
        </div>


        <Link to="/">Back to Index</Link>
    </div>
}

export default Show;