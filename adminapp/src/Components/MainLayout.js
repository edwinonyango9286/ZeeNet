import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {MdDashboardCustomize} from "react-icons/md"
import {BsPeople} from "react-icons/bs"
import {useNavigate} from "react-router-dom";
import {AiOutlineShopping} from "react-icons/ai";
import {BsCart3} from "react-icons/bs";
import {SiBrandfolder} from "react-icons/si";
import {TbCategory} from "react-icons/tb";
import {AiOutlineBgColors} from "react-icons/ai";
import { FaClipboardList} from "react-icons/fa";
import {ImBlogger2} from "react-icons/im"


const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}

          onClick={({key}) =>{
            if(key=="signout"){
            }else{
              navigate(key)
            }
          }}

          items={[
            {
              key: '',
              icon: <MdDashboardCustomize className='fs-5' />,
              label: 'Dashboard',
            },
            { 
              key: 'customers',
              icon: <BsPeople className='fs-5' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShopping className='fs-5 ' />,
              label: 'Catalog',
              children:[
                {
                  key:"product",
                  icon:<BsCart3 className='fs-5'/>,
                  label:" Add Product"
                },{
                  key:"product-list",
                  icon:<BsCart3 className='fs-5'/>,
                  label:"Product List"
                },{
                  key:"category",
                  icon:<SiBrandfolder className="fs-5"/>,
                  label:"Brand" 
                },{
                  key:"list-category",
                  icon:<SiBrandfolder className="fs-5"/>,
                  label:"Brand List"
                },
                {
                  key:"category",
                  icon:<TbCategory className="fs-5"/>,
                  label:"Category"
                },
                {
                  key:"list-category",
                  icon:<TbCategory className="fs-5"/>,
                  label:"Category List"

                },
                {
                  key:"color",
                  icon: <AiOutlineBgColors className="fs-5"/>,
                  label:"Color"
                },{
                  key:"list-color",
                  icon:<AiOutlineBgColors className="fs-5"/>,
                  label:"Color List"
                }

              ]
            },
            {
              key:"orders",
              icon:<FaClipboardList className="fs-5"/>,
              label:"Orders"
            },{
              key:"blog",
              icon:<ImBlogger2 className="fs-5"/>,
              label: " Add Blogs",
              children:[
                {
                  key:"blog",
                  icon:<ImBlogger2 className="fs-5"/>,
                  label:"Blog List" ,
                },
                {
                  key:"blog-category",
                  icon:<ImBlogger2 className="fs-5"/>,
                  label:"Add Blog Category"
                },
                {
                  key:"blog-category-list",
                  icon:<ImBlogger2 className='fs-5'/>,
                  label:"Blog Category List"
                }

              ]

            }

          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;