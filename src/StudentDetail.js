import React from 'react'
import { useLocation, Link } from 'react-router-dom'
const StudentDetail = () => {
  const location = useLocation()
  const { userName, telephone } = location.state;
  return (

    <>
      <div>
        <h1>Student Details</h1>

        <h1>{userName}</h1>
        <h1>{telephone}</h1>


      </div>
      <Link to="/">
        <button>Click</button>
      </Link>
    </>
  )
}

export default StudentDetail