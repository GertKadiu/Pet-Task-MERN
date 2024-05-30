import React from 'react'
import style from "./tab.module.css"

export default function Tab({ text, active, onClick }) {
  return (
    <button className={`${style.tab} ${active ? style.activeTab : ''}`} onClick={onClick}>
    {text}
  </button>
  )
}
