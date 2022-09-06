import './App.css';
import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage/homePage';
import RoadmapPage from './page/roadmapPage/roadmapPage';
import { menuList } from './data/headerMeun'
import AboutPage from './page/aboutPage/aboutPage'
import headerLogo from '../src/images/headerLogo.png'
const { Header, Footer, Content } = Layout;

function App() {
  const navigate = useNavigate();

  const onMenuClick = (menu) => {
    navigate(menu.route)
  }

  return (
    <div className="App">
      <Header>
        <div className='menu-wrap'>
          <img className="headerLogo" src={headerLogo} alt="logo"></img>
          <div className='menu-items'>
            {menuList.map((menu, index) => (
              <div className='menu-item' key={menu.key} onClick={() => onMenuClick(menu)}>
                <div className='menu-key'>{menu.key}</div>
              </div>
            ))}
          </div>
        </div>
      </Header>
      <Content>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/roadmap" element={<RoadmapPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Content>
      <Footer className='footer'>© HSBC Group 2022</Footer>
    </div>
  );
}

export default App;
