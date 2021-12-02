import ListGroup from 'react-bootstrap/ListGroup'
import { IComment, IPastaDish } from '../Interfaces'

interface IDrilledComment {
    selectedDish : IPastaDish | undefined 
}
const DishComments = (props:IDrilledComment) => {

    return(

          <ListGroup>
    {props.selectedDish ? (
     props.selectedDish.comments.map((c:IComment) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
    )

}

export default DishComments
