import style from './Loading.module.css';

const Loading = () => {
    return (
        <span className={style.Loading}>
            <span className="material-symbols-outlined">hourglass_bottom</span>
        </span>
    )
};    
    

export { Loading };