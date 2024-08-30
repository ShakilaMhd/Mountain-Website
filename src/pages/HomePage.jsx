import React from "react";
import SideBar from "../components/templates/SideBar";
import Main from "../components/templates/Main";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/user";
import Loader from "../module/Loader";
import { getCategory } from "../services/admin";
const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(["post-list"], getAllPosts);
  const { data: categories, isLoading: categoryLoading } = useQuery(["get-categories"], getCategory);
  console.log(categories);
  // console.log({ isLoading, data });
  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
