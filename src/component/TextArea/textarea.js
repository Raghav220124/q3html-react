import './textarea.scss';
import './textarea-layout.scss';


function TextArea() {
     return (
          <>
               <h1>Text Area</h1>
               <div className='input-border-main-bx'>
                    <div className='form-field'>
                         <label for="">Label</label>
                         <textarea placeholder="Enter Label" id=""></textarea>
                    </div>
                    <div className='form-field invalid'>
                         <label for="">Label</label>
                         <textarea placeholder="Enter Label" id=""></textarea>
                    </div>

                    <div className='form-field'>
                         <label for="">Label</label>
                         <textarea disabled placeholder="Enter Label" id=""></textarea>
                    </div>
               </div>

               <div className='input-border-main-bx'>
                    <div className='form-field form-round'>
                         <label for="">Label</label>
                         <textarea placeholder="Enter Label" id=""></textarea>
                    </div>
                    <div className='form-field invalid form-round'>
                         <label for="">Label</label>
                         <textarea placeholder="Enter Label" id=""></textarea>
                    </div>

                    <div className='form-field form-round'>
                         <label for="">Label</label>
                         <textarea disabled placeholder="Enter Label" id=""></textarea>
                    </div>
               </div>
          </>

     );
}

export default TextArea;
