import React from 'react'
import './Home.css';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = ()=> {
  return (
    <div className='home'>
<SideBar/>
<div className='homeContainer'>
  <NavBar/>
<div className='widgets'>
<Widget type = "user"/>
<Widget type = "order"/>
<Widget type = "earning"/>
<Widget type = "balance"/>
</div>
<div className='charts'>
<Featured/>
<Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
</div>
<div className='listContainer'>
  <div className='listTitle'>Latest Transactions</div>
  <Table/>
</div>
</div>
    </div>
  );
};

export default Home