import { Drawer } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./SidebarDrawer.module.css";

function SidebarDrawer({
  open,
  onClose,
  days,
  selectedDay,
  onSelectDay,
  theme,
}) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="left"
      width={258}
      closable={false}
      maskClosable
      rootClassName={styles.drawerRoot}
    >
      <div className={styles.drawerContent}>
        <Sidebar
          days={days}
          selectedDay={selectedDay}
          onSelectDay={onSelectDay}
          isDrawer={true}
          handleCloseSidebar={onClose}
          theme={theme}
        />
      </div>
    </Drawer>
  );
}

export default SidebarDrawer;
