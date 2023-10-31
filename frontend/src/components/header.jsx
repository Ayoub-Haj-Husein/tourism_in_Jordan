import React from "react";
import NAVBAR from "./narbar"
import { Link } from "react-router-dom";


function HEADER(){
    return(
        
        <div>
            <NAVBAR/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 class="text-left text-4xl ml-10 h-3/6">Tourism, The best traveling option</h1>
            <div class="flex flex-row  ">
                <h1 class="text-left text-2xl ml-10 mt-6 mb-10"> Submit your blog?</h1>
                <Link to="/uploadblog"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5 h-3/6	" >Click Here</button></Link>
            </div>
            <br></br>
        </div>

    );
}

export default HEADER;