import React from "react";
import Poruka from "./components/Poruka";

const App = ({poruke}) => {
    return (
      <div>
        <h1>Poruke</h1>
        <ul>
          {poruke.map( p => 
            <Poruka key={p.id} poruka={p} />        
          )}
        </ul>
      </div>
    )
  }
  export default App