import './App.scss';
import Spacing from './components/spacing/spacing.js';
import Colors from './color.js';
import InlineAlert from './component/Alerts/InlineAlerts.js';
import FullWidthAlert from './component/Alerts/FullwidthAlerts.js';
import Avatar from './component/Avatar/Avatar.js';
import Badge from './component/Badge/Badge.js';
import Breadcrumb from './component/Breadcrumb/Breadcrumb.js';
import Buttons from './component/Buttons/Buttons.js';
import Chips from './component/Chips/Chips.js';
import Checkbox from './component/Checkbox/checkbox.js';
import FileUpload from './component/FileUpload/FileUpload.js';
import { PageNotFound } from './component/PageNotFound/PageNotFound.js';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { Homepage } from './component/Homepage/Homepage.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='sidebar'>
        <Spacing/>
      </div>
      <main>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/colors' element={<Colors/>} />
        <Route path='/avatar' element={<Avatar/>} />
        <Route path='/inlineAlert' element={<InlineAlert/>} />
        <Route path='/fullWidthAlert' element={<FullWidthAlert/>} />
        <Route path='/badge' element={<Badge/>} />
        <Route path='/breadcrumb' element={<Breadcrumb/>} />
        <Route path='/buttons' element={<Buttons/>} />
        <Route path='/chips' element={<Chips/>} />
        <Route path='/checkbox' element={<Checkbox/>} />
        <Route path='/fileUpload' element={<FileUpload/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
