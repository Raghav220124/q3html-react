import './checkbox.scss';
import './checkbox-layout.scss';


function Checkbox() {
  return (
    <>
      <h1>Checkbox</h1>
      <p>Main Component</p>
      <div className='check-border-main-bx'>
              <div className='checkbox'>
                <label>
                  <input type="checkbox"/>
                  <span className='custom-mark'>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_43_1517)">
<path d="M4.52036 12.0517C4.12296 12.0519 3.74183 11.8939 3.46106 11.6127L0.258452 8.41125C-0.0861507 8.06654 -0.0861507 7.50776 0.258452 7.16304C0.603165 6.81844 1.16194 6.81844 1.50666 7.16304L4.52036 10.1767L12.4933 2.20376C12.8381 1.85916 13.3968 1.85916 13.7415 2.20376C14.0862 2.54848 14.0862 3.10726 13.7415 3.45197L5.57966 11.6127C5.29889 11.8939 4.91776 12.0519 4.52036 12.0517Z" fill="#F1F3F5"/>
</g>
<defs>
<clipPath id="clip0_43_1517">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
                      </svg>
                  </span>
                </label>
              </div>
      </div>
    </>

  );
}

export default Checkbox;
