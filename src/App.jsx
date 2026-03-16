import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import { useTheme } from "./hooks/useTheme";
import { useChallengeState } from "./hooks/useChallengeState";

function App() {
  const { theme, toggleTheme } = useTheme();
  const {
    days,
    selectedDay,
    setSelectedDay,
    currentDayLabel,
    completedCount,
    totalDays,
  } = useChallengeState();

  return (
    <div className={styles.app}>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        currentDayLabel={currentDayLabel}
      />

      <main className={styles.pageBody}>
        <Sidebar
          days={days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        <section className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.placeholderCard}>
              <p className={styles.eyebrow}>BackstagePass Challenge</p>
              <h1 className={styles.title}>Responsive page shell is ready</h1>
              <p className={styles.description}>
                We have completed the foundation with theme support, header, and
                desktop/mobile sidebar.
              </p>

              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Selected Day</span>
                  <strong className={styles.statValue}>
                    Day {selectedDay}
                  </strong>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Completed</span>
                  <strong className={styles.statValue}>
                    {completedCount}/{totalDays}
                  </strong>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Theme</span>
                  <strong className={styles.statValue}>{theme}</strong>
                </div>
              </div>
            </div>

            <div className={styles.placeholderGrid}>
              <div className={styles.block}>Check-in composer placeholder</div>
              <div className={styles.block}>Submission card placeholder</div>
              <div className={styles.block}>Community feed placeholder</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
