import { Avatar } from "antd";
import {
  CheckCircleFilled,
  EllipsisOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import styles from "./FeedPostCard.module.css";

function FeedPostCard({ post }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar size={48} className={styles.avatar}>
            {post.authorInitials}
          </Avatar>

          <div>
            <h3 className={styles.name}>{post.author}</h3>
            <p className={styles.time}>{post.timeAgo}</p>
          </div>
        </div>

        <EllipsisOutlined />
      </div>

      <p className={styles.content}>{post.content}</p>

      {post.tasks?.length ? (
        <ul className={styles.taskList}>
          {post.tasks.map((task) => (
            <li key={task} className={styles.taskItem}>
              <CheckCircleFilled className={styles.taskIcon} />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className={styles.footer}>
        <div className={styles.reactions}>
          <span className={styles.reaction}>🙏 😍 {post.reactions}</span>

          <span className={styles.icon}>
            <CommentOutlined />
          </span>
        </div>
        <div>{post.comments} comments</div>
      </div>
    </article>
  );
}

export default FeedPostCard;
