export const getTaxis = async () => {
    const response =  await fetch(`http://localhost:4000/getTaxis`);
    const foo =  await response.json();
    console.log('foo',foo);
    return foo
}