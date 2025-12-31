import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import { ChatAgentes } from './components/chat/ChatAgentes';

function App() {
  const [token, setToken] = useState(localStorage.getItem('wilo_token'));

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenUrl = urlParams.get('token');

    if (tokenUrl) {
      setToken(tokenUrl);
      localStorage.setItem('wilo_token', tokenUrl);

      window.history.replaceState({}, document.title, window.location.pathname);
      console.log('Token almacenado desde la URL');
    }

  }, []);




  return (
    <Layout>
      <div className="container mt-4 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ChatAgentes token={token} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;