function Tab(props) {

    const { image, description } = props

    return (
        <div>
            <div className="row d-flex">
                <div className="col-3">
                    <img src={image} alt="aboutMe" />
                </div>
                <div className="col-9">
                    <p className="text-center" style={{ marginTop: "80px", fontSize: "50px", paddingRight: "70px", color: "white" }}><strong>{description}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Tab
