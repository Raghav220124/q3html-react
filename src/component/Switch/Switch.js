import './Switch.scss';


function Switch() {
  return (
    <>
     <h1>Switch</h1>
     <div>
     <span className="type1">
     <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
     </label>
     <label class="switch">
          <input type="checkbox" defaultChecked="true" />
          <span class="slider"></span>
     </label>
     </span>
    </div>
    <br />
    <div>
     <span className="type2">
     <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
     </label>
    
     <label class="switch">
          <input type="checkbox" defaultChecked="true" />
          <span class="slider"></span>
     </label>
     </span>
     </div>
     <br />
     <div>
     <span className="type3">
     <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
     </label>
    
     <label class="switch">
          <input type="checkbox" defaultChecked="true" />
          <span class="slider"></span>
     </label>
     </span>
     </div>
    </>

  );
}

export default Switch;
