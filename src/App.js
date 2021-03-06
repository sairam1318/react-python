import XmlParser from './components/XmlParser';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import BuildMetadata from './components/BuildMetadata';
import CertificateWithHeader from './components/CertificateWithHeader'
function App() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/parse-xml">PARSE XML</Link>
            </li>
            <li>
              <Link to="/build-metadata">Build Metadata</Link>
            </li>
            <li>
              <Link to="/certificateWithHeader">Certificate with header</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/parse-xml" exact>
              <XmlParser/>
            </Route>
            <Route path="/build-metadata" exact>
              <BuildMetadata/>
            </Route>
            <Route path="/certificateWithHeader" exact>
              <CertificateWithHeader />
            </Route>
            <Route path="/" exact>
              <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
