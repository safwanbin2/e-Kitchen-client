import React from 'react';
import useTitle from '../hooks/useTitle';

const BLog = () => {
    useTitle('blog')
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>1. What are the difference between NoSQL and SQL ?</h3>
                <p className='m-4 '>Ans: SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>2. What is JWT ? How does it work ?</h3>
                <p className='m-4 '>Ans: JWT(Json Web Token) is verification system that verifies a request whether it is sent by the valid user or not. User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>3. What are differences between JavaScript and Nodejs ?</h3>
                <p className='m-4 '>Ans: JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.</p>
            </div>
            <div className='my-6 border-b-2'>
                <h3 className='text-2xl font-semibold mb-4'>4. How does Node Js handle multiple requests at the same time ?</h3>
                <p className='m-4 '>Ans: NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                    The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>
            </div>
        </div>
    );
};

export default BLog;