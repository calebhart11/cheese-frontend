const URL = "https://cheese-api-m4ti.onrender.com"

export const cheesesLoader = async () => {
     const response = await fetch(URL + "/cheeses")
    const cheeses = await response.json()
    return cheeses;
}

export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + "/cheeses/" + params.id)
    const cheese = await response.json()
    return cheese
}