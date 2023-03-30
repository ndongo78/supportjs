import React, { FC, useState } from 'react'
import { Avatar, Input, Layout ,Typography, theme} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined
  } from '@ant-design/icons';

const {Header,Sider}=Layout;
const {Search}=Input;
interface Props{
    collapsed:boolean,
    setCollapsed:(t:boolean) => void
}
export const HeaderTop:FC<Props> = ({collapsed,setCollapsed}) => {
   
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
  return (
    <div className=' shadow-2xl'>
    <Header 
    style={{
        backgroundColor:"#013",
        height:80,
        color:"#fff",
        display: 'flex',
         justifyContent:"space-between",
         alignItems:"center"
        }}
        className='side'
        >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger text-2xl',
            onClick: () => setCollapsed(!collapsed),
          })}
           <Search placeholder="rechercher un employé" className=' w-72' onSearch={()=>{}} enterButton />

          <div className='flex '>
            <div className='flex text-white items-center'>
              <p className=' text-xl font-bold mr-5'>Bonjour John Doe</p>
              <Avatar src="https://picsum.photos/200" size={50} />
            </div>
          </div>
    </Header>
    </div>
  )
}
