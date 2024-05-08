import Typewriter from "./Typewriter";
import {ABOUT_STATEMENT} from "../data.js";

export default function About(){
    return (
        <h1>
            <Typewriter text={ABOUT_STATEMENT} delay={20}/>
        </h1>
    );
}