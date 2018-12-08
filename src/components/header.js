import React from 'react';
import './header-css-module.css';
import {Link} from "gatsby";

export default () => (
    <div>
        <ul>
            <li><Link to=''>Home</Link></li>
            <li>
                <a href="#">About ￬</a>
                <ul className="hidden">
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">What We Do</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio ￬</a>
                <ul className="hidden">
                    <li><a href="#">Photography</a></li>
                    <li><a href="#">Web & User Interface Developer</a></li>
                    <li><a href="#">Creator of Awesome UI</a></li>
                </ul>
            </li>
            <li><Link to = '/about/'>What Am I doing.</Link></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
)