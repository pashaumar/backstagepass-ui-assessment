import { Button } from "antd";
import {
  BellOutlined,
  FireFilled,
  LeftOutlined,
  MoonOutlined,
  SunOutlined,
  InfoCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.css";
import BackstagePassLightLogo from "../../assets/images/BackstagePassLightLogo.png";
import BackstagePassDarkLogo from "../../assets/images/BackstagePassDarkLogo.png";

function Header({
  theme,
  onToggleTheme,
  currentDayLabel,
  onOpenDrawer,
  handleOpenSidebar,
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img
                src={
                  theme === "light"
                    ? BackstagePassLightLogo
                    : BackstagePassDarkLogo
                }
                alt="BackstagePassLogo"
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.points}>
              <FireFilled style={{ color: "#FC9502" }} />
              <span>30</span>
            </div>

            <button className={styles.iconButton} type="button">
              <BellOutlined />
            </button>

            <Button
              shape="circle"
              className={styles.themeButton}
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
            </Button>
          </div>
        </div>
        <header className={styles.wrapper}>
          <div className={styles.wrapperLeftSection}>
            <div className={styles.back}>
              <div>
                <LeftOutlined />
              </div>
              <div>Back</div>
            </div>

            <div className={styles.separator} />

            <div className={styles.dayPill}>{currentDayLabel}</div>
          </div>
          <div className={styles.showOnMobile}>
            <MenuOutlined onClick={handleOpenSidebar} size={32} />
          </div>
          <div className={styles.wrapperRightSection}>
            <div>9-Day Fitness Challenge</div>
            <InfoCircleOutlined
              onClick={onOpenDrawer}
              style={{ cursor: "pointer" }}
            />
          </div>
        </header>
      </header>
    </>
  );
}

export default Header;
