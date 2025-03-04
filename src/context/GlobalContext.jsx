import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
    const [posts, setPosts] = useState([]);

    const [ singlePost, setSinglePost ] = useState( {
        id: '',
        title: '',
        content: '',
        image:'',
        tags: [],
    } )

    const url = 'http://localhost:3000/api/posts';
  
    const fetchData = () => {
     axios
     .get(url)
     .then((res) => setPosts(res.data));
    };

  const getPostId = (id) => {
    axios.get( `${url}/${id}` )
    .then( res => setSinglePost( res.data ) )
  };

  const value = {
    posts,
    singlePost,
    fetchData,
    getPostId
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };