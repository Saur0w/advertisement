"use client";

import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(imageContainerRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: landingRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.imageContainer} ref={imageContainerRef}>
                <Image
                    src="/images/main.jpg"
                    alt="Landing background"
                    fill
                    priority
                />
            </div>
        </section>
    );
}