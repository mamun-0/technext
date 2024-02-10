export function sortByName(arr) {
  return [...arr].sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }
    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
}
export function sortByEmail(arr) {
  return [...arr].sort((a, b) => {
    return a.email.length - b.email.length;
  });
}
export function sortByCompany(arr) {
  return [...arr].sort((a, b) => {
    return a.company.name.localeCompare(b.company.name);
  });
}
