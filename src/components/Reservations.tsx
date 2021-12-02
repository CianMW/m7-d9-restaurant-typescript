import { format, parseISO } from "date-fns"
import { useEffect, useState } from "react"
import { Alert, ListGroup, Spinner } from "react-bootstrap"
import { IReservation } from "../Interfaces"







const Reservations = () => {
    const [reservations, setReservations] = useState<IReservation[] >([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
  
    useEffect(() => {
      fetchReservations()
    }, [])
  
    const fetchReservations = async () => {
      try {
        let response  = await fetch(
          'https://striveschool-api.herokuapp.com/api/reservation'
        )
  
        if (response.ok) {
          let data:IReservation[] = await response.json()
          setReservations(data)
          setIsLoading(false)
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
      }
    }
  
    return (
      <>
        <h2 className='mt-4'>BOOKED TABLES</h2>
        {isLoading && <Spinner animation='border' variant='info' />}
        {isError ? (
          <Alert variant='danger'>Something went wrong :</Alert>
        ) : (
          <ListGroup className='mb-5'>
            {reservations.length > 1 && reservations.map((res: IReservation) => (
              <ListGroup.Item key={res._id}>
                {res.name} for {res.numberOfPeople} on{' '}
                {format(parseISO(res.dateTime), 'EEEE, MMM. do - HH:mm')}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </>
    )
  }
  
  export default Reservations