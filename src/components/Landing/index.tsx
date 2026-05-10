"use client";

import styles from "./style.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText, useGSAP);

export default function Landing() {
    const bgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        // TODO: add parallax scroll animation with gsap
    }, { scope: bgRef });

    return (
        <section className={styles.landing}>
            <Image
                ref={bgRef}
                src="/images/main.jpg"
                alt="Landing background"
                fill
                className={styles.bgImage}
            />
        </section>
    );
}