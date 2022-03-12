import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" style={{fontSize: "60px", color: "rgba(57, 12, 99, 0.596)"}} />
      <h3 className="pin-text" style={{color: "rgba(97, 21, 87, 0.541)"}}>{text}</h3>
    </div>
  )

  export default LocationPin