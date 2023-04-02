import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Layout from "./layout/layout";

//create router 
export default function Router() {
    return(
        <Routes>
            
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/about" element={<div>this is about</div>}/>
                    <Route path="/blog" element={<div>this is blog</div>}/>
                    <Route path="/color" element={<div>this is color</div>}/>
                    <Route path="/template" element={<div>this is template</div>}/>
                    <Route path="/register" element={<div>this is register</div>}/>
                    <Route path="/login" element={<div>this is login</div>}/>
                </Route>
        </Routes>
    )
}