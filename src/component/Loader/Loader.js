import './loader.scss';
import './loader-layout.scss';


function Loader() {
  return (
    <>
      <h1>Loader</h1>
      <p>Style 1</p>
      <div className='loader-main-bx'>
          <div className='loader-outer loader-xxl'>
              <div className="loader"></div>
              <span>Loading...</span>
          </div>
          <div className='loader-outer loader-xl'>
             <div className="loader"></div>
             <span>Loading...</span>
          </div>
          <div className='loader-outer loader-lg'>
            <div className="loader"></div>
            <span>Loading...</span>
          </div>
          <div className='loader-outer loader-md'>
              <div className="loader"></div>
              <span>Loading...</span>
          </div>
          <div className='loader-outer loader-sm'>
             <div className="loader"></div>
             <span>Loading...</span>
          </div>
      </div>
    </>

  );
}

export default Loader;
