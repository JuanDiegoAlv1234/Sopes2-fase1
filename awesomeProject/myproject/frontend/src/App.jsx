import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';

import {Disco}  from './Disco';
import { CPU } from './cpu';
import { Radio, Grid, Button, Text, Card, Collapse, Input, Row, useModal, Spacer, Modal, Avatar } from "@nextui-org/react";

function App() {
  

    return (
        <div id="App">
          <CPU></CPU>

               
                
                <Disco></Disco>
            </div>
   
    )
}

export default App
