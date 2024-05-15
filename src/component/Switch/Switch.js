import './switch.scss';
import './switch-layout.scss';


function Switch() {
    return (
        <>
            <h1>Switch</h1>
             <div className='tabbar-main-bx'>
                <div>
                    <p>Main Component - Type 1</p>
                    <label class="switch switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <p>Main Component - Type 2</p>
                    <label class="switch switch-lg switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
                <div>
                    <p>Main Component - Type 3</p>
                    <label class="switch switch-line switch-rounded">
                    <input type="checkbox"/>
                       <span class="slider round"></span>
                    </label>
                </div>
            </div>
        </>

    );
}

export default Switch;
