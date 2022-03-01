import SocialIcons from "./SocialIcons";

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top" style={{backgroundColor: "rgba(97, 126, 122, 0.466)", paddingLeft: "100px"}}>
            <div className="col-md-4 d-flex align-items-center m-3">
                <span className="text-white">&copy; 2022 Copyright: Laura Stabulniece</span>
            </div>
            <ul className="socIcon col-md-4 justify-content-end list-unstyled d-flex m-1">
                <SocialIcons />
            </ul>
        </footer>
    )
}

export default Footer;
