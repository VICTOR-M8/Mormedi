import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h2>Oferta</h2>
        <form>
  
          <div className="primeros3">
            <div className="form-group">
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" name="numero" />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <select id="estado" name="estado">
                <option value="stand-by">Stand-by</option>
                <option value="win">Win</option>
                <option value="lost">Lost</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comercial">Comercial:</label>
              <input type="text" id="comercial" name="comercial" />
            </div>
          </div>

          {/* siguentes 6 campos */}
          <div className="form-row campos1">
          <div className="form-group empresa-group">
              <label htmlFor="empresa">Empresa:</label>
              <input type="text" id="empresa" name="empresa" />
              <button type="button">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6H7v-2h4V7h2v4h4v2h-4v6z"
                  />
                </svg>
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="persona">Persona:</label>
              <input type="text" id="persona" name="persona" />
            </div>
            <div className="form-group">
              <label htmlFor="pais">País:</label>
              <select id="pais" name="pais">
                <option value="mexico">México</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="colombia">Colombia</option>
              </select>
            </div>
          </div>

          <div className="campos1">
            <div className="form-group">
              <label htmlFor="departamento">Departamento:</label>
              <input type="text" id="departamento" name="departamento" />
            </div>
            <div className="form-group">
              <label htmlFor="sector">Sector:</label>
              <input type="text" id="sector" name="sector" />
            </div>
            <div className="form-group">
              <label htmlFor="subsector">Subsector:</label>
              <input type="text" id="subsector" name="subsector" />
            </div>
          </div>

          {/* ------------------------------------------------------ */}

          <div className="form-row siguientes3">
            <div className="form-group">
              <div className="radio-group">
                <label>
                  <input type="radio" name="tipo" value="nueva" /> Nueva
                </label>
                <label>
                  <input type="radio" name="tipo" value="ampliacion" />{" "}
                  Ampliación
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="persona">Persona:</label>
              <input type="text" id="persona" name="persona" />
            </div>
            <div className="form-group">
              <label htmlFor="Fecha de peticion">Fecha de peticion:</label>
              <input type="date" id="Fecha de peticion" name="Fecha de peticion" />
            </div>

            {/* ------------------------------------------------------ */}

            <div className="form-row siguientes6">
              <div className="importe">
              <div className="form-group ">
                <label htmlFor="importe">Importe:</label>
                <input type="number" id="importe" name="importe" />
              </div>

              <div className="form-group">
                <label htmlFor="probabilidad">Probabilidad:</label>
                <select id="probabilidad" name="probabilidad">
                  <option value="10">10%</option>
                  <option value="30">30%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </select>
              </div>
  
            </div>
            </div>

            
            
              <div className="form-group">
                <label htmlFor="offering">Offering:</label>
                <select id="offering" name="offering">
                  <option value="option1">Opción 1</option>
                  <option value="option2">Opción 2</option>
                  <option value="option3">Opción 3</option>
                  
                </select>
              </div>
              <div className="form-group">
              <label htmlFor="fecha-espera">Fecha Esperada:</label>
              <input type="date" id="fecha-espera" name="fecha-espera" />
            </div>

            <div className="form-group">
                <label htmlFor="Quien">Quien:</label>
                <select id="Quien" name="Quien">
                  <option value="juanito">juanito</option>
                  <option value="pedro">pedro</option>
                  <option value="santi">santi</option>
                  
                </select>
              </div>
            
          </div>
          
          <div className="form-group">
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea id="comentarios" name="comentarios" rows="4"></textarea>
          </div>

          
          <div className="form-buttons">
            <button className="guardar" type="submit">Guardar</button>
            <button className="cancelar" type="button">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
