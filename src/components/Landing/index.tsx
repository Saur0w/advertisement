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
    const textRef = useRef<HTMLDivElement>(null);
    const mainTextRef = useRef<HTMLHeadingElement>(null);

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

        gsap.to(mainTextRef.current, {
            yPercent: -50,
            duration: 1.2,
            delay: 5,
            ease: "power4.inOut"
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
            <div className={styles.text} ref={textRef}>
                <div className={styles.top}>
                    <div className={styles.top}>
                        <div className={styles.mask}>
                            <div className={styles.words} ref={mainTextRef}>
                                <h1>Moments</h1>
                                <h1>Wedding</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <h1>that</h1>
                </div>
                <div className={styles.right}>
                    <h1>never</h1>
                </div>
                <div className={styles.bottom}>
                    <h1>fade</h1>
                </div>
            </div>
            <div className={styles.shoeImageContainer}>
                <Image src="/images/shoe.jpg" alt="shoes" fill />
            </div>
        </section>
    );
}