import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Bootstrap UI Experiment</span>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="alert alert-info">
          Welcome to UI Design using Bootstrap
        </div>

        <div className="card mb-4" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card Component</h5>
            <p className="card-text">This is a Bootstrap card.</p>
            <button className="btn btn-primary">Click</button>
          </div>
        </div>

        <form>
          <h4>Login Form</h4>
          <input className="form-control mb-2" placeholder="Email" />
          <input className="form-control mb-2" placeholder="Password" />
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
