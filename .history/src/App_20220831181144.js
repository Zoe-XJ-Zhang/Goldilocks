import './App.css';
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage/homePage';
import RoadmapPage from './page/roadmapPage/roadmapPage';
import { menuList } from './data/headerMeun'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Header>
        <div className='menu-wrap'>
          {menuList.map((menu, index) => (
            <div className='menu-item' key={menu.key}>
              <div className=''>{menu.key}</div>
            </div>
          ))}
        </div>
      </Header>
      <Content>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/roadmap" element={<RoadmapPage />}></Route>
          <Route path="/aboutus" element={<AboutPage />}></Route>
        </Routes>
      </Content>
<<<<<<< HEAD
      <Footer style={{
            textAlign: 'center',
            fontSize:'20px',
          }}>HSBC @2022 Godilocks</Footer>
=======
      <Footer className='footer'>© HSBC Group 2022</Footer>
>>>>>>> 6a2c9a00720e8f2b3ad53616103c29e8f6162dc1
    </div>
  );
}

export default App;
