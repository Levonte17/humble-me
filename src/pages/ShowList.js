import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function ShowList({ people, deletePeople, updatePeople }) {
    const { id } = useParams();
    
    const person = people ? people.find(p => p._id === id) : null;

    const navigate = useNavigate();
    
    const [editForm, setEditForm] = useState({
        name: '',
        title: '',
        updatedAt: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        // prevent default behavior
        e.preventDefault()
        // call the updatePeople function and pass in the required values
        updatePeople(editForm, id);
        setIsEditing(false);
    };
    
    const loading = () => {
        return <h1>Loading ... </h1>;
    };
    
    const loaded = () => {
        
        const handleDelete = () => {
            deletePeople(person._id)
            navigate('/people');
        };

        const handleEdit = () => {
            setIsEditing(prevState => !prevState);
            // functional setState update pattern
            // it's used when we need to depend on previous to update to new state
        };

        return (
            <section>
                <h1>{person.name}</h1>
                <h3>{person.title}</h3>
                <h3>{person.createdAt}</h3>
                <button onClick={handleEdit}>{isEditing ? 'Cancel Edit' : 'Edit'}</button>
                <button onClick={handleDelete}>Delete</button>
            </section>
        )
    };

    useEffect(() => {
        if(person) {
            setEditForm(person);
        }
    }, [person]);

    return (
        <section>
            {people ? loaded() : loading()}
            { isEditing && 
                <form onSubmit={handleSubmit}>
                    <label>Name:
                        <input
                            type="text" 
                            value={editForm.name}  
                            onChange={handleChange} 
                            name="name" 
                        />
                    </label>
                    
                    <label>Cut Type:
                        <input
                            type="text" 
                            value={editForm.title}  
                            onChange={handleChange} 
                            name="title" 
                        />
                    </label>
                    <input type="submit" value="Update" />
                </form>
            }
        </section>
    );
}

export default ShowList;

