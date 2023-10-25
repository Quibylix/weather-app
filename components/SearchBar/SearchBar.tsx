"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "../Icons";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const router = useRouter();

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const city = data.get("city") as string;

    router.push(`/weather/${encodeURIComponent(city)}`);
  }

  return (
    <form className={styles.form} role="search" onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="search"
        name="city"
        placeholder="Enter city name"
        title="Enter city name"
        autoComplete="off"
        required
      />
      <button
        className={styles.button}
        type="submit"
        title="Search"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
