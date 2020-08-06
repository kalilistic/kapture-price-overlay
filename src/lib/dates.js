import moment from "moment";

export function formatDate(date) {
  return moment.unix(date / 1000).format("L");
}

export function calcDays(date) {
  const now = moment(new Date(), "L");
  const previous = moment(date);
  return now.diff(previous, "days");
}
