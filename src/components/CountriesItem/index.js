import './index.css'

const CountriesItem = props => {
  const {details, onClickRemove} = props
  const {imageUrl, name, id} = details

  const onRemove = () => {
    onClickRemove(id)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-delete">
        <p className="name">{name}</p>
        <button type="button" className="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountriesItem
