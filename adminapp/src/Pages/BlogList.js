import React from "react";
import { Table } from "antd";

const columns=[
    {
        title:"SNO",
        dataIndex:"key",

    },
    {
        title:"Tittle",
        dataIndex:"name",

    },
    {
        title:"Category",
        dataIndex:'category'
    },
    {
        title:"action",
        dataIndex:"action",
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





const BlogList =()=>{
    return(
        <>
        <div>
            <h4 className="mb-2 title">Blog List</h4>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>
        </div>


        </>
    )
}

export default BlogList;

