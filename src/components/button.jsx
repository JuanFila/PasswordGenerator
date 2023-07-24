import "../index.css";

export default function ButtonComponnents(props) {

    return(
        <div>
            <button className="buttonDecoration"
            onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    )
}