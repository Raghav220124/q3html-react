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
import InputField from './component/InputField/InputField.js';
import Pagination from './component/Pagination/pagination.js';
import TextArea from './component/TextArea/textarea.js';
import Toast from './component/Toast/Toast.js';
import Table from './component/Table/Table.js';
import Tabbar from './component/Tabbar/Tabbar.js';
import Switch from './component/Switch/Switch.js';
import Radio from './component/Radio/Radio.js';
import Loader from './component/Loader/Loader.js';
import Accordion from './component/Accordion/Accordion.js';
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
      <Chips/>
      <Checkbox/>
      <FileUpload/>
      <InputField/>
      <Pagination/>
      <TextArea/>
      <Toast/>
      <Table/>
      <Tabbar/>
      <Switch/>
      <Radio/>
      <Loader/>
      <Accordion/>
    </div>
  );
}

export default App;
