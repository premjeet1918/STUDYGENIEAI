import { useState } from "react";

import Header from "./Components/Header";
import Footor from "./Components/Footor";
import Router from "./Router/Rout";


function App() {
  

  return (
   
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Router />
        </main>
        <Footor/>
      </div>
   
  );
}

export default App;
