import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return <span className={styles.skeleton} />;
}

type SkeletonTextProps = {
  characters: number;
};

export function SkeletonText({ characters }: SkeletonTextProps) {
  let text = "";

  for (let i = 0; i < characters; i++) {
    text += "0";
  }

  return <span className={styles.skeletonText}>{text}</span>;
}
