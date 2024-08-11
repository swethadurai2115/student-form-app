import axios from 'axios';

export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';

export const addStudent = (student) => async (dispatch) => {
    try {
        console.log('Sending POST request to add student:', student);
        const response = await axios.post('http://localhost:5000/api/students', student);
        console.log('Student added successfully:', response.data);
        dispatch({ type: ADD_STUDENT_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Error adding student:', error.response ? error.response.data : error.message);
    }
};
