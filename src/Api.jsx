import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Api = () => {
    useEffect(() =>{
        testRest();
    },[])
    const [posts, setPosts] = useState([]);
    const urlGet = (path) => {
        return axios.get("https://testlk.azurewebsites.net" + path);
    }
    const testRest = () => {
        urlGet("/weatherforecast").then((res) => {
            setPosts(res.data);
            console.log(res.data);
        }).catch((err) => console.log(err))
    }
    return(
        <div>
            <h1>Prueba API .net core</h1>
                    <div>
                        <table border="1">
                            <thead> 
                            <tr>
                                    <td>Ciudad</td>
                                    <td>Temperatura C</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((item) => ((
<tr>
                                    <td>{item.summary}</td>
                                    <td>{item.temperatureC}</td>
                                </tr>
                                    )))
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
        </div>
    )
}
export default Api;