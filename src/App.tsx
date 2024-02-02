import React from 'react';
import logo from './logo.svg';
import './App.css';
import {log} from "util";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import fetch from "node-fetch-native";

function App() {

  //  const resolvedPromise = Promise.resolve(100)
  //
  //   resolvedPromise
  //      .then(data=>  console.log(data) )
  //      .catch(error =>  console.warn(error))
  //
  //
  // const rejectedPromise = Promise.reject({message: 'some error'})
  //
  //
  //
  // rejectedPromise
  //     .then(data=>  console.log(data) )
  //     .catch(error =>  console.warn(error))


  function wait(ms: number) {
    return new Promise<void>(resolve=> {
        setTimeout(()=> {
          resolve()
        }, ms)
    })
  }

  async function run () {
    await wait(500)
    console.log(1)
    await wait(500)
    console.log(2)
    await wait(500)
    console.log(3)
  }

  run()

  const usersAPI = {
     getAllUsers(){
       return Promise.resolve([{name: 'A'} , {name: 'N'}])
     },
     login(login: string, password: string) {
       if(login === '111' && password === '123') {
         return Promise.reject('incorrect data')
       } else {
         return  Promise.resolve('welcome to VK.com!')
       }
     }
  }

  usersAPI.getAllUsers().then(data => console.log(data))

  usersAPI.login('111', '12345')
      .then(data => console.log(data))
      .catch(error => console.log(error))


    // fetch('https://google.com')
    //     .then((data)=> {
    //       console.log(data.url)
    //     })


  const names = ["Dimych", "Sveta", "Ivan", "Daniil", "Ignat", "Viktor"]
  const users = [
    {name: "Dimych"},
    {name: "Sveta"},
    {name: "Ivan"},
    {name: "Daniil"},
    {name: "Ignat"},
    {name: "Viktor"}
  ]
  const liNames = users.map((n, index)=> <li key={index}>{index} - {n.name}</li>)
  return (
    <div className="App">
      {liNames}
    </div>
  );
}





export default App;
