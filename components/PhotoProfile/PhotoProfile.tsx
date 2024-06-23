import React from 'react'


export const PhotoProfile = () => {
    const photo ="https://www.4life.com/12315890/Home/My4LifeProfilePhoto?width=70&mode=crop&quality=100";
    const nameAlt = "Virginia Martinez" 
    const styleGeneral = "h-8 w-8 rounded-full mr-2"   
    return (
    <img 
    className={styleGeneral}
    src={photo}
    alt={nameAlt}
    />
)
}

