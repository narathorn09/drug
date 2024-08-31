import { useEffect, useState } from "react";
import axios from "axios";
import { csvUrl } from "./googleSheetURL";

export default function FetchCSVData(sheetName) {
  const [csvData, setCsvData] = useState([]);

  // Define fetchCSVData before using it in useEffect
  const fetchCSVData = () => {
    axios
      .get(csvUrl[sheetName])
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        setCsvData(parsedCsvData);
        console.log(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  useEffect(() => {
    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split('\t');
    const data = [];
    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split('\t');
      const rowObject = {};
      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }
      data.push(rowObject);
    }
    return data;
  }

  return csvData;
}
