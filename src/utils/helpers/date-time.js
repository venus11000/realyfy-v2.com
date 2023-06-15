import moment from "moment";

export const formatDateIST = (timestamp) => {
  // Convert the timestamp to a Moment.js object
  const momentObj = moment(timestamp);

  // Parse the timestamp in IST format
  const formattedDate = momentObj.format("MMMM Do YYYY, h:mm:ss a");

  return formattedDate;
};
