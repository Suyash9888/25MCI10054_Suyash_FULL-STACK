import { useEffect, useState } from "react";

export function WindowSize(){
    const [Window , setWindow] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });
    useEffect(()=>{
        function handlesize(){
        setWindow({
            width:window.innerWidth,
            height:window.innerHeight
        });
        }
        window.addEventListener("resize" , handlesize);
        return ()=>{
            window.removeEventListener("resize" , handlesize)
        };
    },[]);
    return Window ;
}
