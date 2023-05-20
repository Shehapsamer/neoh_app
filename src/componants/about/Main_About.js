import {Fragment} from "react";
import S1_about from "./S1_about";
import S2_home from "../home/S2_home";
import '../about/Apout.css'
import S3_home from "../home/S3_home";
import S2_about from "./S2_about";
import S3_about from "./S3_about";

function Main_About() {
    return (
        <Fragment>
            <S1_about />
            <S2_home />
            <S2_about/>
            <S3_home />
            <S3_about/>
       </Fragment>
    )
}

export default Main_About;