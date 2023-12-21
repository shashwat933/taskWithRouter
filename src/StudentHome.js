import React from 'react'
import { Link } from 'react-router-dom';

const StudentHome = () => {
    const userName = "myUserName";
    const telephone = 123456789;
   
    return (
        <div>
                <Link to="/student-detail" state={{ userName , telephone }}>
                    <button type="button">
                        Click Me!
                    </button>
                </Link>

        </div>
    )
}

export default StudentHome