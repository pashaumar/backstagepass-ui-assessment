import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./SidebarDrawer.module.css";

function SidebarDrawer({ open, onClose, days, selectedDay, onSelectDay }) {
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
        <div className={styles.drawerHeader}>
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
        />
      </div>
    </Drawer>
  );
}

export default SidebarDrawer;
