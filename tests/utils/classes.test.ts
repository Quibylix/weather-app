import { classes } from "@/utils";
import { describe, expect, it } from "vitest";

describe("classes", () => {
  it("returns a string of class names", () => {
    expect(classes("foo", "bar")).toBe("foo bar");
  });

  it("returns a string of class names if the value is truthy", () => {
    expect(classes("foo", { bar: true })).toBe("foo bar");
  });

  it("returns an empty string if the value is falsy", () => {
    expect(classes("foo", { bar: false })).toBe("foo");
  });

  it("accepts an object with multiple class names", () => {
    expect(classes({ foo: true, bar: true })).toBe("foo bar");
  });

  it("accepts an object with multiple class names and returns only the truthy ones", () => {
    expect(classes({ foo: true, bar: false })).toBe("foo");
  });
});
