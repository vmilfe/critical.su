import type imageArgs from "../../types/Image";


export function ImageBase(props: imageArgs) {
    return <div className={`pb-2 ${props.style}`}>
        <img src={props.src} className="brightness-75 w-44" />
    </div>
}