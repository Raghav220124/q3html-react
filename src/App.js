import './App.scss';
import Colors from './color.js';
import InlineAlert from './component/Alerts/InlineAlerts.js';
import FullWidthAlert from './component/Alerts/FullwidthAlerts.js';
import Avatar from './component/Avatar/Avatar.js';
import Badge from './component/Badge/Badge.js';
import Breadcrum from './component/Breadcrum/Breadcrum.js';
import Buttons from './component/Buttons/Buttons.js';
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          amit
        </a>
      </header> */}
      <Colors/>
      <Avatar/>
      <InlineAlert/>
      <FullWidthAlert/>
      <Badge/>
      <Breadcrum/>
      <Buttons/>
    </div>
  );
}

export default App;
