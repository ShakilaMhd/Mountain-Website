import React from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import HomePage from "pages/HomePage";
import DashboardPage from "pages/DashboardPage";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import PageNotFound from "pages/404";
import { getProfile } from "../services/user";

function Router() {
    const {data, isLoading, error} = useQuery({queryKey: ["profile"], queryFn:getProfile})
    console.log({data, isLoading, error});
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
