import { Avatar } from "antd";
import { CommentOutlined, EllipsisOutlined } from "@ant-design/icons";
import styles from "./SubmissionCard.module.css";

function SubmissionCard({ submission }) {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.innerHeader}>
            <div className={styles.user}>
              <Avatar size={48} className={styles.avatar}>
                {submission.authorInitials}
              </Avatar>

              <div>
                <h3 className={styles.name}>{submission.author}</h3>
                <p className={styles.time}>{submission.timeAgo}</p>
              </div>
            </div>

            <div className={styles.moreButton}>
              <EllipsisOutlined />
            </div>
          </div>
          <p className={styles.content}>{submission.content}</p>
        </div>

        <div className={styles.media}>
          <img
            src={submission.image}
            alt="Workout submission preview"
            className={styles.image}
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.reactions}>
            <span className={styles.reaction}>🙏 😍 20</span>

            <span className={styles.icon}>
              <CommentOutlined />
            </span>
          </div>
          <div>10 comments</div>
        </div>
      </div>

      <div className={styles.completedBanner}>Your Submission</div>
    </section>
  );
}

export default SubmissionCard;
