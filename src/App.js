import './App.css';
import Foot from './componants/Footer/Foot';
import Scroll_To_top from './componants/Scroll_To_top';
import Main_About from './componants/about/Main_About';
import Blog from './componants/blog/Blog';
import Collection from './componants/collection/Collection';
import Contact from './componants/contact/Contact';
import Main_home from './componants/home/Main_home';
import Navigation from './componants/nav/Navigation';
import {Routes , Route } from "react-router-dom";
import Page_not_found from './componants/not find/Page_not_found';
function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Main_home/>} />
        <Route path='/About' element={<Main_About />} />
        <Route path='/COLLECTION' element={<Collection/>} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<Page_not_found/>} />
        
      </Routes>

      <Scroll_To_top/>
      
   
      <Foot/>
    </div>
  );
}

export default App;
