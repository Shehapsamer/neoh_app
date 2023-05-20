import {Fragment} from "react";
import './home.css'
import Home from "./Home";
import S2_home from "./S2_home";
import S3_home from "./S3_home";
import S4_home from "./S4_home";
import S5_home from "./S5_home";
import S6_home from "./S6_home";
import S7_home from "./S7_home";
import S8_home from "./S8_home";


function Main_home() {
    return (
        <Fragment>
            <Home />
            <S2_home />
            <S3_home/>
            <S4_home />
            <S5_home />
            <S6_home />
            <S7_home />
            <S8_home/>
        </Fragment>
    )
}

export default Main_home;