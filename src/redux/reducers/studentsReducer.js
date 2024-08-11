import { ADD_STUDENT_SUCCESS, GET_STUDENTS_SUCCESS } from '../actions/actionTypes';

const initialState = {
    students: [],
    successMessage: ''  
};

export default function studentsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                students: [...state.students, action.payload],
                successMessage: 'Student added successfully!'  
            };
        case GET_STUDENTS_SUCCESS:
            return {
                ...state,
                students: action.payload,
                successMessage: ''  
            };
        default:
            return state;
    }
}
