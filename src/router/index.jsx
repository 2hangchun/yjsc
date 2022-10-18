import React from "react";
import Home from "../pages/Home";
import LifeService from "@/pages/LifeService";
import Shop from "@/pages/Shop";
import User from "@/pages/User";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import City from "@/pages/City";
import Layout from "@/components/Layout";
import Search from "@/pages/Search";
import Details from "@/pages/Details";
import Login from "@/pages/Login";
import Order from "@/pages/Order";
import NeedAuth from "@/components/NeedAuth";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="life-service" element={<LifeService />} />
          <Route path="shop" element={<Shop />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="city" element={<City />} />
        <Route path="search/:keyword" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="login" element={<Login />} />
        <Route
          path="order"
          element={
            <NeedAuth>
              <Order />
            </NeedAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
