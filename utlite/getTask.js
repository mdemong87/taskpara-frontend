async function getTask(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
}

export default getTask;