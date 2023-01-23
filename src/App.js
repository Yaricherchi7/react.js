import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import {Login} from "./Login";
import { TodoList } from "./TodoList";






export class App extends React.Component {
    render(){
        return (
        <div> 
            <Container title="today is a good day!">
            <Welcome name="Yari" age="27"/>
            <Login/>
            <TodoList/>
            </Container>  
        </div>
        )
    }
}