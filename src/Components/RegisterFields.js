import { Link } from "react-router-dom"

function RegisterFields(props) {

    function form_submit_register() {
        props.setRegister(true)
    }
    return (
        <div>
            <form onSubmit={() => form_submit_register()}>

                <div className="container text-center" style={{ marginBottom: "100px", padding: "50px" }}>


                    <h1 style={{ backgroundColor: "white", color: "green", marginLeft: "400px", marginRight: "400px" }}>R E G I S T E R</h1>

                    <div className="row" style={{ margin: "20px" }}>
                        <div className="col">
                            <img src="images/register.png" className="img-fluid rounded-circle" />
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <input type="text" id="username" placeholder="username*" required minLength="5"></input>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <input type="password" className="pass" id="pass" placeholder="password*" required minLength="8"></input>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <input type="password" className="re_pass" id="re_pass" placeholder="repeat your password*" required></input>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <input type="text" id="firstName" placeholder="first name*" required></input>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                            <input type="text" id="lastName" placeholder="last name"></input>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col">
                        <label for="country" class="form-label"></label>
                            <select className="text-muted" id="country" required>
                                <option selected disabled value>country*</option>
                                <option>Wonderland</option>
                                <option>Dreams</option>
                                <option>Disneyland</option>
                            </select>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <input className="form-check-input" type="checkbox" style={{ marginRight: "10px" }} value="" id="form-check" required></input>
                            <label type="form-check" className="form-check-label">AGREE that EARTH without A R T is just “eh” *</label>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col">
                            <button className="btn btn-info btn-submit">Register <Link className=" text-decoration-none" style={{ color: "white" }} to="/thanks"> <button className="btn btn-info btn-submit"></button></Link></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default RegisterFields