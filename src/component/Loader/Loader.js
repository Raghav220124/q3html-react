import './Loader.scss';

function Loader() {
  return (
    <>
      <h1>Loader</h1>
      <div className="loader-manage">
        <div class="loader-32"></div>
        <div class="loader-48"></div>
        <div class="loader-56"></div>
        <div class="loader-64"></div>
        <div class="loader-80"></div>
      </div>
      <div className="loader-manage shade-loader">
        <div class="loader-32">
          <span>75%</span>
        </div>
        <div class="loader-32 loader-48">
        <span>75%</span>
        </div>
        <div class="loader-32 loader-56">
        <span>75%</span>
        </div>
        <div class="loader-32 loader-64">
        <span>75%</span>
        </div>
        <div class="loader-32 loader-80">
        <span>75%</span>
        </div>
      </div>
    </>
  );
}

export default Loader;
