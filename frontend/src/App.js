import Userlist from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Userlist/>}/>
      <Route path="/add" element={<AddUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
    </Routes>
     </BrowserRouter>
  );
}

export default App;
