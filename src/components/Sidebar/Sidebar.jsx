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
        paddingTop: isDrawer ? 0 : "60px",
      }}
    >
      <div
        className={styles.sidebarOverlay}
        style={{
          background:
            theme === "light"
              ? "linear-gradient(90deg,#fdfcfd4d -50.78%,#f7f6fc)"
              : "linear-gradient(90deg,#1211134d -50.78%,#030303)",
        }}
      ></div>
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
