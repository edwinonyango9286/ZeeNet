import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, resetState } from "../features/customers/customerSlice";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState())
    dispatch(getUsers());
  }, []);

  const customerState = useSelector((state) => state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerState.length; i++) {
    if (customerState[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerState[i].firstname + " " + customerState[i].lastname,
        email: customerState[i].email,
        mobile: customerState[i].mobile,
      });
    }
  }

  

  return (
    <div>
      <h5 className="mb-2 title">Customers</h5>
      <div>{<Table columns={columns} dataSource={data1} />}</div>
    </div>
  );
};

export default Customers;
