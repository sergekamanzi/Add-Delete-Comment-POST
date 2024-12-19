import React from 'react';
import './post.css';
import { FaFileUpload } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';

const post = () => {
  return React.createElement(
    'div', 
    { className: 'main-post' },
    React.createElement(Link, { to: '/' },
      React.createElement('h2', null, 'Blog ', React.createElement('span', null, 'App.'))
    ),
    React.createElement('h3', null, 'Posts'),
    React.createElement('div', { className: 'post-content' },
      React.createElement('div', { className: 'card' },
        React.createElement('p', null, 
          React.createElement(FaFileUpload, null),
          React.createElement('br', null),
          'Upload a Post'
        ),
        React.createElement('h5', null, 
          React.createElement(IoMdAdd, null), 
          ' add title'
        ),
        React.createElement('p', null, 
          React.createElement(IoMdAdd, null), 
          ' add paragraph'
        )
      )
    )
  );
}

export default post;
