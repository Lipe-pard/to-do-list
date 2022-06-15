import styles from './Table.module.css'

import { TbBallpen, TbTrash } from "react-icons/tb";

const Table = () => {
    return(
        <>
        <table className={styles.table}>
            <tr className={styles.tableHeader}>
                <th className={styles.thItem}> Titulo </th>
                <th className={styles.thItem}> Prazo </th>
                <th className={styles.thItem}> Ações </th>
            </tr>
            <tbody>
                
            </tbody>
            <tr>
                <td className={styles.tbItem}> Estudar Inglês </td>
                <td className={styles.tbItem}> 16/05/2022 </td>
                <td className={styles.tbItem}> 
                    <button className={styles.edit}>
                        <TbBallpen/> 
                    </button>
                    <button className={styles.delete}>
                        <TbTrash/> 
                    </button>
                </td>
            </tr>
            <tr className={styles.dfRow}>
                <td className={styles.tbItem}> Entrega do Trabalho </td>
                <td className={styles.tbItem}> 23/05/2022 </td>
                <td className={styles.tbItem}> 
                    <button className={styles.edit}>
                        <TbBallpen/> 
                    </button>
                    <button className={styles.delete}>
                        <TbTrash/> 
                    </button>
                </td>
            </tr>
            <tr>
                <td className={styles.tbItem}> Entrega do Projeto </td>
                <td className={styles.tbItem}> 27/05/2022 </td>
                <td className={styles.tbItem}> 
                    <button className={styles.edit}>
                        <TbBallpen/> 
                    </button>
                    <button className={styles.delete}>
                        <TbTrash/> 
                    </button>
                </td>
            </tr>
        </table>
        </>
    )
}

export default Table