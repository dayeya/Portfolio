import styles from "../page.module.css";

export default function Gmail() {
    return (
        <a href="mailto:daniel.sapoj14@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg className={styles.email} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="email" fill="#000000" transform="translate(42.666667, 85.333333)"> <path d="M3.55271368e-14,1.42108547e-14 L3.55271368e-14,341.333333 L426.666667,341.333333 L426.666667,1.42108547e-14 L3.55271368e-14,1.42108547e-14 Z M349.226667,42.6666667 L213.333333,163.413333 L77.44,42.6666667 L349.226667,42.6666667 Z M42.6666667,298.666667 L42.6666667,68.9066667 L213.333333,220.586667 L384,68.9066667 L384,298.666667 L42.6666667,298.666667 Z"> </path> </g> </g> </g></svg>
        </a>
    )
}