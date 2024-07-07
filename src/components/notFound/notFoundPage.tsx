import React from "react"
import { useNavigate } from "react-router-dom";


function NotFoundPage() {

    const navigate = useNavigate();

    const HandleGoBack = () => {
        navigate('/');
    }

    return (
        <div className="not_found_page">
            <h1>Coming soon...</h1> <br />

            <button onClick={HandleGoBack}>Go back to the Home Page </button>

        </div>

    )
}



export default NotFoundPage;