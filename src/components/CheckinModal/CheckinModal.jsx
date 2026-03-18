import { Avatar, Button, Input, Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./CheckinModal.module.css";

const { TextArea } = Input;
const { Dragger } = Upload;

function CheckinModal({ open, onClose, setUploadedFile, onContinue }) {
  const uploadProps = {
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      setUploadedFile(file);
      return false;
    },
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      title={null}
      className={styles.modal}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.user}>
            <Avatar
              className={styles.avatar}
              size={46}
              src="https://documents.bcci.tv/resizedimageskirti/164_compress.png"
            ></Avatar>

            <h3 className={styles.name}>Virat Kohli</h3>
            <p className={styles.meta}>What did you complete today?</p>
          </div>
        </div>

        <div className={styles.formBlock}>
          <Dragger {...uploadProps} className={styles.uploader}>
            <p className={styles.uploadIcon}>
              <UploadOutlined />
            </p>
            <p>
              Images/Videos should be horizontal, at least 1280x720px. The
              maximum image size should be 2MB.
            </p>
          </Dragger>
        </div>

        <div className={styles.footer}>
          <Button
            size="large"
            className={styles.primaryButton}
            onClick={onContinue}
            disabled={true}
          >
            Submit Checkin
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CheckinModal;
