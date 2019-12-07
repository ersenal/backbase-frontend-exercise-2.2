export function dateParts(date: Date) {
  const [, weekDay, month, day, year, hour, minute] = date
    .toString()
    .match(/^(\w+) (\w+) (\d+) (\d+) (\d+):(\d+).*$/)!;

  return { hour, minute, day, month, year, weekDay };
}
