import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./mixins/fetchData";
import { setRole } from "./actions/user.action";
import MessageAuth from "./MessageAuth";

export default function WithAuth(Admin) {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  const userExist = JSON.parse(sessionStorage.getItem("users"));
  const userId = userExist ? userExist.id : null;

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        const res = await fetchData("users", { id: userId });

        dispatch(setRole(res.role));
      };

      fetchUser();
    }
  }, [userId, dispatch]);

  if (appState.users.role === 0) {
    return <MessageAuth />;
  }

  return (
    <React.Fragment>
      <Admin />
    </React.Fragment>
  )
}
