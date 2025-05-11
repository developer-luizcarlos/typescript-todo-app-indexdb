export function getCurrentDate() {
    const date = new Date();
    const day = date.getDate();
    const dayOfTheWeek = getWeekDay(date);
    const month = getMonth(date);
    const year = date.getFullYear();
    return { day, dayOfTheWeek, month, year };
}
function getMonth(date) {
    switch (date.getMonth()) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Avr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
        default:
            return "Jan";
    }
}
function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Sunday";
    }
}
getCurrentDate();
