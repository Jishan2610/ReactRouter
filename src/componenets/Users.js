import React from 'react'
//Search String Parameters 
import { useSearchParams } from 'react-router-dom';

function Users() {
    const [searchParams,setSearchParams]=useSearchParams();
    const showActiveUsers=searchParams.get('filter')==='active';
  return (
    <div>
        <ul>
            <li><h3>User 1</h3></li>
            <li><h3>User 2</h3></li>
            <li><h3>User 3</h3></li>
        </ul>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filters</button>
        {
            showActiveUsers?<h3>Showing Active Users</h3>:<h3>Showing All Users</h3>
        }
    </div>
    
  )
}

export default Users