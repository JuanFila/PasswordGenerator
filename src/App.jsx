import './index.css'
import ButtonComponnents from './components/button'
import { useState } from 'react'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [password, setPassword] = useState('')
  const [clicked, setclicked] = useState(false)
  const caracteres = "'1234567890+=-)(*&¨%$#@!qwertyuiopasdfghjklçzxcvbnm,.;/]~[<>:?^}{QWERTYUIOPASDFGHJKLÇZXCVBNM"
  const lenght = 12
  let newPassword =""
  
  for (let i = 0; i < lenght; i++){
    const passwordRandom = Math.floor(Math.random() * caracteres.length)
    newPassword += caracteres.charAt(passwordRandom)
  }
  const ButtonNewPassword =() => {
    setPassword(newPassword)
    if(clicked === false){
      clickedstylePasswords()
    }
   
   }
  const ClearPassword = () => {
    setPassword('')
    setclicked(false)
    warningError()

  }

  const clickedstylePasswords = () => {
    setclicked(!clicked)
  }

  const stylePasswords = {
    backgroundColor: clicked ? "#f3f3f3" : "transparent",
    marginBottom:"20px",
    padding:"10px",
    color: "#333",
    fontSize:"2.5rem",
    borderRadius:"25px",
  }


  const buttonCopy = () => {
    navigator.clipboard.writeText(password)
    SuccessError()
  }

  const SuccessError = () => toast.success('Senha copiada com sucesso!',{
    position:"bottom-center",
    theme:"dark",
    autoClose: 1500,
  });

  const warningError = () => toast.warning('A campo de senha foi limpado',{
    position:"bottom-center",
    theme:"dark",
    autoClose: 1500,
  });


  return (
    <div className='container'>
      <h1 className='title'>Gerador de senhas</h1>
      <div className="containerbuttons">
        <ButtonComponnents
        onClick={ButtonNewPassword}
        text={"Gerar"}
        />
         <ButtonComponnents
         onClick={buttonCopy}
        text={"Copiar"}
        />
      </div>
      <p style={stylePasswords}>{password}</p>
      <ButtonComponnents
      onClick={ClearPassword} 
      text={"Limpar"}
      />
      <ToastContainer/>
    </div>
  )
}

export default App