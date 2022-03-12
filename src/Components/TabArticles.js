import Tab from "./Tab"

function TabsArticles() {

    const categoryPast = {
        image: '/images/aboutMe/1.png',
        description: 'the~ P A S T ~is your lesson',
    }
    const categoryPresent = {
        image: '/images/aboutMe/2.png',
        description: 'the~ P R E S E N T ~is your gift',
    }
    const categoryFuture = {
        image: '/images/aboutMe/3.png',
        description: 'the~ F U T U R E ~is your motivation',
    }
    return (
        <div className="row">
            <div className="col">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link link-success" id="nav-past-tab" data-bs-toggle="tab" data-bs-target="#nav-past" type="button" role="tab" aria-controls="nav-past" aria-selected="false">Past</button>
                        <button className="nav-link link-success active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">PRESENT</button>
                        <button className="nav-link link-success" id="nav-future-tab" data-bs-toggle="tab" data-bs-target="#nav-future" type="button" role="tab" aria-controls="nav-future" aria-selected="false">futurE</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id="nav-past" role="tabpanel" aria-labelledby="nav-past-tab" style={{ backgroundColor: "black" }}>
                        <Tab image={categoryPast.image} description={categoryPast.description} />
                    </div>
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{ backgroundColor: "black" }}>
                        <Tab image={categoryPresent.image} description={categoryPresent.description} />
                    </div>
                    <div className="tab-pane fade" id="nav-future" role="tabpanel" aria-labelledby="nav-future-tab" style={{ backgroundColor: "black" }}>
                        <Tab image={categoryFuture.image} description={categoryFuture.description} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsArticles