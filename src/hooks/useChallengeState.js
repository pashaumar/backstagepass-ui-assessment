import { useMemo, useState } from "react";
import { sidebarDays } from "../data/sidebarDays";

export function useChallengeState() {
  const [selectedDay, setSelectedDay] = useState(sidebarDays[1]);

  const days = sidebarDays;

  const handleSelectDay = (selectedDay) => {
    const clickedDay = days.find((day) => day.id === selectedDay.id);

    if (!clickedDay || clickedDay.status === "locked") return;
    setSelectedDay(selectedDay);
  };

  const completedCount = useMemo(
    () => days.filter((day) => day.status === "completed").length,
    [days],
  );

  return {
    days,
    selectedDay,
    setSelectedDay: handleSelectDay,
    currentDayLabel: `Day ${selectedDay.id} of ${days.length}`,
    completedCount,
    totalDays: days.length,
  };
}
