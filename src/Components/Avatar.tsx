import styles from './Avatar.module.css'

interface AvatarPorps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true, src, alt}:AvatarPorps){

    return (
        <img src={src} className={hasBorder ? styles.avatarWithBorder : styles.avatar} alt={alt}/>
    )
}