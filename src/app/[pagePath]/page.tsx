import { redirect } from "next/navigation";
import Container from "@mui/material/Container";

import {
  pagePathToKey,
  pagePaths,
  PagePath,
  HOME_KEY,
  CONTACT_KEY,
} from "@/constants";
import SubTitle from "@/components/SubTitle";
import ProjectGrid from "@/components/ProjectGrid";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

const isPagePath = (pagePath: string): pagePath is PagePath => {
  return Object.keys(pagePathToKey).indexOf(pagePath) !== -1;
};

export default function Page({
  params: { pagePath },
}: {
  params: { pagePath: string };
}) {
  if (!isPagePath(pagePath)) {
    redirect(pagePaths[HOME_KEY]);
  }
  const pageKey = pagePathToKey[pagePath];

  return (
    <Container maxWidth="xl">
      <SubTitle pageKey={pageKey} />
      {pageKey === CONTACT_KEY ? (
        <ContactPage />
      ) : (
        <ProjectGrid pageKey={pageKey} />
      )}
      <Footer />
    </Container>
  );
}
