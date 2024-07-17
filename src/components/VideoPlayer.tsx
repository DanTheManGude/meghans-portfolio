import Player from "next-video/player";

export default function VideoPlayer(props: {
  videoFileName: string;
  posterSource: string;
}) {
  const { videoFileName, posterSource } = props;

  return (
    <Player
      src={`/videos/${videoFileName}`}
      poster={posterSource}
      accentColor={"black"}
    />
  );
}
