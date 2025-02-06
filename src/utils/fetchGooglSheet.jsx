import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchCSVData() {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = async () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFC7No48upd_2BzzZOfvvsTJyq_UO5J8vU6MNFIxtqwrFWvEXEv56E_muFxyMWZk8vCfLvChuxwoP-/pub?output=csv';

        try {
            const response = await axios.get(csvUrl);
            // console.log('CSV data from Google Sheets:', response.data);  // Log the raw CSV data

            const parsedCsvData = parseCSV(response.data);
            setCsvData(parsedCsvData);
            console.log(parsedCsvData);
        } catch (error) {
            console.error('Error fetching CSV data:', error);
        }
    };

    function parseCSV(csvText) {
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');
        const data = rows.slice(1).map(row => {
            const values = row.split(',');
            return headers.reduce((acc, header, index) => {
                acc[header] = values[index];
                return acc;
            }, {});
        });
        return data;
    }

    return (
        <div>
            <h1>CSV Data</h1>
            {csvData.length > 0 && (
              
              <table>
                    <thead>
                        <tr>
                            {Object.keys(csvData[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {csvData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
