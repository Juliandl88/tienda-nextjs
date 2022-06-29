export async function getItems(){
    const request = await fetch("http://localhost:3000/api/items");
    const items = await request.json();

    return items; // Me devuelve los resultados del json que se usa como base de datos
}

export async function getLatestItems(){
    const items = await getItems();

    return items.slice(0,3); // Me da los tres primeros resultados, el 0, el 1 y el 2
}