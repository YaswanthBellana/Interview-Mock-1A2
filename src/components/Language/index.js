import './index.css'

const Language = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li className="item-container">
        <img className="image" src={imageUrl} alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default Language
