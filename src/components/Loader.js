import React from 'react';


export const Loader = () => {
    return (
        <div className="loader"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#000"><g fill="none"><g transform="translate(1 1)" strokeWidth="2"><circle cx="18" cy="18" r="18" strokeOpacity="0.5"/><path d="M36 18c0-9.9-8.1-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg></div>
        );
}