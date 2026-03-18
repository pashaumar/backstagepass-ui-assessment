import { Avatar } from "antd";
import styles from "./CheckinComposer.module.css";

function CheckinComposer({ selectedDay, onOpenCheckinModal }) {
  return (
    <section className={styles.wrapper}>
      {selectedDay.status !== "completed" ? (
        <div className={styles.topRow}>
          <h2 className={styles.title}>Today&apos;s Check-in</h2>
          <div className={styles.endsIn}>Ends in 20h 44m</div>
        </div>
      ) : null}

      {selectedDay.status === "active" ? (
        <div className={styles.gradientInput} onClick={onOpenCheckinModal}>
          <div className={styles.gradientInputInner}>
            <Avatar
              size={32}
              src="https://documents.bcci.tv/resizedimageskirti/164_compress.png"
            />
            Share what you completed today?
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default CheckinComposer;
