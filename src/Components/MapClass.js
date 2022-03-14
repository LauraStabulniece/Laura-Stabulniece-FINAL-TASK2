import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'


class MapClass extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="col">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            style={{height: "300px"}}
          >
            <LocationPin
              lat={56.2850990}
              lng={26.7210118}
              text={"EartH"}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
MapClass.defaultProps = {
  center: { lat: 56.2850990, lng: 26.7210118 },
  zoom: 11
}

export default MapClass