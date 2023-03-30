import React, { FC } from 'react'
import { Avatar, Calendar, Layout ,Menu,MenuProps,Typography, theme} from 'antd'
import {SiJavascript} from "react-icons/si"
import {DiReact} from "react-icons/di"
import SubMenu from 'antd/es/menu/SubMenu';
import { menuItems } from '../constants/menuOptions';
import { useNavigate } from 'react-router-dom';

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  

const {Header,Sider}=Layout;
const {Text}=Typography

interface Props{
    collapsed:boolean
    handleNavigate:(t:string) => void
}

export const SideBar:FC<Props> = ({collapsed,handleNavigate}) => {
  const navigate=useNavigate()
    const {
        token: { colorBgContainer , },
      } = theme.useToken();
  return (
    <div className='side shadow-2xl' style={{backgroundColor:colorBgContainer}}>
    <Sider 
     style={{
      display:collapsed ? "none":"block",width:250,
      backgroundImage:"../../assets/bg.png"
    }}
    trigger={null} collapsible collapsed={collapsed}
    width={300}
    >
     <div className='flex flex-col items-center side' style={{
      backgroundColor:colorBgContainer
      }}>
      <div className='flex flex-col items-center m-3'>
       {
        !collapsed && (
            <Avatar
         size={100}
         className='m-5'
         src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        >
        </Avatar>
        )
       }
        </div>
      <Menu
      className='side'
       style={{backgroundColor:"#fff"}}
       mode="inline"
       defaultSelectedKeys={['0']}
       defaultOpenKeys={['sub1']}>
       <SubMenu key="sub1" icon={<SiJavascript color='yellow'  size={40} />} 
       title="JAVASCRIPT"
       style={{fontSize:17}}
       >
       {
        menuItems.map(({name,link},i)=>(
          <Menu.Item onClick={()=>navigate(link)} key={i} >{name}</Menu.Item>
        ))
       }
        </SubMenu>
        {/* reactjs */}
          <SubMenu key="sub2" icon={<DiReact color='blue' size={40} />} 
        title="REACTJS"
        style={{fontSize:17}}
        >
        {
          menuItems.map(({name,link},i)=>(
            <Menu.Item key={i} >{name}</Menu.Item>
          ))
        }
        </SubMenu>
        {/* react-native */}
        <SubMenu key="sub3" icon={<DiReact color='blue' size={40} />} 
        title="REACT-NATIVE"
        style={{fontSize:17,color:"black"}}
        >
        {
          menuItems.map(({name,link},i)=>(
            <Menu.Item key={i} >{name}</Menu.Item>
          ))
        }
        </SubMenu>
        {/* react-native */}
        <SubMenu key="sub4" icon={<DiReact color='blue' size={40} />} 
        title="Nextjs"
        style={{fontSize:17,color:"black"}}
        >
        {
          menuItems.map(({name,link},i)=>(
            <Menu.Item key={i} >{name}</Menu.Item>
          ))
        }
        </SubMenu>
       </Menu>
        </div>
    </Sider>
    </div>
  )
}
