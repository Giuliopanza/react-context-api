import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { useGlobalContext } from '../context/GlobalContext';

const Posts = () => {

  const {posts, fetchData} = useGlobalContext ();

  useEffect (() => {

    fetchData ();

  }, [])
    
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