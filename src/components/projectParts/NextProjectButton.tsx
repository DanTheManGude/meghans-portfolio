import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

import { ProjectKey, projectPaths, projectOrder } from "@/constants";
import { useMemo } from "react";

export default function NextProjectButton({
  currentProjectKey,
}: {
  currentProjectKey: ProjectKey;
}) {
  const nextProjectIndex = useMemo(() => {
    const currentIndex = projectOrder.indexOf(currentProjectKey);
    if (currentIndex + 1 < projectOrder.length) {
      return currentIndex + 1;
    }
    return 0;
  }, [currentProjectKey]);

  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ width: { xs: "60%", md: "25%" }, marginTop: 2 }}
      onClick={() => {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "instant",
          });
        }, 500);
      }}
    >
      <Link href={`/${projectPaths[projectOrder[nextProjectIndex]]}`}>
        <Typography fontSize={"18px"} color="secondary" fontWeight={600}>
          {`See next project`}
        </Typography>
      </Link>
    </Button>
  );
}
