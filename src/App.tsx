import React, { useState } from 'react';
import ProviderList from './screens/ProviderList';
import ApiServiceDetails from './screens/ApiServiceDetails'; 

const App: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  return (
    <div>
      <h1>Provider and API Details</h1>
      {selectedProvider ? (
        <ApiServiceDetails providerName={selectedProvider} />
      ) : (
        <ProviderList onProviderSelect={setSelectedProvider} />
      )}
    </div>
  );
};

export default App;
