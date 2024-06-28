import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import {
  deleteAColor,
  getColors,
  resetState,
} from "../features/color/colorSlice";
import { FiEdit } from "react-icons/fi";
import CustomModal from "../Components/CustomModal";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ColorList = () => {
  const [open, setOpen] = useState(false);
  const [colorId, setColorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setColorId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getColors());
  }, []);

  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];

  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      name: colorState[i].title,
      action: (
        <>
          <Link to={`/admin/color/${colorState[i]._id}`} className="fs-5">
            <FiEdit />
          </Link>
          <button
            onClick={() => showModal(colorState[i]._id)}
            className="fs-5 ms-2 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }



  const deleteColor = async (e) => {
  await dispatch(deleteAColor(e));
    setOpen(false);
      dispatch(getColors());
  };


  return (
    <>
      <div>
        <h5 className="mb-2 title">Colors</h5>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
          open={open}
          hideModal={hideModal}
          perfomAction={() => {
            deleteColor(colorId);
          }}
          title="Are you sure you want to delete this brand?"
        />
      </div>
    </>
  );
};

export default ColorList;
