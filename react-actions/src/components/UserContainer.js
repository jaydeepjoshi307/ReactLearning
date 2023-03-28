import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from '../actions/user/userActions'

function UserContainer() {
    const data = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
  )
}

export default UserContainer
