import { useParams } from 'react-router-dom'

function Accomodation() {
    const { accNumber } = useParams()

    return (
        <div>
        <h1>Logement {accNumber}</h1>
        </div>
    )
}

export default Accomodation