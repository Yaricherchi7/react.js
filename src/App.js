import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";





export class App extends React.Component {
    render(){
        return (
        <div> 
            <Container title="today is a good day!" children={<Welcome name="Yari" age="27"/>} >
            </Container>  
        </div>
        )
    }
}