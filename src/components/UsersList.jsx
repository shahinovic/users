import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/selectedUserSlice";
import Loader from "./Loader";

const UsersList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log("🚀 ~ file: UsersList.jsx:9 ~ UsersList ~ data:", data);

  const [open, setOpen] = useState(false);
  const componentRef = useRef(null);
  const selectedUser = useSelector((state) => state.selectedUser);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSelectUser = (user) => {
    dispatch(selectUser(user));
  };

  // useEffect(() => {
  //   if (selectedUser === null && data?.length > 0) {
  //     dispatch(selectUser(data[0]));
  //   }
  // }, [selectedUser, data, dispatch]);

  return (
    <div
      ref={componentRef}
      onClick={() => setOpen(!open)}
      className={`users-list ${open ? "open" : ""} my-3 ms-2 `}
    >
      <div className="list-group h-100">
        {data?.map((user) => (
          <a
            key={user.id}
            onClick={() => handleSelectUser(user)}
            className={`list-group-item list-group-item-action d-flex align-items-center ${
              open && "gap-3"
            } mb-3 ${user?.id === selectedUser?.id ? "active_user" : ""}`}
          >
            <div className="avatar">
              <img src={user.avatar} alt={user.profile.firstName} />
            </div>
            <div className="user-name">{open && user.profile.firstName}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
