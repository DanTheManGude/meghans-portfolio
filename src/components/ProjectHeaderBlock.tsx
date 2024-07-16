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
    <Stack
      width={"100%"}
      alignItems={"center"}
      sx={{ paddingX: { md: 3.5, xs: 0 }, paddingY: { md: 0, xs: 2 } }}
    >
      <Typography
        fontWeight={600}
        sx={{ fontSize: { xs: 18, md: 22 } }}
        textAlign={"center"}
      >
        {titleText}
      </Typography>
      <Typography sx={{ fontSize: { xs: 14, md: 17 } }} textAlign={"center"}>
        {bodyText}
      </Typography>
    </Stack>
  );
}
