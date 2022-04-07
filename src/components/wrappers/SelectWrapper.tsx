import React from 'react'
import { Input, Select } from '@mantine/core';
import style from "@styles/login.module.scss"

interface SelectWrapperType{
  text:string,
  placeholder:string,
  className:string,
  styles:React.CSSProperties,
  onChange:any,
  width:string,
}

export default function SelectWrapper({width="100%",text="",placeholder="",className="",styles={},onChange=()=>{}}:SelectWrapperType) {
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
      
      <Select
       style={{height:"55px",margin:"0px",...styles}}
       placeholder={placeholder}
       radius="md"
       size="lg"
       className={style.ip_root_style}
       onChange={onChange}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
    </div>
  )
}