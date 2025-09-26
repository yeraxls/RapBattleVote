export function isFutureDate(dateString) {
    const inputDate = new Date(dateString);
    return inputDate > new Date();
}