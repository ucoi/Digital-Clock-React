import { useState , useEffect } from "react";

function DigitalClock(){
    const [time , settime] = useState()


    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>012:21:21</span>
            </div>
        </div>
        
        </>
    );
}
export default DigitalClock;