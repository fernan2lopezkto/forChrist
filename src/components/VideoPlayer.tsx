"use client"
import ReactPlayer from "react-player/youtube";

// Define the props interface for better type safety with TypeScript
interface VideoPlayerProps {
  videoUrl: string; // The URL of the video to play
  title?: string;   // Optional title for accessibility or display
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  return (
    // This div creates a responsive aspect ratio container
    // The trick is to use padding-top as a percentage of the width.
    // For 16:9 aspect ratio, it's (9 / 16) * 100% = 56.25%
    <div className="relative pt-[56.25%] overflow-hidden bg-black rounded-lg shadow-xl">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        volume={0.5} // Default volume
        // The player takes up 100% of the parent's width and height
        // This makes it fill the aspect ratio container
        width="100%"
        height="100%"
        // Position the player absolutely to fill the container
        className="absolute top-0 left-0"
        aria-label={title || "Video Player"} // Add an aria-label for accessibility
        config={{
          youtube: {
            playerVars: {
              // You can add more YouTube player variables here if needed
              // For example, to hide related videos at the end:
              // rel: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;