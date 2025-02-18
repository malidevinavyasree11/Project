import React from 'react';
import App from './App'
import Upload from './Component/upload/Upload'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
const MainApp = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upload-excel" element={<Upload/>}></Route>
        </Routes>
      </Router>
    );
  };
  export default MainApp;