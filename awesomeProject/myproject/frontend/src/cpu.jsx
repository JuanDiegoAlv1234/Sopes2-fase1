
import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal, Avatar } from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react'
import { GraficaCPU } from "./LInechartCPU";
import { ObtenerCPU } from "../wailsjs/go/main/App";
export const CPU = () => {


    const [resultText, setResultText] = useState("");
    const [arrCPU,SetArrCPU]=useState([])
    const updateResultText = (result) => setResultText(result);

    useEffect(() => {


        const interval = setInterval(()=>{
            GETcPU()
            SetArrCPU([...arrCPU,resultText])
            if(arrCPU.length===10){
                SetArrCPU([])
            }


        },3000)

        return ()=>clearInterval(interval)
    },[arrCPU]);
    function GETcPU() {
        ObtenerCPU().then(updateResultText);
    }
    const labels = ['1', '2', '3', '4', '5', '6', '7','8','9','10'];
    

     const data = {
        labels,
        datasets: [
          {
            label: 'Utilizacion del CPU 1',
            data: arrCPU,
            borderColor: 'rgb(36, 113, 163)',
            backgroundColor: 'rgba(247, 249, 249 ,0.5)',
          }
      
        ],
      };
    return (
    
      <div>
            <Grid xs={12} sm={4}>
            <Row justify="space-around" align="center">

<Text
    h1
    size={20}
    css={{
        textGradient: "45deg, white -20%, white 100%",
    }}
    weight="bold"
>
    Porcentaje de CPU :{resultText}%

    

</Text> 
</Row>

    
</Grid>
<GraficaCPU data={data}></GraficaCPU> 

        </div>
    );
}
