import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {

  render() {
    return (
      <div className="border-2 p-5">
        <Welcome name="Yari"/>
      </div>
    );
  }
}
