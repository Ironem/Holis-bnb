import React, { useState } from 'react';
import SearchPage from './pages/Search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import axios from 'axios';
import StoreContext from './store';

axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
  const [search, setSearch] = useState<string>('');
  return (
    <StoreContext.Provider value={{ search, setSearch }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
