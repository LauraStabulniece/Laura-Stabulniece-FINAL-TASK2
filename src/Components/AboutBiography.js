import getAboutMe from "../API/getAboutMe"

function AboutBiography() {

    const categories = getAboutMe()

    const categoriesList = categories.map((category, index) => {

        return (
            <div>
                <div key={index}>
               
                    <div
                        className="tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="nav-tab"
                    >
                        <div className="row">

                            <div className="col">
                                <img src={category.image} style={{ paddingRight: "15px" }} />
                            </div>
                            <div className="col">
                                {category.description}
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        )
    })

    return (
        <div>
            {categoriesList}
        </div>
    )
}

export default AboutBiography


