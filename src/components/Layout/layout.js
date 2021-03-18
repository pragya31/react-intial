import React from 'react'
import Footer from '../common/dashboardLayoutComponent/subComponent/footer';
import Header from "../common/dashboardLayoutComponent/subComponent/header";
import Content from "../common/dashboardLayoutComponent/subComponent/content";
import Sidebar from "../common/dashboardLayoutComponent/subComponent/sidebar";

const Layout = () => {
  return (
    <div className="c-app c-default-layout layoutCustom">
      <Sidebar/>
      <div className="c-wrapper alignHeader">
        <Header/>
        <div className="c-body">
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
