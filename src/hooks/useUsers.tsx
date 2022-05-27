import { useState, useRef, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { User, UsersReqRes } from "../interfaces/reqRes";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPage = useRef<number>(1);
  useEffect(() => {
    return () => {
      loadUsers();
    };
  }, []);

  const loadUsers = async () => {
    const res = await reqResApi.get<UsersReqRes>("/users", {
      params: {
        page: currentPage.current,
      },
    });
    if (res.data.data.length > 0) {
      setUsers(res.data.data);
    } else {
      currentPage.current--;
      alert("No more users");
    }
  };

  const nextPage = () => {
    currentPage.current++;
    loadUsers();
  };
  const previousPage = () => {
    if (currentPage.current > 1) {
      currentPage.current--;
      loadUsers();
    }
  };
  return {
    users,
    nextPage,
    previousPage,
  };
};
