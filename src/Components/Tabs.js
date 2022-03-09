function Tabs() {
    return (
<nav>
<div className="nav nav-tabs" id="nav-tab" role="tablist">
<button
    className="nav-link"
    id="nav-address-tab"
    data-bs-toggle="tab"
    data-bs-target="#nav-address"
    type="button"
    role="tab"
    aria-controls="nav-address"
    aria-selected="false"
  >
    Past
  </button>
  <button
    className="nav-link active"
    id="nav-home-tab"
    data-bs-toggle="tab"
    data-bs-target="#nav-home"
    type="button"
    role="tab"
    aria-controls="nav-home"
    aria-selected="true"
  >
    present
  </button>
  <button
    className="nav-link"
    id="nav-summary-tab"
    data-bs-toggle="tab"
    data-bs-target="#nav-summary"
    type="button"
    role="tab"
    aria-controls="nav-summary"
    aria-selected="false"
  >
    futurE
  </button>
</div>
</nav>
     )
    }
    export default Tabs