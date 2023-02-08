import React from 'react';
import { useParams } from 'react-router-dom';

export function UserDetails() {
    //this useParams() returns a key value pair which contains the dynamic routing part in our case :userID
    const params=useParams();
    const userID=params.userID
    return (
        <>
        <h2>Details about users {userID}</h2>
        </>
    );
}