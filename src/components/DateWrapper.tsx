import React from 'react'
import style from "@styles/login.module.scss"
import { DatePicker } from '@mantine/dates'

interface DateWrapperType{
  text:string,
  placeholder:string,
  className:string,
  styles:React.CSSProperties,
  onChange:any,
  width:string,
}

export default function DateWrapper({width="100%",text="",placeholder="",className="",styles={},onChange=()=>{}}:DateWrapperType) {
  return (
    <div style={{width: width}}>

      {text!=="" && <div 
      style={{
        textAlign:"left",
        font:"normal normal bold 15px/22px Montserrat",
        letterSpacing:"0px",
        color:"#383838",
        opacity: 1,
        margin:"10px 5px",
      }}
      >{text}</div>}

        <DatePicker
        radius="md"
        size="lg"
        className={style.ip_root_style}
        style={{height:"55px",margin:"0px",...styles}}
        onChange={onChange}
        />
    </div>
  )
}