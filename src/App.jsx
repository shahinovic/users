import { useDispatch, useSelector } from "react-redux";
import { UsersList, UserDetails } from "./components";
import Loader from "./components/Loader";
import { useEffect } from "react";
import axios from "axios";
import { setUsers } from "./features/dataSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const API_BASE_URL = "https://602e7c2c4410730017c50b9d.mockapi.io";

    const api = axios.create({
      baseURL: API_BASE_URL,
    });
    const fetchUsers = async () => {
      const response = await api.get("/users");
      dispatch(setUsers(response.data));
    };
    fetchUsers();
  }, [dispatch]);

  const data = useSelector((state) => state.data);

  if (data.length < 1) {
    return <Loader />;
  }

  return (
    <div className="App d-flex">
      <UsersList />
      <UserDetails />
    </div>
  );
};

export default App;
