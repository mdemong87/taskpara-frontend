function convertToLocalDate(timestamp) {
    const date = new Date(timestamp);
    const localDateString = date.toLocaleDateString(); // Convert to local date string
    const localTimeString = date.toLocaleTimeString(); // Convert to local time string
    return `${localDateString}`;
}

export default convertToLocalDate;