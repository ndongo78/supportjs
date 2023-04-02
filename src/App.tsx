import { useState } from 'react'

import { Layout ,Typography, theme} from 'antd'
import { HeaderTop, SideBar } from './components';
import RouteNavigation from './components/routes/Routess';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';

const {Header,Content}=Layout;
const {Title}=Typography;

function App() {
  const [count, setCount] = useState(0)
  const [collapsed, setCollapsed] = useState(false);
  const [selectTech, setSelectTech] = useState("Javascript");
  const [user,setUser] = useState(null); //{user: "billy",email:"billy@gmail.com"}
  const navigate=useNavigate()

  const handleNavigate = (key:string) =>navigate(key)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    {
      user != null ?
      <Layout style={{backgroundColor:colorBgContainer}}>
      
      <SideBar 
       collapsed={collapsed} 
       handleNavigate={handleNavigate} 
       selectTech={selectTech}
       />
      <Layout >
      <HeaderTop 
      collapsed={collapsed} 
      setCollapsed={setCollapsed}
      setSelectTech={setSelectTech}
      selectTech={selectTech}
       />
      <Content className='m-3 shrink rounded-xl content'>
        <RouteNavigation />
      </Content>
      </Layout>
    </Layout>
    :
    <Routes><Route  path='/' element={<Login/>}  /></Routes>
    }
    </>
  )
}

export default App

