type ClassToggles = {
  [key: string]: boolean;
};

export default function classes(...names: (string | ClassToggles)[]) {
  return names
    .map(name => {
      if (typeof name === "string") {
        return name;
      }

      return Object.entries(name)
        .filter(item => item[1])
        .map(item => item[0])
        .join(" ");
    })
    .join(" ")
    .trim();
}
