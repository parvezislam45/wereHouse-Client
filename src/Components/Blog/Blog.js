import React from 'react';

const Blog = () => {
    return (
        <div className='blogs'>
            <h1 className='text-white'>This is Blog</h1>
            <div>
                <div>
                    <h1 className="name text-center text-3xl">Difference between Javascript and Nodejs???</h1>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl mt-2">
                    <div className="card-body">
                        <h1 className='text-center text-2xl name'>Java Script</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- Javascript is a programming language that is used for writing scripts on the website. </h2>
                            <h2 class="card-title">2- Javascript can only be run in the browsers.</h2>
                            <h2 class="card-title">3- It is basically used on the client-side.</h2>
                            <h2 class="card-title">4- Javascript is capable enough to add HTML and play with the DOM.</h2>
                            <h2 class="card-title">5- Javascript is used in frontend development. </h2>
                        </div>
                    </div>

                    <div class="card-body">
                        <h1 className='text-center text-2xl name'>Node Js</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- NodeJS is a Javascript runtime environment.</h2>
                            <h2 class="card-title">2- We can run Javascript outside the browser with the help of NodeJS.</h2>
                            <h2 class="card-title">3- It is mostly used on the server-side.</h2>
                            <h2 class="card-title">4- V8 is the Javascript engine inside of node.js that parses and runs Javascript. </h2>
                            <h2 class="card-title">5- Nodejs is used in server-side development.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="name text-center text-3xl">When should you use nodejs and when should you use mongodb???</h1>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl mt-2">
                    <div className="card-body">
                        <h1 className='text-center text-2xl name'>MongoDB</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates,</h2>
                            <h2 class="card-title">2- MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database..</h2>
                            <h2 class="card-title">3- is a No-SQL database for storing data. when you need high availability of data with automatic, fast, and instant data recovery</h2>
                            <h2 class="card-title">4- MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.</h2>
                        
                        </div>
                    </div>

                    <div class="card-body">
                        <h1 className='text-center text-2xl name'>Node Js</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- NodeJS's responsibilty is especially to execute your application..</h2>
                            <h2 class="card-title">2- Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). </h2>
                            <h2 class="card-title">3-  Node.js is an interpreter or runtime/ running environment for JavaScript. built on Chrome's V8 JavaScript engine. responsibility is especially to execute your application.</h2>
                            <h2 class="card-title">4- Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development. </h2>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="name text-center text-3xl">Differences between SQL & NoSQL databases ???</h1>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl mt-2">
                    <div className="card-body">
                        <h1 className='text-center text-2xl name'>SQL Database</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- SQL databases are relational, </h2>
                            <h2 class="card-title">2- SQL databases use structured query language and have a predefined schema. </h2>
                            <h2 class="card-title">3-SQL databases are vertically scalable, </h2>
                            <h2 class="card-title">4- SQL databases are table-based,</h2>
                            <h2 class="card-title">5- SQL databases are better for multi-row transactions</h2>
                        </div>
                    </div>

                    <div class="card-body">
                        <h1 className='text-center text-2xl name'>NoSQL Database</h1>
                        <div className="mt-3">
                            <h2 class="card-title">1- NoSQL databases are non-relational.</h2>
                            <h2 class="card-title">2- NoSQL databases have dynamic schemas for unstructured data.</h2>
                            <h2 class="card-title">3- NoSQL databases are horizontally scalable.</h2>
                            <h2 class="card-title">4- NoSQL databases are document, key-value, graph, or wide-column stores </h2>
                            <h2 class="card-title">5- NoSQL is better for unstructured data like documents or JSON</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div>
                    <h1 className="name text-center text-3xl">What is the purpose of jwt and how does it work ???</h1>
                </div>
            <div class="card lg:card-side bg-base-100 shadow-xl mt-2">
                    <div className="card-body">
                        <h1 className='text-center text-2xl name'>What Is JWT</h1>
                        <div className="mt-3">
                            <h1 className="text-2xl">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</h1>
                        </div>
                        <h1 className='text-center text-2xl name'>How JWT Works</h1>
                        <div className="mt-3">
                            
                            <h1 className="text-2xl">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</h1>
                        
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;