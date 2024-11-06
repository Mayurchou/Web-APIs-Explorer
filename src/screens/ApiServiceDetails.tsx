import React, { useEffect, useState } from 'react';

interface ApiServiceDetailsProps {
  providerName: string;
}

const ApiServiceDetails: React.FC<ApiServiceDetailsProps> = ({ providerName }) => {
  const [apiDetails, setApiDetails] = useState<any>(null); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiDetails = async () => {
      try {
        // Fetch the API details for the selected provider (replace with your actual API URL)
        const response = await fetch(`/Api/api/${providerName}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch, status: ${response.status}`);
        }
        const data = await response.json();
        setApiDetails(data); // Store the fetched API details
      } catch (err) {
        setError('Failed to load API details');
      }
    };

    fetchApiDetails();
  }, [providerName]); // Re-fetch when providerName changes

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>API Details for {providerName}</h2>
      {apiDetails ? (
        <div>
          {/* Render the API details here */}
          <pre>{JSON.stringify(apiDetails, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiServiceDetails;
