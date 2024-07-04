import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

import { ProjectKey, projectNames, projectOrder } from "@/constants";
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
      sx={{ width: { xs: "85%", md: "40%" }, marginTop: 2 }}
    >
      <Link href={`/${projectNames[projectOrder[nextProjectIndex]]}`}>
        <Typography fontSize={"18px"} color="secondary" fontWeight={600}>
          {`See next project`}
        </Typography>
      </Link>
    </Button>
  );
}
