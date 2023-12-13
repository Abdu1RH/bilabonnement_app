import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

function DamageReport(props) {
    const { id } = useParams();
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

    const handleSelectChange = (e) => {
        const selectedDamageReportId = e.target.value;
        const damageReport = damageReports.find(report => report.id === parseInt(selectedDamageReportId));
        setSelectedDamageReport(damageReport);

        // Call the function provided in the sendToParent prop with the selected damage report ID
        if (typeof props.sendToParent === 'function') {
            props.sendToParent(selectedDamageReportId);
        }
    };

    return (
        <div>
            <h1>Damage Reports</h1>
            <select name="damageReportDropdown" id="damageReportDropdown" onChange={handleSelectChange}>
                <option value="">Select damage report</option>
                {damageReports.length > 0 &&
                    damageReports.map(report => (
                        <option key={report.id} value={report.id}>
                            {report.id}
                        </option>
                    ))
                }
            </select>

            {selectedDamageReport && (
                <div>
                    <h2>Selected damage report: {selectedDamageReport.id}</h2>
                    {/* Add additional information or components for the selected damage report */}
                </div>
            )}
        </div>
    );
}

export default DamageReport;
