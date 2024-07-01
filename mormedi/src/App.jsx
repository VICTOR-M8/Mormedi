import "./App.css";
import { useState } from "react";

function App() {
  const [fecha, setFechaPeticion] = useState("");

  const handleFechaChange = (e) => {
    const value = e.target.value;
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(value).toLocaleDateString("es-ES", options);
    setFechaPeticion(
      formattedDate.replace("de ", "de").replace(" 202", " del 202")
    );
  };

  return (
    <>
      <div className="container">
        <h2>Formulario de Oferta</h2>
        <form>
          <div className="primeros3">
            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Numero</label>
            </div>

            <div className="group">
              <select required="" className="input">
                <option value="" disabled selected></option>
                <option value="Stand-by">Stand-by</option>
                <option value="Win">Win</option>
                <option value="Lost">Lost</option>
              </select>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Estado</label>
            </div>

            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Comercial</label>
            </div>
          </div>

          {/* siguentes 6 campos */}
          <div className="form-row campos1">
          
           
  <div class="input-container">
    <input required="" type="text" class="input_btn" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label className="text">Empresa</label>
    <button type="button" class="add-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 8v4a.5.5 0 0 1-1 0V8H3a.5.5 0 0 1 0-1h4V3a.5.5 0 0 1 1 0v4h4a.5.5 0 0 1 0 1H8z"/>
      </svg>
    </button>
  
</div>


            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Persona</label>
            </div>

            <div className="group">
              <select required="" className="input_2">
                <option value="" disabled selected></option>
                <option value="argentina">Argentina</option>
                <option value="bolivia">Bolivia</option>
                <option value="brazil">Brazil</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
                <option value="ecuador">Ecuador</option>
                <option value="paraguay">Paraguay</option>
                <option value="peru">Peru</option>
                <option value="uruguay">Uruguay</option>
                <option value="venezuela">Venezuela</option>
              </select>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>País</label>
            </div>

            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Departamento</label>
            </div>

            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Sector</label>
            </div>

            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Subsector</label>
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="form-row siguientes3">
            <div className="form-group">
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="tipo"
                    value="nueva"
                    class="input_1"
                  />{" "}
                  Nueva
                </label>
                <label>
                  <input type="radio" name="tipo" value="ampliacion" />{" "}
                  Ampliación
                </label>
              </div>
            </div>
            <div class="group">
              <input required="" type="text" class="input" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Titulo</label>
            </div>
            <div className="group">
              <input
                required=""
                type="date"
                className="input"
                onChange={handleFechaChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Fecha de petición</label>
            </div>
            <div class="group">
              <input required="" type="text" class="input_1" />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Importe €</label>
            </div>
            <div className="group">
              <select required="" className="input_1">
                <option value="" disabled selected></option>
                <option value="10%">10%</option>
                <option value="30%">30%</option>
                <option value="50%">50%</option>
                <option value="75%">75%</option>
                <option value="100%">100%</option>
              </select>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Probabilidad</label>
            </div>

            <div className="group">
              <select required="" className="input_2">
                <option value="" disabled selected></option>
                <option value="Design">Design</option>
                <option value="Strategy">Strategy</option>
                <option value="Digital">Digital</option>
                <option value="DIS+EST">DIS+EST</option>
                <option value="DIS+DIG">DIS+DIG</option>
              </select>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Offering</label>
            </div>
            <div className="group">
              <input
                required=""
                type="date"
                className="input"
                onChange={handleFechaChange}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Fecha esperada</label>
            </div>

            <div className="persona">
            <div class="group_1">
            <input required="" type="text" class="input" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Persona</label>
          </div>
            </div>
          
          </div>

          

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea id="comentarios" name="comentarios" rows="4"></textarea>
          </div>

          <div className="form-buttons">
            <button className="guardar" type="submit">
              Guardar
            </button>
            <button className="cancelar" type="button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
