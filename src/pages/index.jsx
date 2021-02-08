import React from "react"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <img
        src="./img-503.png"
        srcset="./img-503@2x.png 2x, ./img-503@3x.png 3x"
      />
      <div style={{
        fontSize: 30,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.27,
        letterSpacing: 'normal',
        color: 'rgba(0, 0, 0, 0.85)',
      }}>
        系統維護
      </div>
      <div style={{
        fontSize: 16,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.63,
        letterSpacing: 'normal',
        color: 'rgba(0, 0, 0, 0.65)',
      }}>
        網站將於維修完畢後盡快上線，不便之處敬請包涵
      </div>
    </div>
  )
}