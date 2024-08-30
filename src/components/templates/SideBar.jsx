import React from "react";
import { getCategory } from "../../services/admin";
import { useQuery } from "@tanstack/react-query";
import styles from "./SideBar.module.css";

function SideBar({categories}) {
  // const { data } = useQuery(["get-categories"], getCategory);
  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        {categories?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} alt="" />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
