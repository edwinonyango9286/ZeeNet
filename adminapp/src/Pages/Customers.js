import React from "react";
import { Table } from "antd";
const columns = [
    {
        title:"SNO",
        dataIndex:"key",   
    },
    {
        title:"Name",
        dataIndex:"name",
    },
    {
        title:"Email",
        dataIndex:"email",
    },
    {
        title:"Mobile",
        dataIndex:"mobile",
    },
];
const data1 =[];
for (let i =0; i<46; i++){
    data1.push({
        key:i,
        name:`Edward King ${i}`,
        product:32,
        status:`London Park Lane no.${i}`
    });
}

const Customers =()=>(
    <>
        <div>
            <h5 className="mb-4 title">Customers</h5>
            <div>
                {<Table columns={columns} dataSource={data1}/>}
            </div>


        </div>

    </>
)

export default Customers;