import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CheckinComposer from "./components/CheckinComposer/CheckinComposer";
import SubmissionCard from "./components/SubmissionCard/SubmissionCard";
import FeedPostCard from "./components/FeedPostCard/FeedPostCard";
import ChallengeDrawer from "./components/ChallengeDrawer/ChallengeDrawer";
import CheckinModal from "./components/CheckinModal/CheckinModal";
import SidebarDrawer from "./components/SidebarDrawer/SidebarDrawer";
import SubmissionPreviewModal from "./components/SubmissionPreviewModal/SubmissionPreviewModal";
import styles from "./App.module.css";
import { useTheme } from "./hooks/useTheme";
import { useChallengeState } from "./hooks/useChallengeState";
import { useCheckinFlow } from "./hooks/useCheckinFlow";
import { challengeData } from "./data/challenge";
import { posts, submissionPost } from "./data/posts";
import { Avatar } from "antd";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { days, selectedDay, setSelectedDay, currentDayLabel } =
    useChallengeState();
  const {
    isCheckinModalOpen,
    isPreviewModalOpen,
    checkinText,
    uploadedFile,
    setCheckinText,
    setUploadedFile,
    openCheckinModal,
    closeCheckinModal,
    goToPreview,
    backToEditor,
    resetFlow,
  } = useCheckinFlow();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSidebarDrawerOpen, setIsSidebarDrawerOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        currentDayLabel={currentDayLabel}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        handleOpenSidebar={() => setIsSidebarDrawerOpen(true)}
      />

      <main className={styles.pageBody}>
        <Sidebar
          days={days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          isSidebarDrawerOpen={isSidebarDrawerOpen}
          handleCloseSidebar={() => setIsSidebarDrawerOpen(false)}
        />

        <section className={styles.content}>
          <div className={styles.contentInner}>
            <CheckinComposer
              onOpenCheckinModal={openCheckinModal}
              selectedDay={selectedDay}
            />

            {selectedDay.status === "completed" ? (
              <SubmissionCard submission={submissionPost} />
            ) : null}

            <section className={styles.feedSection}>
              <div className={styles.titles}>
                <h4>
                  See what others
                  <div>
                    <Avatar.Group size={32}>
                      <Avatar src="https://i.pravatar.cc/40?img=1" />
                      <Avatar src="https://i.pravatar.cc/40?img=3" />
                      <Avatar src="https://i.pravatar.cc/40?img=4" />
                    </Avatar.Group>
                  </div>
                  shared
                </h4>
                <div>
                  {challengeData.participants}+ participants already completed
                </div>
              </div>

              <div className={styles.feedList}>
                {posts.map((post) => (
                  <FeedPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <ChallengeDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        challenge={challengeData}
      />

      <SidebarDrawer
        open={isSidebarDrawerOpen}
        onClose={() => setIsSidebarDrawerOpen(false)}
        days={days}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />

      <CheckinModal
        open={isCheckinModalOpen}
        onClose={closeCheckinModal}
        checkinText={checkinText}
        setCheckinText={setCheckinText}
        setUploadedFile={setUploadedFile}
        onContinue={goToPreview}
      />

      <SubmissionPreviewModal
        open={isPreviewModalOpen}
        onClose={backToEditor}
        onSubmit={resetFlow}
        checkinText={checkinText}
        uploadedFile={uploadedFile}
      />
    </div>
  );
}

export default App;
