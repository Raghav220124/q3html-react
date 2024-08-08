import './progressbar.scss';
import './progress-bar-layout.scss';
import CheckCricle from '../../assets/images/check_circle.svg'

function LinearProgress() {
  return (
    <>
      <h4>Linear Progress Bar</h4>
      <div className='linear-progress-sec'>
            
            
            <div className='progress'>
                  <div style={{width:'70%'}} className='progress-bar'></div>
            </div>
        
            <br/>

             <div className='progress steps-progress-bx'>
                  <div className='steps-progress-count'>
                     <img src={CheckCricle} /> <span>1</span> of 7 steps completed
                  </div>
                  <div className='steps-progress'>
                   <div className='progress-step'>
                       <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   <div className='progress-step'>
                   <div style={{width:'0'}} className='progress-bar'></div>
                   </div>
                   </div>
            </div>
          
            <br/>
             
              <div className='progress-level'>
                   <div className='level-bx'>
                   <div className='lavel-step lavel-1'>
                      <span>Lv 1</span>
                  </div>
                  <div className='lavel-step lavel-2 lavel-active'>
                      <span>Lv 2</span>
                  </div> 
                  <div className='lavel-step lavel-3'>
                      <span>Lv 3</span>
                  </div>
                  <div className='lavel-step lavel-4'>
                      <span>Lv 4</span>
                  </div>
                  <div className='lavel-step lavel-5'>
                      <span>Lv 5</span>
                  </div>
                   </div>
                    <div className='progress'>
                       <div style={{width:'70%'}} className='progress-bar'></div>
                    </div>
            </div>
      </div>
    </>

  );
}

export default LinearProgress;
