import { UploadOutlined, CarOutlined, CodeOutlined, ToolOutlined, CompassOutlined, BorderOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Table, Tabs, Avatar, message, Space, DatePicker, Upload, Radio, Select, Progress } from 'antd';
import { useState, useEffect } from 'react';
import Model from './Model';
import qs from 'qs';
import dayjs from 'dayjs';
const { Header, Content, Sider, Footer } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';


const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <CompassOutlined />),
  getItem(<CodeOutlined />),
  getItem(<ToolOutlined />),
  getItem(<CarOutlined />),


];
const columns = [

  {
    title: 'CaseId',
    dataIndex: 'CaseId',
    render: (CaseId) => {
      return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: "blue", marginLeft: '10px' }}><div style={{ color: "grey" }}><BorderOutlined /></div> {CaseId}
      </div>
    }

  },
  {
    title: 'Alert',

    children: [
      {
        title: 'AlertID AlertData ',
        dataIndex: 'AlertID',
        render: (AlertID) => {
          return <div style={{ color: "#ff00ff" }}> {AlertID.id}<div style={{ color: "green" }}></div> {AlertID.date}
          </div>
        }
      },
    ]
  },

  {
    title: 'Customer',
    children: [
      {
        title: 'Customer Id',
        dataIndex: 'name',
        render: (name) => {
          return <div style={{ color: "	#000000" }}>{name.name}<div style={{ color: "#bfff00" }}></div> {name.ID}
          </div>
        }

      },
    ]
  },

  {
    title: 'Alert',
    children: [
      {
        title: 'AlertLevel AlertScore',
        dataIndex: 'AlertLevel',
        render: (AlertLevel) => {
          return <div style={{ color: "	#ff0000" }}>{AlertLevel.limit}
            <div style={{ color: "	#1a0000" }}>{AlertLevel.rate} <Progress strokeColor={{ '0%': '#eb5c20', '100%': '#c6224e' }} percent={70} status='active' size="small" /></div>
          </div>
        }
      },
    ]
  },
  {
    title: 'Account',
    children: [
      {
        title: 'AccountNumber AccountCurrency',

        dataIndex: 'AccountNumber',
        render: (AccountNumber) => `${AccountNumber.number} ${AccountNumber.sgd}  `,
        width: 150,

      },

    ],

  },
  {
    title: 'AlertSource',
    children: [
      {
        title: '',
        dataIndex: 'AlertSource',
        render: (AlertSource) => {
          return <div style={{ color: "red" }}>{AlertSource}</div>
        }

      },
    ]
  },
  {
    title: 'Anaylyst Name  ',

    children: [
      {
        title: '',
        dataIndex: 'AnaylystName',
        render: (AnaylystName) => {
          return <div style={{ color: "orange" }}>{AnaylystName}</div>
        }

      },
    ]
  },
  {
    title: 'Alert',
    children: [
      {
        title: 'Status',
        dataIndex: 'Status',
        render: (Status) => `${Status.Assm} ${Status.Date}`,
        width: 40,

      },
    ]
  },
  {
    title: ' Case Status',
    children: [
      {
        title: '',
        dataIndex: 'CaseStatus',
        render: (CaseStatus) => {
          return <div style={{ color: "#666600" }}> {CaseStatus.DATE}<div style={{ color: "green" }}></div>{CaseStatus.pending}
          </div>
        }
     
       },
    ]
  },
]


const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});



function Sliders() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [name, setName] = useState([])
  const [filter, setFilter] = useState([])
  const [pending, setPending] = useState([])


  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });


  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/findData?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setFilter(data)
        setPending(data)
        setName(data)

        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 24,
          },
        });
      })
    setLoading(false)
  }, [JSON.stringify(tableParams)])

  // console.log("#########################", data)

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const onFillterL1 = (e) => {
    console.log(":::::::::::", e.target.value)
    const filterByL = filter.filter((res) => res.AlertLevel.limit === e.target.value)
    console.log("?????????L1", filterByL)
    setData(filterByL)

  }

  const FillterhandleChange = (e) => {
    console.log("******&&&&&&&&", e)
    const asa = pending.filter((res) => res.CaseStatus.pending === e)
    console.log("@@@@@@@@@@@@ PENDING", asa)
    setData(asa)
  }

  const selectday = (e) => {
    console.log("$$$$$$$$$$", e.target.value)
    const day = name.filter((res) => res.name.name === e.target.value)
    console.log("************ ROHAN MEHRA", day)
    setData(day)
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (

    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>

      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Header style={{ padding: 10, background: colorBgContainer }}>
            <Breadcrumb style={{ padding: '10px 0', marginLeft: "20px" }}>
              <Breadcrumb.Item style={{ color: '#00ffff' }}>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item style={{ color: ' 	#808080' }}><p style={{ marginTop: '0px' }}>Case by user group</p></Breadcrumb.Item>
            </Breadcrumb>
          </Header>

          <Header style={{ background: colorBgContainer }}>
            <h1 style={{ marginTop: '0px', marginBottom: '20px', color: '#000000' }}>All Cases</h1>
          </Header>
        </div>

        <Content style={{ margin: '24px 16px 0' }}>
          <Tabs

            defaultActiveKey="1"
            items={[
              {
                label: 'By User Group',
                key: '1',

              },
              {
                label: 'By Investigator',
                key: '2',


              },

            ]}
          />

          <div style={{ padding: 24, marginBottom: '80px', minHeight: 560, background: colorBgContainer, color: '#808080' }}>
            <p style={{ float: "right", marginTop: '0px', paddingBottom: '18px' }}><Upload {...props}>
              <Avatar style={{ background: '#00ffff' }} icon={<UploadOutlined />} />
            </Upload> </p>
            <h4 style={{ marginTop: '0px' }}>Case by user group</h4>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: 'User Group A',
                  key: '1',

                },
                {
                  label: 'User Group B',
                  key: '2',


                },
                {
                  label: 'User Group C',
                  key: '3',

                },
                {
                  label: 'User Group D',
                  key: '3',

                },
              ]}

            />

            <div ><Model user={data} /></div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <p style={{ marginTop: '10%', marginLeft: '2%' }}>Status</p>
              <p style={{ marginTop: '95px', marginLeft: '2%' }}>AlertLevel</p>
              <p style={{ marginTop: '10%', marginRight: '30%' }}>Duration</p>
              <p style={{ marginTop: '10%', marginRight: '13%' }}>DatePicker</p>
            </div>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: '25px' }}>

              <Space style={{ marginBottom: '12px' }} >
                <Select onSelect={(event) => FillterhandleChange(event)} defaultValue="All Your Choice" >
                  <Option value="Pending" >Pending</Option>
                  <Option value="Assigned" >Assigned</Option>
                </Select>
              </Space>

              <Radio.Group style={{ marginBottom: '12px', }}>
                <Radio.Button value="L1" onClick={onFillterL1}>L1</Radio.Button>
                <Radio.Button value="L2" onClick={onFillterL1}> L2</Radio.Button>
                <Radio.Button value="L3" onClick={onFillterL1}>L3</Radio.Button>
              </Radio.Group>

              <Radio.Group defaultValue="top" buttonStyle="solid" style={{ marginBottom: '12px', }}>
                <Radio.Button value="top">7 Days</Radio.Button>
                <Radio.Button onClick={selectday} value="Rohan Mehra">30 Days</Radio.Button>
                <Radio.Button onClick={selectday} value="mohd shekh ali">90 Days</Radio.Button>
                <Radio.Button onClick={selectday} value="neha kapoor">180 Days</Radio.Button>
                <Radio.Button onClick={selectday} value="mohan kumar">360 Days</Radio.Button>
              </Radio.Group>

              <RangePicker style={{ height: '0%', marginBottom: '12px' }}
                defaultValue={[dayjs('20/05/2011', dateFormat), dayjs('25/05/2011', dateFormat)]} format={dateFormat}
              />
            </div>

            <Table
              columns={columns}
              dataSource={data}
              pagination={tableParams.pagination}
              loading={loading}
              onChange={handleTableChange}
            />
          </div>
        </Content>
        <Footer style={{
          background: '#00001a',
          marginTop: '20px', color: '#ffffff', textAlign: 'center'
        }}>Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout >

  )
}
export default Sliders;
