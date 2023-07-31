import './index.css'

const VisitItem = props => {
  const {details, onClickVisit} = props
  const {name, id, isVisited} = details

  const onVisit = () => {
    onClickVisit(id)
  }
  return (
    <>
      <li className="list-items">
        <p className="country">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button type="button" className="button" onClick={onVisit}>
            Visit
          </button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}

export default VisitItem
