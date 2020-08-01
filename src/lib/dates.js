import moment from "moment";

export function formatDate(date) {
  return moment.unix(date / 1000).format("L");
}
