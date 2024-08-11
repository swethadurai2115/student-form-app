import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../redux/actions/studentActions';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [mark, setMark] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { name, age, address, mark };
        dispatch(addStudent(student));
        navigate('/students'); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Mark:</label>
                <input type="text" value={mark} onChange={(e) => setMark(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
