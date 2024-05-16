import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAOrderByUserId, } from "../features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAOrderByUserId(userId));
  }, []);

  const orderState = useSelector((state) => state.auth);

  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count: orderState[i].count,
      amount: orderState[i].product.price,
      color: orderState[i].product.color,
      date: orderState[i].product.createdAt,
      action: (
        <>
          <Link to="/" className="fs-4">
            <FiEdit />
          </Link>
          <Link>
            <AiFillDelete className="ms-3 fs-4 text-danger" />
          </Link>
        </>
      ),
    });
  }

  return (
    <>
      <div>
        <h5 className="mb-2">View  Order</h5>
        <div>{<Table columns={columns} dataSource={data1} />}</div>
      </div>
    </>
  );
};

export default ViewOrder;
