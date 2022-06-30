import {getItems} from "../services/itemService";

export async function getPathsFromIds(){
    const items = await getItems();

    const ids = items.map(item => {
        return {
            params:{
                id: item.id.toString(), //cada Id de los objetos
            }
        }
    });

    return ids;
}

export async function getItemData(id){
    const items = await getItems();

    const products = items.find((item => item.id.toString() === id));

    return {
        id: id,
        data: products, 
    }
}