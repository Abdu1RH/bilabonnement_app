import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
 
function DeleteDamageReport() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [damageReports, setDamageReports] = useState([]);
    const [selectedDamageReport, setSelectedDamageReport] = useState(null);
 
    useEffect(() => {
        axios.get('http://localhost:8080/api/damagereports')
            .then(response => {
                setDamageReports(response.data);
            })
            .catch(error => {
                console.error("Error fetching damage reports", error);
            });
    }, []);
 
    const handleDelete = (selectedDamageReportId) => {
        axios.delete(`http://localhost:8080/api/damageReports/${selectedDamageReportId}`)
            .then(() => {
                navigate('/createDamageReport');
            })
            .catch(error => {
                console.error('Error deleting damage report:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                }
            });
    };
 
    const handleSelectChange = (e) => {
        const selectedDamageReportId = e.target.value;
        const damageReport = damageReports.find(report => report.id === parseInt(selectedDamageReportId));
        setSelectedDamageReport(damageReport);
    };
 
    const handleCancel = () => {
        navigate('/');
    };
 
    return (
        <div>
            <h1>Delete skaderapport</h1>
 
            <label>Valgte skaderapport:</label>
            <select value={selectedDamageReport?.id} onChange={handleSelectChange}>
                <option value="">Vælg en skaderapport her</option>
                {damageReports.map(report => (
                    <option key={report.id} value={report.id}>
                     {report.id} - {report.error} - {report.errorType} - {report.subscription?.car?.brand}
                    </option>
                ))}
            </select>
 
            {selectedDamageReport && (
                <div>
                    <p>Valgte skaderapport : {selectedDamageReport.error} - {selectedDamageReport.errorType} - {selectedDamageReport.subscription?.car?.brand}</p>
                    <p>Skaderapporten vil permanent blive slettet, ønsker du at fortsætte?</p>
                    <button onClick={() => handleDelete(selectedDamageReport.id)}>Ja, Slet</button>
                    <button onClick={handleCancel}>Nej, Annuller</button>
                </div>
            )}
        </div>
    );
}
 
export default DeleteDamageReport;