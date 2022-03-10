function RegisterFields(props) {

    function form_submit_register() {
        props.setRegister(true)
    }
    return (
        <div>
            <form onSubmit={() => form_submit_register()}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="images/register.png" className="img-fluid rounded-circle" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" id="username" placeholder="username*" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="password" className="pass" id="pass" placeholder="password*" required minLength="8"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="password" className="re_pass" id="re_pass" placeholder="repeat your password*" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" id="firstName" placeholder="first name*" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" id="lastName" placeholder="last name"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-dark btn-submit">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>






    )
}

export default RegisterFields