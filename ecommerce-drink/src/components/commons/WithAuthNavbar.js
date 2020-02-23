import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../mixins/fetchData";
import { setRole } from "../../actions/user.action";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";

export default function WithAuthNavbar() {
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
    return <UserNavbar />;
  }

  return <AdminNavbar />
}
