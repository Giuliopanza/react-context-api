import { useState, useEffect } from 'react';

import axios from 'axios';

import { NavLink } from 'react-router-dom';

const Posts = () => {
      const [posts, setPosts] = useState([]);

      const url = 'http://localhost:3000/api/posts';
    
      useEffect(() => {
       axios
       .get(url)
       .then((res) => setPosts(res.data));
      }, []);
    
      return (
        <>
          <div className="container">
            <div className="row">
              {posts.map((elem) => {
                return (
                  <div key={elem.id} className="col-4">
                    <NavLink to={`/posts/${elem.id}`}>
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">{elem.title}</h4>
                          <p className="card-text">{elem.content}</p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
  };
  
  export default Posts;