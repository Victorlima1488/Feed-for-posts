import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarPorps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}:AvatarPorps){

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props}/>
    )
}