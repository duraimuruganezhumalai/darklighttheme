import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { useEffect } from "react";



const Themetoggle = () => {

    // const dispatch = useDispatch();
    // const theme = useSelector((state) => state.theme.mode)

    // useEffect(() => {
    //     document.querySelector('html').setAttribute('data-theme', theme)
    // }, [theme])


    return (
        <>
            <section>
                <div className="flex justify-center mt-10">
                    {/* <button
                        className="btn btn-sm"
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button> */}
                </div>
            </section>
        </>
    )
}

export default Themetoggle;