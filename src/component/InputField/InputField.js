import './InputField.scss';
// import { FiEye } from "react-icons/ai";
import { AiFillDiff } from "react-icons/ai";

function InputField() {
  return (
    <>
     <h1>Input Fields</h1>
     <div className="input-main">
          <div className="input-inner">
               <form className="input-box">
          {/* <input icon={<AiOutlineUser />} type={'text'} placeholder={'Enter User Name'} />
          <input icon={<AiOutlineUser />} type={'text'} placeholder={'Enter Business Name'} />
          <input icon={<AiOutlineMail />} type={'text'} placeholder={'Enter your Email'} /> */}
           <input type='text' placeholder="text" icon='' /> 
        </form>
        <AiFillDiff />
          </div>
     </div> 
    </>

  );
}

export default InputField;
