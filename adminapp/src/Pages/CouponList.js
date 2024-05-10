
import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";
import { getCoupons } from "../features/coupon/couponSlice";

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
    title: "Expiry Date",
    dataIndex: "expiry",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const CouponList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoupons());
  }, []);

  const couponState = useSelector((state) => state.coupon.coupons);
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      expiry: couponState[i].expiry,
      discount: couponState[i].discount,

      action: (
        <>
        <Link className="fs-5"> <AiTwotoneEdit/></Link>
        <Link className="ms-4 text-danger border-0 fs-5"><AiFillDelete/></Link>
        </>
      ),
    });
  }

  return (
    <>
      <div>
        <h5 className="mb-2 title">Coupon List</h5>
        <div>{<Table columns={columns} dataSource={data1} />}</div>
      </div>
    </>
  );
};
export default CouponList;
