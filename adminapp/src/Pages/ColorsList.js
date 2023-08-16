import { Table } from "antd";
import React from "react";

const columns=[
    {
        title:"SNO",
        dataIndex:"key",
    },
    {
        title:"Name",
        dataIndex:"name", 
    },
    {
        title:"Action",
        dataIndex:"action"
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


const ColorList = ()=>{

    return(
        <>
        <div>
            <h5 className="mb-2 title">Colors</h5>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>
        </div>

        
        </>
    )
}

export default ColorList;

