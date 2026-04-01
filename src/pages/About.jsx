import { useEffect, useState } from "react";

function About() {
    const[todo,setTodo] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json))
        
    });
    return (
        <div>
            <h1>About</h1>
            <p>this is about page </p>
            <h2>To do</h2>
            <ol>
                <li>User ID: {todo.userId} </li>
                <li>ID: {todo.id} </li>
                <li>Title: {todo.title} </li>
                <li>Completed: {todo.completed?.toString()} </li>
            </ol>
        </div>
    );
}
export default About;