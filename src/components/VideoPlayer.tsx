import { accentColor, VideoInfo } from "@/constants";
import Video from "next-video";

export default function VideoPlayer(props: { videoInfo: VideoInfo }) {
  const {
    videoInfo: { asset, poster },
  } = props;

  return <Video src={asset} poster={poster} accentColor={accentColor} />;
}
