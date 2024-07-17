import Player from "next-video/player";

export default function VideoPlayer(props: {
  videoSource: string;
  posterSource: string;
}) {
  const { videoSource, posterSource } = props;

  return (
    <Player src={videoSource} poster={posterSource} accentColor={"black"} />
  );
}
