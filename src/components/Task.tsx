import { useState } from "react"

import { Circle, Trash, CheckCircle } from "phosphor-react"

import styles from "./Task.module.css"

export function Task(){

    const [icon, setIcon] = useState(true);

    return(
        <div className={styles.hasTask}>
                    <div className={styles.taskModel}>
                        <div className={styles.isComplete} onClick={() => setIcon(!icon)}>
                            {icon ? <Circle /> : <CheckCircle />}
                        </div>
                        <p>alguma coisa aqui antes patrão</p>

                        <button>
                            <Trash size={18}/>
                        </button>
                    </div>
                </div>
    )
}