import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteABlogCat,
  getBlogCategory,
  resetState,
} from "../features/blogcategory/blogCategorySlice";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../Components/CustomModal";
import { FiEdit } from "react-icons/fi";

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
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCategoryList = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setBlogCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogCatId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogCategory());
  }, []);
  const blogcategorystate = useSelector((state) => state.bCategory.bCategories);
  const data1 = [];
  for (let i = 0; i < blogcategorystate.length; i++) {
    data1.push({
      key: i + 1,
      name: blogcategorystate[i].title,
      action: (
        <>
          <Link
            to={`/admin/blog-category/${blogcategorystate[i]._id}`}
            className="fs-3"
          >
            <FiEdit />
          </Link>
          <button
            onClick={() => showModal(blogcategorystate[i]._id)}
            className="ms-3 text-danger bg-transparent border-0 fs-3"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const deleteBlogcategory = (e) => {
    dispatch(deleteABlogCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogCategory());
    }, 500);
  };
  

  return (
    <>
      <div>
        <h5 className="mb-2 title title">Blog Category</h5>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
        <CustomModal
          open={open}
          hideModal={hideModal}
          perfomAction={() => {
            deleteBlogcategory(blogCatId);
          }}
          title="Are You sure you want to delete this Blog"
        />
      </div>
    </>
  );
};

export default BlogCategoryList;
