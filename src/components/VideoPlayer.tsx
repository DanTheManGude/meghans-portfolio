import { accentColor, VideoInfo } from "@/constants";
import Player from "next-video/player";

export default function VideoPlayer(props: { videoInfo: VideoInfo }) {
  const {
    videoInfo: { videoSource, posterSource },
  } = props;

  return (
    <Player src={videoSource} poster={posterSource} accentColor={"black"} />
  );
}
