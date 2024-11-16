import react from 'react'
import ReactDOM from 'react-dom';
import {useToggle} from './src/components/useToggle/useToggle.js'

const App = () => {

    // two values are being returned from useToggle hook
    const arr = [10,20,30,40,50];
    const index = 0;
    const [value , setToggle] = useToggle({arr , index});
    console.log("value inside app.js" , value);
     return (
     <>
          <div
            style = {{
                 display : 'flex',
                 flexDirection:'column',
                 alignItems : 'center',
                 justifyContent:'center'
            }}
          >
            <h1>{value}</h1>
            <button onClick = {setToggle}>Toggle</button>
          </div>

     </>
     )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);