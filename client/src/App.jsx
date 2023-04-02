import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Router from './router'
import './App.css'


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
          <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
