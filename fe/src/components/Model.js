import React from 'react'
// import { DownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';



function Model({ user }) {

    const [open, setOpen] = useState(false);
    // const toggle = () => setOpen(!open);
    // console.log(">>>>>>>>>>>", user)
    return (
        <div>
            <Button style={{ float: "right", marginBottom: "55px", background: '#00ffff', color: 'white' }} onClick={() => setOpen(true)}>
                Excel Sheet
            </Button>

            <Modal
                title="ALL DATA"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={2000}
            >
                
                {
                    user && user.map((res) => {
                        return <>
                            <div style={{ float: "right", marginTop: "15px", margin: '10px',  color:'#ff99ff' }}>{res.name.name}</div> 
                            <div style={{ float: "right", marginTop: "15px", margin: '10px', color: '#669999' }}>{res.name.ID}</div>
                        </>
                    })
                }

                {/* <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '	#ffff00', color: '#ffffff' }}>10000181260 01/03/2003	mohd shekh ali 3476544488	L1 87.66

                    10006754350 SGD	CRS0	Jiaweisheng0	Assigned 25/06/2011	10/07/2000 Assigned
                    C1123450
                    10000187650 01/10/2000	Rohan Mehra 34567856456	L1 77.66
                    10006759870 SGD	CRS0	Jiaweisheng0	Pending 20/05/2002	07/11/2000 Pending
                    C1123450

                </div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '#00ff40', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '	#ffff00', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '#00ff40', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '#0000ff', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '#ff0080', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div>
                <div style={{ float: "right", marginTop: "15px", margin: '10px', background: '#ff0000', color: '#ffffff' }}> 10000186545 01/01/2005	mohd khan 245678566668	L2 67.56
                    10006754230 SGD	CRS0	Jiaweisheng0	Assigned 21/05/2007	07/02/2000 Assigned
                    C1123450
                    10000188880 01/01/2004	neha kapoor 35670980978	L3 87.99</div> */}
            </Modal>

        </div>

    )
}
export default Model;
