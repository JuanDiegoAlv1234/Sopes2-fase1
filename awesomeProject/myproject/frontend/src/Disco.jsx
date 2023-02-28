
import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal, Avatar } from "@nextui-org/react";
import { useContext, useEffect, useState ,useMemo} from 'react'
import { GraficaDisco } from "./Linechart";
import { ObtenerDisco } from "../wailsjs/go/main/App";
import { ObtenerDiscoUSO } from "../wailsjs/go/main/App";
import { ObtenerTotalDisco } from "../wailsjs/go/main/App";
import { ObtenerDiscoLibre } from "../wailsjs/go/main/App";
export const Disco = () => {
    const [resultText, setResultText] = useState("");
    const updateResultText = (result) => setResultText(result);

    const updateResulTotalDisco = (result) => setTotalDisco(result);
    const updateResulDiscoUso = (result) => setDiscoUSo(result);
    const updateDIscoLIbre = (result) => setTotalDiscoLibre(result);
    
    const [DiscoLibre, setTotalDiscoLibre] = useState("");
    const [TotalDisco, setTotalDisco] = useState("");
    const [arrDisco,SetArrDisco]=useState([])
    const [discoUSO, setDiscoUSo] = useState("");
  
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
    function Totaldisco() {
        
    }
    function disco() {
        ObtenerDisco().then(updateResultText);
        ObtenerTotalDisco().then(updateResulTotalDisco);
        ObtenerDiscoUSO().then(updateResulDiscoUso)
        ObtenerDiscoLibre().then(updateDIscoLIbre)
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
             <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, white -20%, white 100%",
                    }}
                    weight="bold"
                >
                    Total de Disco :{TotalDisco}mb
                 
                    </Text>

              </Row>


              <Row justify="space-around" align="center">
             <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, white -20%, white 100%",
                    }}
                    weight="bold"
                >
                    Almacenamiento utilizado   en el Disco :{discoUSO}mb
                 
                    </Text>

              </Row>
              <Row justify="space-around" align="center">
             <Text
                    h1
                    size={20}
                    css={{
                        textGradient: "45deg, white -20%, white 100%",
                    }}
                    weight="bold"
                >
                    Almacenamiento  disponible   en el Disco :{DiscoLibre}mb
                 
                    </Text>

              </Row>
             </Grid>
             <GraficaDisco data={data}></GraficaDisco>


                    

        </div>
    );
}
