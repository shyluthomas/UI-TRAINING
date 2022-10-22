import logo from './logo.svg';
import './App.css';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Body from './body/body';

function App() {
  return (
    <div className='appstyle'>
    <Header />
    <Sidebar/>
    <Body />
    </div>
  );

}
export default App;
