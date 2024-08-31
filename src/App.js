import React from 'react';
import FetchDrugData from './fetchDataCSV/fetchDrugData.js';
import { getFileIdFromUrl } from './util/getFileIdFromUrl.js';

const App = (props) => {
  // Fetch drug data
  const csvData = FetchDrugData();

  // Function to construct Google Drive image URL
  const getImageUrlFromDriveId = (fileId) => {
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : '';
  };

  return (
    <div className="container">
      {csvData.map((e, i) => {
        const fileId = getFileIdFromUrl(e?.ImageLink);
        const imageUrl = getImageUrlFromDriveId(fileId);

        return (
          <div key={i}>
            <h2>{e?.DrugName}</h2>
            <p>{e?.Indications}</p>
            <p>{e?.MechanismOfAction}</p>
            <p>{e?.SideEffects}</p>
            {/* Display the image with the transformed URL */}
            {fileId ? (
              <img
                style={{ maxWidth: '100%', height: 'auto' }}
                src={imageUrl}
                alt={e?.DrugName}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default App;
