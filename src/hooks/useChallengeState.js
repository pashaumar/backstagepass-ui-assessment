import { useMemo, useState } from "react";
import { sidebarDays } from "../data/sidebarDays";

export function useChallengeState() {
  const [selectedDay, setSelectedDay] = useState(sidebarDays[1]);

  const currentDayId = selectedDay?.id;

  const days = useMemo(() => {
    if (!currentDayId) return sidebarDays;

    return sidebarDays.map((day) => ({
      ...day,
      status:
        day.id < currentDayId
          ? "completed"
          : day.id === currentDayId
            ? "active"
            : "locked",
    }));
  }, [currentDayId]);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
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
