export const getTaxis = async (latitude: number, longitude: number) => {
    const response =  await fetch(`http://localhost:4000/getTaxis?latitude=${latitude}&longitude=${longitude}`);
    const responseJson =  await response.json();
    return responseJson;
}