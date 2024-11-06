import React from 'react';
import styled from 'styled-components';
import { Provider } from '../types/ApiTypes';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 15px;
`;

const ProviderItem = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #34495e;
  }
`;

interface SidebarProps {
  providers: Provider[];
  onSelectProvider: (providerName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ providers, onSelectProvider }) => {
  return (
    <SidebarContainer>
      {providers.map((provider) => (
        <ProviderItem key={provider.name} onClick={() => onSelectProvider(provider.name)}>
          {provider.name}
        </ProviderItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
