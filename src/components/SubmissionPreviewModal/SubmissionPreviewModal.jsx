import { Avatar, Button, Modal } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  PlayCircleFilled,
} from "@ant-design/icons";
import styles from "./SubmissionPreviewModal.module.css";

function SubmissionPreviewModal({
  open,
  onClose,
  onSubmit,
  checkinText,
  uploadedFile,
}) {
  const previewUrl = uploadedFile ? URL.createObjectURL(uploadedFile) : null;
  const isVideo = uploadedFile?.type?.startsWith("video/");

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={760}
      centered
      title={null}
      className={styles.modal}
      destroyOnClose
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.user}>
            <Avatar className={styles.avatar} size={46}>
              AI
            </Avatar>

            <div>
              <h3 className={styles.name}>Ashraf Idrishi</h3>
              <p className={styles.meta}>Preview your submission</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.postHeader}>
            <div className={styles.user}>
              <Avatar className={styles.avatar} size={42}>
                AI
              </Avatar>

              <div>
                <h4 className={styles.postName}>Ashraf Idrishi</h4>
                <p className={styles.postTime}>now</p>
              </div>
            </div>
          </div>

          <p className={styles.postText}>
            {checkinText || "Today's challenge workout completed."}
          </p>

          {previewUrl ? (
            <div className={styles.media}>
              {isVideo ? (
                <div className={styles.videoPreview}>
                  <video className={styles.video} controls src={previewUrl} />
                  <span className={styles.playOverlay}>
                    <PlayCircleFilled />
                  </span>
                </div>
              ) : (
                <img
                  className={styles.image}
                  src={previewUrl}
                  alt="Uploaded preview"
                />
              )}
            </div>
          ) : (
            <div className={styles.emptyMedia}>No media selected</div>
          )}

          <div className={styles.footerMeta}>
            <span className={styles.reaction}>
              <HeartOutlined />
              18
            </span>
            <span className={styles.reaction}>
              <MessageOutlined />
              10
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button size="large" onClick={onClose}>
            Back
          </Button>

          <Button
            type="primary"
            size="large"
            className={styles.primaryButton}
            onClick={onSubmit}
          >
            Submit Check-in
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default SubmissionPreviewModal;
