import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { createAction, updateAction, deleteAction } from "./actions";
import {cheesesLoader, cheeseLoader} from "./loaders"
import App from "./App";
import Index from "./pages/Index"
import Show from "./pages/Show"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element = {<App/>}>
            <Route path="" element = {<Index/>} loader ={cheesesLoader}/>
            <Route path=":id" element = {<Show/>} loader ={cheeseLoader}/>
            {/* <Route path=":id" element = {<Show/>}/> */}
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>


        </Route>
    )
)

export default router