import { getRelativeTime } from '../index';

const units = {
  "%s day": 60 * 60 * 1000 * 24,
  "%s hour": 60 * 60 * 1000,
  "%s min": 60 * 1000,
  "%s sec": 1000,
}

test("1 min", () => {
  expect(getRelativeTime(1000 * 60, units)).toBe("1 min")
})

test("1 sec", () => {
  expect(getRelativeTime(1000, units)).toBe("1 sec")
  expect(getRelativeTime(1000 + 100, units)).toBe("1 sec")
})

test("1 min 1 sec", () => {
  expect(getRelativeTime(1000 * 60 + 1000, units)).toBe("1 min 1 sec")
  expect(getRelativeTime(1000 * 60 + 1000 + 500, units)).toBe("1 min 1 sec")
})

test("1 hour", () => {
  expect(getRelativeTime(1000 * 60 * 60, units)).toBe("1 hour")
  expect(getRelativeTime(1000 * 60 * 60 + 500, units)).toBe("1 hour")
})

test("1 day", () => {
  expect(getRelativeTime(1000 * 60 * 60 * 24, units)).toBe("1 day")
  expect(getRelativeTime(1000 * 60 * 60 * 24 + 500, units)).toBe("1 day")
})

test("1 day 1 hour", () => {
  expect(getRelativeTime(1000 * 60 * 60 * 24 + 1000 * 60 * 60, units)).toBe("1 day 1 hour")
  expect(getRelativeTime(1000 * 60 * 60 * 24 + 1000 * 60 * 60 + 500, units)).toBe("1 day 1 hour")
})