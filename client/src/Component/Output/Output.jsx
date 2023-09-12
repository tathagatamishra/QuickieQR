/* eslint-disable no-unused-vars */
import React from 'react'
import './Output.scss'

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Output() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-output' : 'Output'}>
        <div className='qr-card'>
          <img src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" />
        </div>
    </div>
  )
}
