import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useGlobalContext } from '../context/GlobalContext';


const Post = () => {
    const { id } = useParams()

    const { singlePost, getPostId } = useGlobalContext ()

    useEffect( () => {

        getPostId (id)

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