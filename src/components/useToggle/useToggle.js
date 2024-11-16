import React, { useState } from "react";

export const useToggle = (props) => {
  const { arr, index } = props;
  // state variable to store index
  const [curr_index, setCurrIndex] = useState(index);
  const toggle = () => {
    if (curr_index + 1 === arr.length) {
      setCurrIndex(0);
    } else {
      setCurrIndex(curr_index + 1);
    }
  };
  return [arr[curr_index], toggle];
};
