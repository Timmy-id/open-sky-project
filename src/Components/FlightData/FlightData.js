import './FlightData.css';
import unix_conv from '../../services/formatDate';

const FlightData = (data) => {
  return (
    <div className='wrapper'>
      <div className='table'>
        <div className='row header'>
          <div className='cell'>Dep Airport</div>
          <div className='cell'>Arr Airport</div>
          <div className='cell'>Time</div>
          <div className='cell'>Arr Candidates Count</div>
          <div className='cell'>Dep Candidates Count</div>
        </div>

        {data.map((info, index) => {
          return (
            <div className='row' key={index}>
              <div className='cell' data-title='Departure Airport'>
                {info.estDepartureAirport || '-'}
              </div>
              <div className='cell' data-title='Arrival Airport'>
                {info.estArrivalAirport || '-'}
              </div>
              <div className='cell' data-title='Time'>
                {unix_conv(info.lastSeen)}
              </div>
              <div className='cell' data-title='Arrival Count'>
                {info.arrivalAirportCandidatesCount}
              </div>
              <div className='cell' data-title='Departure Count'>
                {info.departureAirportCandidatesCount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlightData;
