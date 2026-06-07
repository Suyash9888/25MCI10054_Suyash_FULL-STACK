import { useEffect } from "react";
import {WindowSize} from "./WindowSize";


function App(){
const {width , height} = WindowSize();

return (
  <>
  <div>{
    (width < 768) ? <h1>this is mobile view</h1> : <h1></h1>
}</div>
  <h1> window size {width} X {height}</h1>
  </>
);
}
export default App ;