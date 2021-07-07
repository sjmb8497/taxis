export const getTaxis = async (latitude: number, longitude: number, count: number) => {
    const response =  await fetch(`http://localhost:4000/getTaxis?latitude=${latitude}&longitude=${longitude}&count=${count}`);
    const responseJson =  await response.json();
    return responseJson;
}