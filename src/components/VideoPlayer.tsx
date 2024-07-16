import { accentColor, VideoInfo } from "@/constants";
import Video from "next-video";
import { Asset } from "next-video/dist/assets.js";

export default function VideoPlayer(props: { videoInfo: VideoInfo }) {
  const {
    videoInfo: { asset, poster },
  } = props;

  return <Video src={asset} poster={poster} accentColor={accentColor} />;
}
