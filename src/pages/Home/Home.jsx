import About from "components/About/About";
import SliderPhoto from "components/SliderPhoto/SliderPhoto";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "store/operations";
import { selectGetAdverts, selectVisibleAdverts } from "store/selectors";


export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    const adverts = useSelector(selectGetAdverts);

    return (
        <div className="">
            <SliderPhoto props={adverts} />
            <About props={adverts} />
            {/* <Footer /> */}
        </div>
    );
}