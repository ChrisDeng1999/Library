import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from './pages/Home';
import Header from './components/Header';




function App() {
  return (
    <div> 
      <Router>
        <div>
        <Header />
          <div>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route path ="*"
              element = {<h1>This Page Doesn't Exist!</h1>}
              />
            </Routes>
          </div>
        </div>
      </Router>
      </div>
  );
}            

        
export default App;