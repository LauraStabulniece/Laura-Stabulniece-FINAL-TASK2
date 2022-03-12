import { Link } from "react-router-dom"

function RegisterFields(props) {

    function formSubmitRegister() {
   
        props.setRegister(true)
    }
    return (
        <div>
            <form onSubmit={() =>formSubmitRegister()}>

            <div className="container text-center" style={{ marginBottom: "100px", padding: "50px" }}>


<h1 style={{ backgroundColor: "white", color: "green", marginLeft: "400px", marginRight: "400px" }}>R E G I S T E R</h1>

<div className="row" style={{ margin: "20px" }}>
    <div className="col">
        <img src="images/register.png" className="img-fluid rounded-circle" alt=""/>
    </div>
</div>
<div className="row m-1">
    <div className="col">
        <input type="text id" id="username" placeholder="username*" required minLength="5"></input>
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
        <select className="text-muted" id="country">
        <option selected value="country">country*</option>
        <option value="Wonderland">Wonderland</option>
        <option value="Dreams">Dreams</option>
        <option value="Disneyland">Disneyland</option>
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
    {/* <button className="btn btn-info btn-submit">Register</button> */}
    {/* <button className="btn btn-info btn-submit">Register <Link className=" text-decoration-none" style={{ color: "white" }} to="/thanks"> <button className="btn btn-info btn-submit"></button></Link></button> */}
        <button className="btn btn-info btn-submit" style={{ color: "white" }}><Link to="/thanks" className=" text-decoration-none"></Link> Register</button>
    </div>
</div>
</div>
</form>
</div>

)
}

export default RegisterFields