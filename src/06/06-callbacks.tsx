

/*const callback = () => {
  alert('hey')
}

window.setTimeout(callback, 1000)*/

/*
window.setTimeout(  ()=> {alert('hey')} , 1000)*/


import {ChangeEvent, MouseEvent} from "react";

export const User =()=> {


    const search =(e: MouseEvent<HTMLButtonElement>)=> {

    }


  const onNameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e.currentTarget.value)
  }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged =(e: ChangeEvent<HTMLInputElement>)=> {
        console.log('age changed:  ' +  e.currentTarget.value)
    }

  return (
      <div>
          <textarea onChange={onNameChanged} onBlur={focusLostHandler}> Dimych</textarea>
          <input  onChange={onAgeChanged} type={'number'}/>
        <button name={'delete'} onClick={search}>search</button>

      </div>
  )
}