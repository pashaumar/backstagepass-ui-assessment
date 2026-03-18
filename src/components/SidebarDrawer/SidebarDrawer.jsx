import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
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
        <div
          className={styles.drawerHeader}
          style={{
            background:
              theme === "light"
                ? `#c8d5e0`
                : `linear-gradient(
    to right,
    #0d1221 0%,
    #1a1018 40%,
    #2b1510 65%,
    #1a1820 100%
  )`,
          }}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <CloseOutlined />
          </button>
        </div>

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
