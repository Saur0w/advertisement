"use client";

import Landing from "@/components/Landing";
import FeaturedWeddings from "@/components/FeaturedWeddings";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Landing />
            <FeaturedWeddings />
        </div>
    );
}
