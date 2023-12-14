import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DamageReportDetails() {
  const { id } = useParams();
  const [damageReport, setDamageReport] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/damagereports/${id}`)
      .then(response => {
        setDamageReport(response.data);
      })
      .catch(error => console.error('Error fetching damage report:', error));
  }, [id]);

  if (!damageReport) return <div>Loading...</div>;

  return (
    <div>
      <h2>{damageReport.error}</h2>
      <p>Error Type: {damageReport.errorType}</p>
      <p>Number of Errors: {damageReport.numberOfErrors}</p>
      <p>Price per Error: {damageReport.pricePerError}</p>
    </div>
  );
}

export default DamageReportDetails;
