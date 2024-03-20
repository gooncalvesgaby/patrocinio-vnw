import React from "react"
import Amazom from "./assets/amazom.png"
import Sirio from "./assets/sirio.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0; 
    padding:0;
    box-sizing: border-box;
  }
`

const Informacoes = styled.div`
border: solid red;
display: flex;
justify-content: space-around;
align-items: center;
height: 40vh;
`

const Patrocinadores = styled.div`
  border: solid green;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
`

function App() {

  const [marca, setMarca] = useState(Vnw)

  useEffect(() => {
    if (marca === Vnw) {
      document.querySelector("div").style.backgroundColor = "#F8BF15";
      document.querySelector("div").style.transition="ease-in-out 0.8s"

    } else if (marca === Amazon) {
      document.querySelector("div").style.backgroundColor = "#FF00FF"
      document.querySelector("div").style.transition="ease-in-out 0.8s"
      document.querySelector("div > h2").style.color = "#ffffff"

    } else if(marca === Sirio){
      document.querySelector("div").style.backgroundColor = "#00FF00"
      document.querySelector("div").style.transition="ease-in-out 0.8s"
    } 

    else{
      document.querySelector("div").style.backgroundColor = "#FFFFFF"
    }
  })
  
  return (
    <Section>
    <GlobalStyle />
    <Informacoes>
      <img src={marca} alt="vai na web logo" />
      <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB         
      </h2>
    </Informacoes>

    <Patrocinadores>
        <img onClick={() => { setMarca(Amazon) }} src={Amazon} alt="" />
        <img onClick={() => { setMarca(Vnw) }} src={Vnw} alt="" />
        <img onClick={() => { setMarca(Sirio) }} src={Sirio} alt="" />
    </Patrocinadores>
    </Section>
  )
}

export default App
