import React from "react";
import { Table } from "antd";

const columns =[

    {
        title:"SNO",
        dataIndex:"key", 
    },
    {
        title:"Name",
        dataIndex:"name",
    },{
        title:"Action",
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

const BlogCategoryList =()=>{
return(
    <>
     <div>
        <h5 className="mb-2 title title">Blog Category</h5>
        <div>
            <Table columns={columns} dataSource={data1}/>
        </div>

      
    </div>
    
    </>
   
)


}

export default BlogCategoryList;