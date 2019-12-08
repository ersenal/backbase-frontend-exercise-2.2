import { dateParts } from "../date";

describe("date util", () => {
  it("should extract parts of a Date", () => {
    const now = new Date("2019-12-08T11:30:00Z");
    const { day, hour, minute, month, weekDay, year } = dateParts(now);

    expect(year).toEqual("2019");
    expect(month).toEqual("Dec");
    expect(day).toEqual("08");
    expect(hour).toEqual("11");
    expect(minute).toEqual("30");
    expect(weekDay).toEqual("Sun");
  });
});
