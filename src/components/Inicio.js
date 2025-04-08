import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {  
  return (
    <>
      <div>
        <h1>Bienvenido a la App de Pokémon</h1>
        <div> <br />
          <Link to="/gen/gen1">
            <button>Generación I</button> <br /><br />
          </Link>
          <Link to="/gen/gen2">
            <button>Generación II</button> <br /><br />
          </Link>
          <button disabled>Generación III (En construcción)</button> <br /><br />
          <button disabled>Generación IV (En construcción)</button> <br /><br />
          <button disabled>Generación V (En construcción)</button> <br /><br />
          <button disabled>Generación VI (En construcción)</button> <br /><br />
          <button disabled>Generación VII (En construcción)</button> <br /><br />
          <button disabled>Generación VIII (En construcción)</button> <br /><br />
        </div>
      </div>
    </>
  );
};

export default Inicio;
