"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const headerRef = useRef<HTMLHeadElement>(null);

    useGSAP(() => {

    }, {
        scope: headerRef
    });
    return (
        <header className="header" ref={headerRef}>

        </header>
    );
}