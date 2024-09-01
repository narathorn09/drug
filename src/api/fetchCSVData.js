import { useEffect, useState } from "react";
import axios from "axios";
import { csvUrl } from "./googleSheetURL";
import { useDispatch } from "react-redux";
import { setIsLoading, setDataDrugStore, setDataDiseaseStore, setDataPrinciplesStore } from "../redux/dataSlice.js";

export default function FetchCSVData(sheetName) {

  const dispatch = useDispatch();

  const fetchCSVData = async () => {
    await axios
      .get(csvUrl[sheetName])
      .then((response) => {
        const parsedCsvData = parseCSV(response.data);
        if (sheetName == "Drug") 
          dispatch(setDataDrugStore({ data: parsedCsvData }));
        else if (sheetName == "Disease")
          dispatch(setDataDiseaseStore({ data: parsedCsvData }));
        else if (sheetName == "Principles")
          dispatch(setDataPrinciplesStore({ data: parsedCsvData }));
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      })
      .finally(() => {
        dispatch(setIsLoading({ isLoading: false }));
      })
  }

  useEffect(() => {
    dispatch(setIsLoading({ isLoading: true }));
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

  return;
}
