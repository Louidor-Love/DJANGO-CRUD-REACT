import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

export function UserformPage(){
    useEffect(() => {
        console.log("pagina cargada");
    }, []);
    return (
        <div>
        <form action="">  
          <label>Mail</label>
          <input type="text" name="username" value="" id="username" className="form-control" 
              placeholder="username"
          />
          <label>Contraseña</label>
          <input type="text" name="username" value="" id="username" className="form-control" 
              placeholder="username"
          />
          <label>Confirma Contraseña</label>
          <input type="text" name="username" value="" id="username" className="form-control" 
              placeholder="username"
          />
          <button>login</button>
        </form>
      </div>
    )
}