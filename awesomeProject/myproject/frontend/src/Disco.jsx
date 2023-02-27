
import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal, Avatar } from "@nextui-org/react";
import { useContext, useEffect, useState ,useMemo} from 'react'
import { GraficaDisco } from "./Linechart";
import { ObtenerDisco } from "../wailsjs/go/main/App";
export const Disco = () => {
    const [resultText, setResultText] = useState("");
    const [arrDisco,SetArrDisco]=useState([])
    const updateResultText = (result) => setResultText(result);

    useEffect(() => {


        const interval = setInterval(()=>{
            disco()
            SetArrDisco([...arrDisco,resultText])
            if(arrDisco.length===10){
                SetArrDisco([])
            }


        },3000)

        return ()=>clearInterval(interval)
    },[arrDisco]);
    function disco() {
        ObtenerDisco().then(updateResultText);
    }
    const labels = ['1', '2', '3', '4', '5', '6', '7','8','9','10'];
    

     const data = {
        labels,
        datasets: [
          {
            label: 'Utilizacion del disco 1',
            data: arrDisco,
            borderColor: 'rgb(36, 113, 163)',
            backgroundColor: 'rgba(247, 249, 249 ,0.5)',
          }
      
        ],
      };
    return (
    
        <div >
                  
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
                    Porcentaje de Disco :{resultText}%

                    

                </Text> 
                </Row>

             <Row justify="space-around" align="center">

              </Row>

            
             </Grid>
             <GraficaDisco data={data}></GraficaDisco>


                    

        </div>
    );
}
