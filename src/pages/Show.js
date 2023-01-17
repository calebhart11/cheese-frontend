import {Form, useLoaderData} from "react-router-dom"
function Show(props){
    const cheese = useLoaderData()
    return(
       <div className="show">
            <h1>{cheese.name}</h1>
            <h2>{cheese.type}</h2>
            <img src ={cheese.image} alt={cheese.name}/>
            <h2>Update {cheese.name}</h2>

            <Form action={`/update/${cheese._id}`} method= "post">
                <input defaultValue={cheese.name} type="input" name="name" placeholder="Cheese Name"/>
                <input defaultValue={cheese.image} type="input" name="image" placeholder="Cheese Image"/>
                <input defaultValue={cheese.type} type="input" name="type" placeholder="Cheese Type"/>
                <input type="submit" value={`update ${cheese.name}`}/>
            </Form>
            <h2>Delete {cheese.name}</h2>
            <Form action={`/delete/${cheese._id}`} method= "post">
                <input type="submit" value={`delete ${cheese.name}`}/>
            </Form>

        </div>
    )
}
export default Show