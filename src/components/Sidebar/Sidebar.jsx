import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";
import classNames from "classnames";

function Sidebar({
  days,
  selectedDay,
  onSelectDay,
  isSidebarDrawerOpen = false,
  handleCloseSidebar,
  isDrawer,
  theme,
}) {
  const handleSelectDay = (day) => {
    onSelectDay(day);

    if (isSidebarDrawerOpen && handleCloseSidebar) {
      handleCloseSidebar();
    }
  };

  return (
    <aside
      className={classNames({
        [styles.sidebar]: true,
        [styles.drawerSidebar]: isDrawer,
      })}
      style={{
        background:
          theme === "light"
            ? `linear-gradient(
    to bottom,
    #c8d5e0 0%,
    #d8cdd0 35%,
    #e8d4ce 60%,
    #f0e6e2 100%
  )`
            : `linear-gradient(
    to right,
    #0d1221 0%,
    #1a1018 40%,
    #2b1510 65%,
    #1a1820 100%
  )`,
        paddingTop: isDrawer ? 0 : "60px",
      }}
    >
      <div className={styles.dayList}>
        {days.map((day) => (
          <SidebarItem
            key={day.id}
            day={day}
            isSelected={selectedDay.id === day.id}
            onClick={handleSelectDay}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
