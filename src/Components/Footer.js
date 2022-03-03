import SocialIcons from "./SocialIcons";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top" style={{backgroundColor: "rgba(97, 126, 122, 0.466)"}}>
            <div className="col-md-4 d-flex">
                <span className="text-white" style={{paddingLeft: "120px"}}>&copy; 2022 Copyright: Laura Stabulniece</span>
            </div>
            <ul className="socIcon col-md-4 justify-content-end list-unstyled d-flex" style={{paddingTop: "20px", paddingRight: "100px"}}>
                <SocialIcons />
            </ul>
        </footer>
    )
}

export default Footer;
