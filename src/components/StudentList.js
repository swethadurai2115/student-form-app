import React from 'react';
import { useSelector } from 'react-redux';

const StudentList = () => {
  const students = useSelector((state) => state.students.students);
  const successMessage = useSelector((state) => state.students.successMessage);

  return (
    <div>
      <h1>Student List</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Success message displayed in green */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
                <td>{student.mark}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No students found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
