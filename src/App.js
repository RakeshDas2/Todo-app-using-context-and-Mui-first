
import './App.css';
import { TodoContextProvider } from './context/contextApi';
import { useState } from 'react';
import ShowComponent from './components/ShowComponent';
import AddComponent from './components/AddComponent';
import EditComponent from './components/EditComponent';

function App() {
  const [finalData, setFinalData] = useState([]) 
  const [data, setData] = useState('')
  const [show,setShow]=useState(false)
  const [editIndex,setEditIndex]=useState(0)
  return (
    <TodoContextProvider value={{ finalData, setFinalData, data, setData,show,setShow,editIndex,setEditIndex }}>
      <ShowComponent />
      {finalData.length!==0 && <AddComponent/>}
      <EditComponent/>
    </TodoContextProvider>
  );
}

export default App;
