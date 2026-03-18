import classnames from "classnames";
import { LockOutlined, CheckCircleFilled } from "@ant-design/icons";
import styles from "./Sidebar.module.css";

function SidebarItem({ day, isSelected, onClick }) {
  const isLocked = day.status === "locked";
  const isCompleted = day.status === "completed";
  const isActive = day.status === "active";

  return (
    <button
      type="button"
      className={classnames(
        styles.dayItem,
        isSelected && styles.dayItemSelected,
        isLocked && styles.dayItemLocked,
      )}
      onClick={() => onClick(day)}
      disabled={isLocked}
    >
      <div
        className={classnames(
          styles.content,
          isSelected && styles.selectedContent,
        )}
      >
        <span className={styles.dayText}>{day.label}</span>

        {isCompleted || isLocked ? (
          <span className={classnames(styles.dayIndicator)}>
            {isActive ? (
              ""
            ) : isCompleted ? (
              <CheckCircleFilled style={{ color: "green" }} />
            ) : isLocked ? (
              <LockOutlined />
            ) : null}
          </span>
        ) : null}
      </div>
    </button>
  );
}

export default SidebarItem;
