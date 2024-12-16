import { useState } from 'react';
import Submit from './components/Submit';
import BeforeSubmit from './components/BeforeSubmit';
import AfterSubmit from './components/AfterSubmit';


function App() {

  const [isSubmited, setisSubmited] = useState(false)

  if(!isSubmited) {return <BeforeSubmit  />}
  else {return <AfterSubmit/>}

}

export default App
