import './App.css';
import { Button, Layout } from 'antd'

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Header>this is header</Header>
      <Content>
        This is a test msg.
        <Button type="primary">test btn for antd ui component lib</Button>
      </Content>
      <Footer>this is footer</Footer>
    </div>
  );
}

export default App;
