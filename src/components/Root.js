import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main/Index";
import Dashboard from "./Dashboard/Index";
import AjoutProjet from "./Sidebar/AjoutProjet/Index";
import ListeProjet from "./Sidebar/ListeProjet/Index";
const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} >
          <Route index path='/' element={<Dashboard />} />
          <Route path='/ajoutProjet' element={<AjoutProjet />} />
          <Route path='/ListeProjet' element={<ListeProjet />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Root
