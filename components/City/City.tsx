"use client";

import { useCityData } from "@/hooks";

import styles from "./City.module.css";

export default function City() {
  const { cityData } = useCityData();

  return cityData ? (
    <>
      <span>{cityData.city}</span>, <span>{cityData.country}</span>
    </>
  ) : (
    <span className={styles.skeleton} />
  );
}
