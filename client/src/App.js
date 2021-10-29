import React from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import MainContainer from "./MainContainer";

function App() {

  return (
    <AuthProvider>
      <MainContainer/>
    </AuthProvider>
  );
}

export default App;