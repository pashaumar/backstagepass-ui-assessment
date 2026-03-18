import { Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./ChallengeDrawer.module.css";

function ChallengeDrawer({ open, onClose, challenge }) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="right"
      width={520}
      closable={false}
      title={null}
      rootClassName={styles.drawerRoot}
      className={styles.drawer}
    >
      <div className={styles.content}>
        <div className={styles.topBar}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close challenge description"
          >
            <CloseOutlined />
          </button>

          <h2 className={styles.heading}>Challenge Description</h2>
        </div>

        <div className={styles.banner}>
          <img
            className={styles.bannerImage}
            src={challenge.image}
            alt={challenge.title || "VK"}
          />
        </div>

        <div className={styles.body}>
          <h4 className={styles.title}>{challenge.title}</h4>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Total Checkins</p>
              <p className={styles.statValue}>{challenge.totalCheckins}</p>
            </div>

            <div className={styles.statCard}>
              <p className={styles.statLabel}>Participants Joined</p>
              <p className={styles.statValue}>{challenge.participantsJoined}</p>
            </div>
          </div>

          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionLabel}>Description</p>
            <p className={styles.description}>{challenge.description}</p>
          </div>
        </div>

        <div className={styles.footer}>
          <Button
            type="primary"
            size="large"
            block
            className={styles.actionButton}
            onClick={onClose}
          >
            Got it
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default ChallengeDrawer;
