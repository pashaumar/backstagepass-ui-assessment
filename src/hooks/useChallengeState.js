import { useMemo, useState } from "react";
import { sidebarDays } from "../data/sidebarDays";

export function useChallengeState() {
  const [selectedDay, setSelectedDay] = useState(2);

  const days = sidebarDays;

  const handleSelectDay = (dayId) => {
    const clickedDay = days.find((day) => day.id === dayId);

    if (!clickedDay || clickedDay.status === "locked") return;
    setSelectedDay(dayId);
  };

  const completedCount = useMemo(
    () => days.filter((day) => day.status === "completed").length,
    [days],
  );

  return {
    days,
    selectedDay,
    setSelectedDay: handleSelectDay,
    currentDayLabel: `Day ${selectedDay} of ${days.length}`,
    completedCount,
    totalDays: days.length,
  };
}
