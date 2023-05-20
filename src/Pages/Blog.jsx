import React from 'react';

const Blog = () => {
    return (

        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Questions</h1>

            <div className="bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>
                    An access token is a credential used to access protected resources, while a refresh token is used to obtain a new access token when it expires. They work together in an authentication flow, where the access token is sent with each request and the refresh token is securely stored on the client-side. Access tokens are typically stored in memory or as HTTP-only cookies, while refresh tokens should be stored securely, such as in a secure HTTP-only cookie or encrypted storage, to prevent unauthorized access.</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg mt-4">
                <h2 className="text-2xl font-bold mb-2">Compare SQL and NoSQL databases?</h2>
                <p>SQL databases are based on a relational model and use structured tables with predefined schemas.
                    They ensure data integrity through strict schemas, enforcing relationships, and providing ACID (Atomicity, Consistency, Isolation, Durability) compliance.
                    SQL databases are suitable for complex transactions, structured data, and scenarios where data integrity is critical.
                    Examples: MySQL, PostgreSQL, Oracle, SQL Server.

                    NoSQL Databases:
                    NoSQL databases use various data models like key-value, document, columnar, or graph, providing more flexibility and scalability.
                    They offer horizontal scalability, high performance, and flexible schemas, allowing dynamic and unstructured data.
                    NoSQL databases are suitable for large-scale distributed systems, handling high traffic loads, and scenarios where data structure can evolve rapidly.
                    Examples: MongoDB.</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg mt-4">
                <h2 className="text-2xl font-bold mb-2">What is Express.js? What is Nest.js?</h2>
                <p>Express.js:

                    Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities for building web servers and APIs.
                    Express.js is known for its simplicity and lightweight nature, making it a popular choice for developing fast and scalable server-side applications.
                    It offers middleware support, routing capabilities, template engines integration, and easy handling of HTTP requests and responses.
                    Express.js has a large and active community, which contributes to its extensive ecosystem of plugins and extensions.
                    Nest.js:

                    Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It is built on top of Express.js and utilizes TypeScript as its primary language.
                    Nest.js combines elements of object-oriented programming (OOP), functional programming, and functional reactive programming (FRP) to provide a structured and modular approach to application development.
                    It promotes the use of decorators, modules, dependency injection, and other design patterns to create highly maintainable and extensible codebases.
                    Nest.js offers features like robust dependency injection, built-in support for testing, middleware integration, authentication, and a powerful CLI (Command Line Interface) for scaffolding and generating code.
                    It is designed to be suitable for building various types of applications, including traditional server-rendered apps, RESTful APIs, microservices, and real-time applications.
                    Both Express.js and</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg mt-4">
                <h2 className="text-2xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h2>
                <p>MongoDB's aggregate is a powerful pipeline-based framework used for data aggregation and transformation within the MongoDB database. It allows you to perform advanced data processing operations, such as filtering, grouping, sorting, joining, and computing aggregations.</p>
            </div>
        </div>
    );
};

export default Blog;


