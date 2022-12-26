import { NavBar, Hero } from "./components";
import styles from "./style";
import { Routes, Route } from "react-router-dom";
import { Home, SearchPage, WatchField } from "./pages";
function App() {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div
                className={`${styles.flexCenter} ${styles.paddingX} bg-[#1c1c1c]`}
            >
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route
                            path='/searchpage'
                            element={<SearchPage />}
                        ></Route>
                        <Route
                            path='/watch/:animeId'
                            element={<WatchField />}
                        ></Route>
                    </Routes>
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}></div>
        </div>
    );
}

export default App;
