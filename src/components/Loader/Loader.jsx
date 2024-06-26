import { ThreeCircles } from "react-loader-spinner"

import css from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={css.loader}>
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""

            /></div>
    )
}
export default Loader