import React, {useState, useEffect} from "react";

export default function App() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    console.log('render')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return (
        <>
            <div>
                <button on onClick={() => setResourceType('posts')}> Posts </button>
                <button on onClick={() => setResourceType('users')}> Users </button>
                <button on onClick={() => setResourceType('comments')}> Comments </button>
            </div>
            <h1> {resourceType} </h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
    
}