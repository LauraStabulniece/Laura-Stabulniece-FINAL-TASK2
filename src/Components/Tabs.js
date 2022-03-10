function Tabs() {
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
          <div className="tab-pane fade" id="nav-past" role="tabpanel" aria-labelledby="nav-past-tab" style={{backgroundColor: "black"}}>
            <div className="row d-flex">
              <div className="col-3">
                <img src="/images/aboutMe/1.png" alt="aboutMe" />
              </div>
              <div className="col-9">
              <p className="text-center" style={{marginTop: "80px", fontSize: "50px", paddingRight: "70px", color: "white"}}><strong>the~ P A S T ~is your lesson</strong></p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{backgroundColor: "black"}}>
            <div className="row d-flex">
            <div className="col-3">

                <img src="/images/aboutMe/2.png" alt="aboutMe" />
              </div>
              <div className="col-9">
                <p className="text-center" style={{marginTop: "80px", fontSize: "50px", paddingRight: "70px", color: "white"}}><strong>the~ P R E S E N T ~is your gift</strong></p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-future" role="tabpanel" aria-labelledby="nav-future-tab" style={{backgroundColor: "black"}}>
            <div className="row d-flex">
            <div className="col-3">

                <img src="/images/aboutMe/3.png" alt="aboutMe" />
              </div>
              <div className="col-9">
              <p className="text-center" style={{marginTop: "80px", fontSize: "50px", paddingRight: "70px", color: "white"}}><strong>the~ F U T U R E ~is your motivation</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tabs