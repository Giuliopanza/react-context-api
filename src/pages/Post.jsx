import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from 'axios';


const Post = () => {
    const { id } = useParams()

    const url = 'http://localhost:3000/api/posts'


    const [ singlePost, setSinglePost ] = useState( {
        id: '',
        title: '',
        content: '',
        image:'',
        tags: '',
    } )


    

    useEffect( () => {
        axios.get( `${url}/${id}` )
        .then( res => setSinglePost( res.data ) )
    }, [id] ) 


    return(
        <>
            <h1>Singolo prodotto: { id }</h1>
            <h2>Titolo: { singlePost.title }</h2>
            <p>{singlePost.content}</p>
        </>
    )
  };
  
  export default Post;