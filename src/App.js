import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    return (
        <div>
            <h1>Students Form</h1>
        
        <Router>
            <Routes>
                <Route path="/" element={<StudentForm />} />
                <Route path="/students" element={<StudentList />} />
            </Routes>
        </Router>
        </div>
        
    );
};

export default App;
