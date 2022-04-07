import moment from 'moment';

const unix_conv = (unix) => {
  const ms = unix * 1000;
  const converted_time = moment(ms).format('hh:mm A ') + 'GMT';

  return converted_time;
};

export default unix_conv;
