import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import BlogContainer from './components/Blog/Container';
import Post from './components/Blog/Post';
import Posts from './components/Blog/Posts';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Blog Routes */}
          <Route path="blog" element={<BlogContainer />}>
            <Route index element={<Posts />} />
            <Route path=":slug" element={<Post />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
