import './App.scss';
import Colors from './color.js';
import InlineAlert from './component/Alerts/InlineAlerts.js';
import FullWidthAlert from './component/Alerts/FullwidthAlerts.js';
import Avatar from './component/Avatar/Avatar.js';
import Badge from './component/Badge/Badge.js';
import Breadcrum from './component/Breadcrum/Breadcrum.js';
import Buttons from './component/Buttons/Buttons.js';
import Chips from './component/Chips/Chips.js';
import Checkbox from './component/Checkbox/checkbox.js';
import FileUpload from './component/FileUpload/FileUpload.js';

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
      <Chips/>
      <Checkbox/>
      <FileUpload/>
    </div>
  );
}

export default App;
