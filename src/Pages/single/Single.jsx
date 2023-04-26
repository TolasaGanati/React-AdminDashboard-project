import React from "react";
import "./Single.css";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="Top">
          <div className="Left">
            <div className="editButton">Edit</div>
            <h1 className="Title">Information</h1>
            <div className="Item">
              <img
                className="itemImg"
                src="https://images.unsplash.com/photo-1681052027179-5471edd589c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Meti Gebo</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">meto@gmail.com</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+251934565500</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">Addis Ababa</span>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ethiopia</span>

                </div>
              </div>
            </div>
          </div>
          <div className="Right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="Bottom">
        <h1 className="Title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Single;
