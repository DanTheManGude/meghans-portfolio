import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function ProjectHeaderBlock({
  titleText,
  bodyText,
}: {
  titleText: string;
  bodyText: string;
}) {
  return (
    <Stack width={"28%"} alignItems={"center"}>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { xs: 18, md: 26 } }}
        textAlign={"center"}
      >
        {titleText}
      </Typography>
      <Typography sx={{ fontSize: { xs: 14, md: 20 } }} textAlign={"center"}>
        {bodyText}
      </Typography>
    </Stack>
  );
}
