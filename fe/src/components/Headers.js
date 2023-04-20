import React from 'react';
import { AppstoreOutlined, EyeOutlined, QuestionCircleOutlined, UpOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Layout, Badge } from 'antd';

const { Header } = Layout;


function Headers() {

  return (
    <div>

      <Layout />
      <Header >

        <Avatar style={{ float: "right", marginTop: "4px", margin: '10px', color: '#00ffff', marginLeft: "3px" }} icon={<QuestionCircleOutlined />} />
        <Avatar style={{ float: "right", marginTop: "4px", margin: '10px', color: '#00ffff' }} icon={<UpOutlined />} />
        <Avatar size={50} style={{ float: "right", marginBottom: "10px" }}>Customer</Avatar>
        <Avatar style={{ float: "right", marginTop: "4px", margin: '10px' }} src={<img src={'./gm.png'} alt="avatar" />} />
        {/* <Avatar style={{float:"right",marginTop:"15px",margin:'10px',color:'#00ffff'}}  icon={<BellOutlined />} /> */}

        <Space style={{ float: "right" }}>
          <Badge dot  >
            <BellOutlined
              style={{
                fontSize: 25, color: '#00ffff'
              }}
            />
          </Badge>
        </Space>

        <Avatar style={{ marginTop: '15px', margin: '10px', color: '#00ffff' }} icon={<AppstoreOutlined />} />
        <Avatar style={{ marginTop: '15px', margin: '10px', color: '	#808080' }} icon={<EyeOutlined />} />
        {/* <h1>sdfgh</h1> */}
        <Avatar size={64}  >Management</Avatar>

      </Header>
      <Layout />
    </div>
  )
}

export default Headers;
