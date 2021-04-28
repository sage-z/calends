import React from 'react'
import styles from './index.scss'

export default () => {
    const menu :number[] = new Array()
    for (let i = 0; i < 100; i++) {
        menu.push(i)
    }
    console.log(menu)
return <div className={styles.side}>
            <div className={styles.header}></div>
            <div className={styles.body}>
                {menu.map(item =>(
                    <div className={styles.item} key={item}>
                    <span></span>
                    <img height={10} width={10} />
                    <div>文件</div>
                </div>
                ))}
            </div>
    </div>
}