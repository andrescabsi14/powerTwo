import React from "react";

import { create } from "react-test-renderer";
import PowerOfTwo from "../PowerTwo";

test("Input validation", () => {
  const c = create(<PowerOfTwo />);
  const instance = c.getInstance();

  instance.handleNumberChange({ target: { value: "1E10" } });
  expect(instance.state.err).toBe(false);

  instance.handleNumberChange({ target: { value: "128a" } });
  expect(instance.state.err).toBe(true);

  instance.handleNumberChange({ target: { value: "power!" } });
  expect(instance.state.err).toBe(true);

  instance.handleNumberChange({ target: { value: "1125899906842624" } });
  expect(instance.state.err).toBe(true);
});

test("Power of 2 validation", () => {
  const c = create(<PowerOfTwo />);
  const instance = c.getInstance();

  instance.powerOfTwo(1);
  expect(instance.state.powerTwo).toBe(true);

  instance.powerOfTwo(2);
  expect(instance.state.powerTwo).toBe(true);

  instance.powerOfTwo(3);
  expect(instance.state.powerTwo).toBe(false);

  instance.powerOfTwo(1024);
  expect(instance.state.powerTwo).toBe(true);

  instance.powerOfTwo(2147483648);
  expect(instance.state.powerTwo).toBe(true);

  instance.powerOfTwo("1E10");
  expect(instance.state.powerTwo).toBe(false);
});
