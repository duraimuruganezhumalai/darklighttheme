import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { useEffect } from "react";



const HeaderScreen = () => {



    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode)

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])


    return (
        <>
            <div className="navbar bg-base-100 shadow-sm w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Theme (Dark & Light)</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Home</a></li> */}
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li>
                            <button
                                className="btn btn-sm font-light"
                                onClick={() => dispatch(toggleTheme())}
                            >
                                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default HeaderScreen
