
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from './img1.jpg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav } from "./nav";
export default function Home(){
    return(
        <div>
            <div className="container-fluid">
                <div className="col-lg-12 row">
                    <div className="col-lg-6">
                        <img src={img} className="col-lg-12"/>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <h1>Member Login</h1>
                            <input type="text" name="username" placeholder="enter the username"/>
                            <input type="password" name="user" placeholder="Enter your password"/>
                            <input type="button" name="submit" value="Login"/>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
