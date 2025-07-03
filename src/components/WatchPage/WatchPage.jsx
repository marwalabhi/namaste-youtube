import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";

import { closeMenu } from "../../utils/slices/appSlice";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const category = searchParams.get("v");

  console.log(category, "query parameters");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <div>watch page</div>
    </div>
  );
};

export default WatchPage;
