import './FlightData.css'

const FlightData = (data) => {
  return (
    <div className='wrapper'>
      <div className='table'>
        <div className='row header'>
          <div className='cell'>Departure Airport</div>
          <div className='cell'>Arrival Airport</div>
          <div className='cell'>Time</div>
          <div className='cell'>Arrival Count</div>
          <div className='cell'>Departure Count</div>
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
                {info.lastSeen}
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
