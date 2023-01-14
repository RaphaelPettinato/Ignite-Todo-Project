import styles from "./Header.module.css"

import todoLogo from "../assets/logoTodo.svg"

export function Header(){
    return (
        <div className={styles.header}>
            <img src={todoLogo} alt="Logotipo Todo"/>
        </div>
    )
}