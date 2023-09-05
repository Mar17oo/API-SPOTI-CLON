import React from 'react';
import styled from "styled-components";
export default function Login(){
    return <Container>
        <img
         src ="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
         alt="Logo spotify"
        />
    </Container>

}

const Container = styled.di`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color: green;
gap: 5 rem;
img{
    height: 20vh
}
button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-colot: black;
    color: #49f585;
    font-size: 1.4rem;
    cursor: ponter;
}