import logo from './logo.svg';
import './App.css';


//See if the browser supports Service Workers, if so try to register one
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").then(function(registering){
    // Registration was successful
    console.log("Browser: Service Worker registration is successful with the scope",registering.scope);
  }).catch(function(error){
    //The registration of the service worker failed
    console.log("Browser: Service Worker registration failed with the error",error);
  });
} else {
  //The registration of the service worker failed
  console.log("Browser: I don't support Service Workers :(");
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
