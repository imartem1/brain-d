import React, {useState} from 'react';
import Button from "@mui/material/Button";


const URL_GET_ID = 'http://127.0.0.1:8000/get_id';




function StartPage(
    {
        change
    }
) {
    const [resp, setResp] = useState('')
    
    change(resp)
   
    const succsesfulResponse = (models) => {
        const dataTable = document.querySelector("#datapath")

        for (const [key, value] of Object.entries(models)){
            let linkpathButton = document.createElement("button")
            linkpathButton.type = "button"
            linkpathButton.className = "btn btn-success"
            linkpathButton.textContent = `${key}`
            linkpathButton.onclick = function(){
                setResp(value)
                alert(`Модель ${key} готова к отображению!`)
                //console.log(resp)
            }
            //linkpathButton.addEventListener('onClick', ()=> setResp(value))
            //console.log(value)
            //dataTable.textContent = `${key}`
            
            //console.log('linkpathButton',linkpathButton)
            dataTable.append(linkpathButton)
            
        }
    }
    const getIds = () => {
        const result = fetch(URL_GET_ID, {
            method: 'GET',
        })
        result
            .then((response) => {
                
                return response.json()
            })
            .then((models) => {
                succsesfulResponse(models)
            })
            .catch((error) => {
                console.log('error', error);
            })
    
    }
    
    
    return(
        <div className = "idsData">
            <div>
                <Button onClick={() =>getIds()} variant="contained" color="success" >Отправить запрос для получения id</Button>
            </div>
            <div >
                <div id="datapath"></div>
            </div>
        </div>
    )
}

export default StartPage;