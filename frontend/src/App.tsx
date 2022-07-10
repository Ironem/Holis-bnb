import React, { useState } from 'react';
import SearchPage from './pages/Search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import axios from 'axios';
import StoreContext from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayLocation from './pages/DisplayLocation/DisplayLocation';
axios.defaults.baseURL = 'http://localhost:8000/';

function App() {
  const [search, setSearch] = useState<string>('');
  const [trigger, setTrigger] = useState(false);
  return (
    <StoreContext.Provider value={{ search, setSearch, trigger, setTrigger }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path="/location/:id" element={<DisplayLocation />} />
          </Route>
        </Routes>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
