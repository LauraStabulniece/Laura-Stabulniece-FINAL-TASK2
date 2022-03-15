import { Link } from "react-router-dom"
import React from 'react'
import RegisterForm from "../Components/RegisterForm"

function Register() {
    return (
        <div>
            <div container="true">
                <div className="row">
                    <div className="col-sm-12 my-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item nav-link">
                                    <Link className="link-secondary text-decoration-none" to="/"><small>home</small></Link>
                                </li>
                                <li className="breadcrumb-item active nav-link text-success" aria-current="page"><strong><small>R E G I S T E R</small></strong></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div style={{ backgroundColor: "rgba(129, 235, 208, 0.39)" }}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register
