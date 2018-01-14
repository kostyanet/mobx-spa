import React from 'react';


const HomePage = (props) => (
    <div>
        <h2>Home Page</h2>
        <pre>
            <code>{JSON.stringify(props)}</code>
        </pre>
    </div>
);


export default HomePage;
