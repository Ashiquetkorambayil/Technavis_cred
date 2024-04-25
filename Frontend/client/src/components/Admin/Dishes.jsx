import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import { Button, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { Link } from "react-router-dom";
import SmallNav from "./SmallNav";

function Dishes() {
  const backendUrl = process.env.REACT_APP_MACHINE_TEST_1_BACKEND_URL;
  const [uid, setUid] = useState("");
  const [show, setShow] = useState(false);
  const [on, setOn] = useState(false);
  const [dishes, setDishes] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [categotries, setCategories] = useState("");
  const [getCategories, setGetCategories] = useState([]);
  const [getDishes, setGetDishes] = useState([]);

  const [getDishesById, setGetDishesById] = useState({
    dishes: "",
    price: "",
  });
  console.log(getDishesById, "the dishes by id");
  const [getCategoriesById, setGetCategoriesById] = useState("");
  const [file, setFile] = useState("");

  const handleClose = () => setShow(false);

  const handleOff = () => setOn(false);

  const handleShow = async () => {
    setShow(true);
    try {
      const response = await axios.get(`${backendUrl}/admin/getcategories`);
      const data = response.data;
      setGetCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${backendUrl}/admin/getcategories`);
        const data = response.data;
        setGetCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, [backendUrl]);

  const postCategories = async () => {
    const formdata = new FormData();
    formdata.append("dishes", dishes);
    formdata.append("categories", categotries);
    formdata.append("price", price);
    formdata.append("image", image);
    try {
      await axios.post(`${backendUrl}/admin/postdishes`, formdata);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${backendUrl}/admin/getdishes`);
        const data = response.data;
        // console.log(response.data,"heeee")
        setGetDishes(data);
        // console.log(data,"dishes dateaaaa")
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, [backendUrl]);

  const handleOn = async (id) => {
    setOn(true);
    setUid(id);

    try {
      const response = await axios.get(
        `${backendUrl}/admin/getdishesbyid/${id}`
      );
      const data = response.data;
      setGetDishesById({
        dishes: data.dishes,
        price: data.price,
      });
      setGetCategoriesById(data.categories);
      console.log(data.price, "this is data");
    } catch (err) {
      console.log(err);
    }
  };
  // const handleUpdateChange = (e)=>{
  //     const {name, value} = e.target
  //     getDishesById((prevstate)=>({...prevstate, [name]:value}))

  // }

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setGetDishesById((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateCategories = async () => {
    const formdata = new FormData();
    formdata.append("dishes", getDishesById.dishes);
    formdata.append("price", getDishesById.price);
    formdata.append("categories", getCategoriesById);
    formdata.append("image", file);
    try {
      await axios.put(`${backendUrl}/admin/putdishes/${uid}`, formdata);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const windowConfirmation = window.confirm(
      "Are you sure to Delete this item"
    );
    if (windowConfirmation) {
      try {
        await axios.delete(`${backendUrl}/admin/deletedishes/${id}`);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <SmallNav />
      <SideNav />
      <div className=" container main-contenet">
        <div className="pl-3 row main-row">
          <div
            className="col-12 my-sm-0 my-md-5 p-3 montserrat-400"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="text-black">Items</h3>
            {/* <Button className='add_btn' variant="success">Add</Button>{' '} */}
            <Tooltip className="add_btn" title="Add">
              <Link>
                <IoIosAddCircle className="add_btn" onClick={handleShow} />
              </Link>
            </Tooltip>
          </div>
          {getDishes.map((items, index) => (
            <div
              key={index}
              className="col-12 my-1 p-2 montserrat-400 item_div"
            >
              <div className="avtar">
                <img
                  className="avatar"
                  src={`${backendUrl}/images/${items.image}`}
                  alt="pic"
                />
              </div>
              <div className="contents_items">
                <h5 className="text-black item-text">{items.dishes}</h5>
                <h5 className="text-black item-text">₹ {items.price}</h5>
                <h5 className="text-black item-text">
                  {
                    getCategories.find((item) => item._id === items.categories)
                      ?.categories
                  }
                </h5>
              </div>
              <div className="icons_items">
                <Tooltip title="Edit">
                  <Link>
                    <FiEdit
                      style={{ color: "black", cursor: "pointer" }}
                      onClick={() => handleOn(items._id)}
                    />
                  </Link>
                </Tooltip>
                <Tooltip title="Delete">
                  <Link>
                    <MdDelete
                      style={{ color: "black", cursor: "pointer" }}
                      onClick={() => handleDelete(items._id)}
                    />
                  </Link>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal className="montserrat-400" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Dishes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "100%" }}
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-3"
          />
          <input
            placeholder="Dish"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => setDishes(e.target.value)}
          />
          <select
            onChange={(e) => setCategories(e.target.value)}
            value={categotries}
            className="my-3"
            style={{ width: "100%" }}
            name=""
            id=""
          >
            <option value="">Select..</option>
            {getCategories.map((items, index) => (
              <option key={index} value={items._id}>
                {items.categories}
              </option>
            ))}
          </select>
          <input
            placeholder="Price"
            type="number"
            style={{ width: "100%" }}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={postCategories}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={on} onHide={handleOff} className="montserrat-400">
        <Modal.Header closeButton>
          <Modal.Title>Edit Dishes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{ width: "100%", margin: "10px" }}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            value={getDishesById.dishes}
            name="dishes"
            type="text"
            style={{ width: "100%" }}
            onChange={(e) => handleUpdateChange(e)}
          />

          <select
            onChange={(e) => setGetCategoriesById(e.target.value)}
            value={getCategoriesById}
            className="my-3"
            style={{ width: "100%" }}
            name=""
            id=""
          >
            <option value="">Select..</option>
            {getCategories.map((items, index) => (
              <option key={index} value={items._id}>
                {items.categories}
              </option>
            ))}
          </select>

          <input
            value={getDishesById.price}
            name="price"
            type="number"
            style={{ width: "100%" }}
            onChange={(e) => handleUpdateChange(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOff}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCategories}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dishes;
