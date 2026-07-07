export function getTimeBasedGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "GOOD MORNING";
  if (hour < 18) return "GOOD AFTERNOON";

  return "GOOD EVENING";
}