import "./App.css";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/homePage";
import RoadmapPage from "./page/roadmapPage/roadmapPage";
import AboutPage from "./page/aboutPage/aboutPage";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Header>this is header</Header>
      <Content>
        <Routes>
          <Route path="/*" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/roadmap" element={<RoadmapPage />}></Route>
          <Route path="/aboutus" element={<AboutPage />}></Route>
        </Routes>
      </Content>
      <Footer style={{
            textAlign: 'center',
            text
          }}>HSBC @2022 Godilocks</Footer>
    </div>
  );
}

export default App;
