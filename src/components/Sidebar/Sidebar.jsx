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
