import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import Form from './form';
import Header from './header'
import Hero from './hero'
import ReferProcess from './referProcess'
import { messaging } from './firebase';
import { getToken } from "firebase/messaging"
import axios from 'axios';
import FAQS from './FAQS';


function App() {
  let [showform, setShowform] = useState(false);
  const [success, setSuccess] = useState(false);
  let notification = () => {
  setTimeout(() => {
    setSuccess(false)
  }, 3000);
  }
 async function requestNotification(){
    try {
      const permission = await Notification.requestPermission();
      console.log(permission);
      if (permission === 'granted') {
        // Generate Token if the user allows the permission
        const token = await getToken(messaging, {
          vapiKey:
            "BDmF4EBOBOEkQxBczbB9zHm2OGhiidy1MXa07Csjv5dSkikUgKHDr-_17LKX4CcSVLtnC6pugIkwszo9QBGHvk8",
        });
        console.log("Token generated ", token)
        const SendToken = await axios.post("http://localhost:8080/getToken", { token })
        console.log(SendToken)
      } else if (permission === 'denied') {
        alert("You denied the notification!");
      }
    } catch (error) {
      console.error("Notification request permission error:", error);
    }
}
  useEffect(() => {
    //req user for notification permission
    requestNotification()
},[])
  return (
    <div className="App">
      <Header success={success}></Header>

      <Hero show={showform} setshowform={setShowform}></Hero>

      <ReferProcess show={showform} setshowform={setShowform}></ReferProcess>
      {showform && (
        <Form
          show={showform}
          setshowform={setShowform}
          setSuccess={setSuccess}
          notification={notification}
        ></Form>
      )}
      <FAQS></FAQS>
    </div>
  );
    

  
}

export default App
