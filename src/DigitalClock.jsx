import { useState , useEffect } from "react";

function DigitalClock(){
    const [time , settime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() =>{
            settime(new Date())
        }
        ,1000)

        return() => clearInterval(interval)
    } ,[])

    function formattime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${ampm}`
    }


    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formattime()}</span>
            </div>
        </div>
        
        </>
    );
}
export default DigitalClock;