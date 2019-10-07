import React, { useState } from 'react';
import './App.scss';

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark)

  return (
    <div className={dark && 'dark'} style={{minHeight: '100vh'}}>
      <header className="header py-3 mb-4 border-bottom">
        <div className="container d-flex justify-content-between">
          <h1>Chiens à lunette</h1>
          <button className='btn mr-3' onClick={toggleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill={dark ? '#ffffff' : '#000000'} d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" /></svg>
          </button>
        </div>
      </header>
      <div className="container d-flex flex-wrap">
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog1.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog2.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog3.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog4.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog5.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog6.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog7.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog8.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog9.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog10.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog11.jpg" />
        </div>
        <div className="card mb-3" style={{ width: '16rem' }}>
          <img className="card-img-top" alt="Awesome dog wearing glasses" style={{ height: '180px', width: '100%', display: 'block' }}
            src="dogs/dog12.jpg" />
        </div>
      </div>
    </div>
  );
}

export default App;
