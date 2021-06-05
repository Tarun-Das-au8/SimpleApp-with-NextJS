import styles from "../../styles/List.module.css"
import Link from "next/link"

export const getStaticProps = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props : {items : data}
    }
}

const List = ({items}) => {
    return (
        <div>
            <h1>All List</h1>
            {items.map(item =>(
                <Link href={`/listing/${item.id}`} key={item.id}>
                   <a className={styles.single}>
                        <h3>{item.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default List;