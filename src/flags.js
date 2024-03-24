import React from 'react';
import { lang } from './constants'; // import languages

export const Flag = ({ origin }) => {
    let flag;
    if (origin === lang.esp) {
        flag = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20">
            <rect width="30" height="20" fill="#c60b1e"/>
            <rect width="30" height="10" fill="#ffc400" y="5"/>
        </svg>
    } else if (origin === lang.eng) {
        flag = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
            <clipPath id="t">
            <path d="M15,10h15v10zv10h-15zh-15v-10zv-10h15z"/>
            </clipPath>
            <path d="M0,0v20h30v-20z" fill="#012169"/>
            <path d="M0,0 30,20M30,0 0,20" stroke="#fff" strokeWidth="4"/>
            <path d="M0,0 30,20M30,0 0,20" clipPath="url(#t)" stroke="#C8102E" strokeWidth="3"/>
            <path d="M-1 7h15v-8h5v8h15v5h-15v10h-5v-10h-15z" fill="#C8102E" stroke="#FFF" strokeWidth="1.5"/>
    </svg>
    }

    return (
        <div className='flag'>{flag}</div>
    )
}