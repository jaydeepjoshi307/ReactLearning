import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Reducer/userDataSlice";

function UserDataView() {
  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, []);
  return (
    <div>
      <button onClick={()=>dispatch(fetchUsers()) }> Click to View Data</button>
      {data.loading && <div>Loading...</div>}
      {!data.loading && data.error ? (
        <div>Error: {data.error}</div>
      ) : null}
      {!data.loading && data.users.length ? (
        <ul>
          {data.users.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UserDataView;
