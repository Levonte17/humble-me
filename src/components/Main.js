import { useState, useEffect,  } from 'react';

import { Routes, Route } from 'react-router-dom';

import List from '../pages/List';
import ShowList from '../pages/ShowList';
import Home from '../pages/Home';
import Accessories from '../pages/Accessories';
import Jerseys from '../pages/Jerseys';
import Clothing from '../pages/Clothing';

function Main(props) {

    const [people, setPeople] = useState(null);
    const API_URL = 'http://localhost:4003/api/product/';
    //const API_URL = 'https://dih-api.adaptable.app/api/product';

const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPeople(data);
    } catch (error) {
        console.log(error)
    }
}

const createPeople = async (person) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers:{
                'content-type': 'Application/json'
            }, 
            body: JSON.stringify(person)
    }); 
    getData();

    } catch (error) {
        
    }
}

const deletePeople = async (id) => {
    try {
        await fetch(API_URL + id, {
            method: 'DELETE'
        });
        getData();
    } catch (error) {
        console.log(error);
      
    }
}

const updatePeople = async (updatedPeople, id) => {
    try {
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedPeople)
        });
        
        getData();

    } catch (error) {
        console.log(error)
        // TODO: add additional logic to alert a user 
        // in case something goes wrong
    }
}


useEffect(() => {
    getData();
}, []);


    return(

<main>

<Routes>
    <Route path="/accesories" element={
        <Accessories 
             
        />
    } />

    <Route path="/jerseys" element={
        <Jerseys 
             
        />
    } />

    <Route path="/clothing" element={
        <Clothing 
             
        />
    } />

    <Route path="/" element={
        <Home 
             
        />
    } />
    
    <Route path="/product" element={
        <List            
            people={people} 
            createPeople={createPeople} 
        />
    } />
    
    <Route path="/product/:id" element={
        <ShowList 
            people={people}
            deletePeople={deletePeople}
            updatePeople={updatePeople} 
        />
    } />
</Routes>
</main>

    )
};

export default Main;