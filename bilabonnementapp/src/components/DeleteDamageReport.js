import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteDamageReport() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/damage/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error deleting damage report:', error));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Delete damage report</h1>
      <p>Damage report will be deleted, do you wish to continue?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
}

export default DeleteDamageReport;
