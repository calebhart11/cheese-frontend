import { Form, Link, useLoaderData } from "react-router-dom";


function Index(props){
    const cheeses = useLoaderData();

    return (
        <div className="index">   
            <h2>Create A Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Add Cheese Name"/>
                <input type="input" name="image" placeholder="Insert Cheese Picture"/>
                <input type="input" name="type" placeholder="Add Cheese Type"/>
                <input type="submit" value="Create A Cheese"/>

            </Form>

            <h2>Cheeses</h2>
            {cheeses.map((cheese, index) => (
                <div className="container" key={index}>
                    <Link to={`/${cheese._id}`} className="cheese">
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name}/>
                    <h3>{cheese.type}</h3>
        
                </div>
            ))}
        </div>
    )
}

export default Index;