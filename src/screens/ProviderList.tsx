import React, { useState, useEffect } from 'react';
import { fetchProviders } from '../api/apiService'; 
import { Provider } from '../types/ApiTypes'; 

interface ProviderListProps {
  onProviderSelect: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProviderList: React.FC<ProviderListProps> = ({ onProviderSelect }) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProviders = async () => {
      try {
        const data = await fetchProviders();
        setProviders(data); 
      } catch (err) {
        setError('Failed to load providers'); 
      }
    };
    loadProviders();
  }, []); 

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Provider List</h1>
      <ul>
        {providers.map((provider) => (
          <li key={provider.name} onClick={() => onProviderSelect(provider.name)}>
            {provider.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderList;

