import { Table } from 'antd';
// import qs from 'qs';
import { useEffect, useState } from 'react';
const columns = [
    {
      title: 'CaseId',
      dataIndex: 'CaseId',
      render:(CaseId)=>{
        return <div style={{ color: "red" }}>{CaseId}</div>
      }
  
    },
    {
      title: 'Alert',
  
      children: [
        {
          title: 'AlertID AlertData ',
          dataIndex: 'AlertID',
          width: 150,
          render: (AlertID) => {
            return <div style={{ color: "GREEN" }}>{AlertID}</div>
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
          width: 900,
          render: (CustomerID) => {
            return <div style={{ color: "#00ff40" }}>{CustomerID}</div>
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
          width: 150,
          render: (AlertLevel) => {
            return <div style={{ color: "#ff0080" }}>{AlertLevel}</div>
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
          width: 500,
          render: (AccountNumber) => {
            return <div style={{ color: "#00ff40" }}>{AccountNumber}</div>
          }
        },
  
      ],
  
    },
    {
      title: 'AlertSource',
      children: [
        {
          title: '',
          dataIndex: 'AlertSource',
          width: 150,
          render: (AlertSource) => {
            return <div style={{ color: "#ff8000" }}>{AlertSource}</div>
          }
        },
      ]
    },
    {
      title: 'Anaylyst Name  Typology  STR' ,
      display: 'flex',
      justifyContent: 'space-around',
      children: [
        {
          title: '',
          dataIndex: 'AnaylystName',
          width: 3000,
          render: (AnaylystName) => {
            return <div style={{ color: "#0040ff" }}>{AnaylystName}</div>
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
          width: 40,
          render: (Status) => {
            return <div style={{ color: "#ff00ff" }}>{Status}</div>
          
          }
        },
      ]
    },
    {
      title: ' Case Status',
      children: [
        {
          title: '',
          dataIndex: 'CaseStatus',
          width: 150,
          render: (CaseStatus) => {
            return <div style={{ color: "#0000ff" }}>{CaseStatus}</div>
          }
        },
      ]
    },
  

  ];
  
  
// const getRandomuserParams = (params) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });
function Api() {

    const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
 


  useEffect(() => {
    setLoading(true)
       fetch('http://localhost:5000/findData')
           .then(response => response.json())
      .then(data => {
        setData(data)
      }).catch(err=>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      })
            

    

  }, [])

 console.log("#########################", data)


//   async function Datafetch() {
//     let response = await fetch('http://localhost:5000/findData')
//     const user = await response.json()
//     setData(user)

//   }  
    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$", data)
  
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [tableParams, setTableParams] = useState({
//     pagination: {
//       current: 1,
//       pageSize: 10,
//     },
//   });
//   const fetchData = () => {
//     setLoading(true);
//     fetch(`http://localhost:5000/findData?${qs.stringify(getRandomuserParams(tableParams))}`)
//       .then((res) => res.json())
//       .then(({ results }) => {
//         setData(results);
//         setLoading(false);
//         setTableParams({
//           ...tableParams,
//           pagination: {
//             ...tableParams.pagination,
//             total: 200,
//             // 200 is mock data, you should read it from server
//             // total: data.totalCount,
//           },
//         });
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [JSON.stringify(tableParams)]);
//   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
//   const handleTableChange = (pagination, filters, sorter) => {
//     setTableParams({
//       pagination,
//       filters,
//       ...sorter,
//     });

//     // `dataSource` is useless since `pageSize` changed
//     if (pagination.pageSize !== tableParams.pagination?.pageSize) {
//       setData([]);
//     }
//   };
  return (
    <Table
      columns={columns}
    //   rowKey={(record) => record.login.uuid}
      dataSource={data}
    //   pagination={tableParams.pagination}
      loading={loading}
    //   onChange={handleTableChange}
    />
  );
};
export default Api;