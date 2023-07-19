import { AnyAction } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./SelectorFilter.module.scss";
import { setSearch } from "../../store/filters/filtersSlice";
import { clearPhotos, fetchPhotos } from "../../store/photos/photosSlice";

export interface ISelectorProps {
  state: string;
  name: string;
  setterHandler: any;
  list: string[];
}

export const SelectorFilter = ({
  state,
  name,
  setterHandler,
  list,
}: ISelectorProps) => {
  const [showList, setShowList] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (value: string) => {
    console.log("work", value);
    dispatch(setterHandler(value));
  };

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => setShowList((prev) => !prev)}
      >
        <div className={styles.name}>
          <span>{name}</span>
        </div>
        {showList && (
          <div className={styles.list}>
            {list &&
              list.map((item) => (
                <div
                  className={styles.item}
                  style={{ backgroundColor: item === state ? "beige" : "" }}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
