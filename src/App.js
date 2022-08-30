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
          <Route path='/*' element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/roadmap' element={<RoadmapPage />}></Route>
        </Routes>
      </Content>
      <Footer className='footer'>© HSBC Group 2022</Footer>
    </div>
  );
}

export default App;
