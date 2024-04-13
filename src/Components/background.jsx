import React from "react";

const Background = () => {
  // const videoInfo = {
  //   fittingType: "fill",
  //   alignType: "center",
  //   hasBgScrollEffect: "",
  //   bgEffectName: "",
  //   videoId: "c837a6_314c5a8d96b8421c8dc9376f87af204d",
  //   videoWidth: 1920,
  //   videoHeight: 1080,
  //   qualities: [
  //     {
  //       quality: "480p",
  //       size: 409920,
  //       url: "video/c837a6_314c5a8d96b8421c8dc9376f87af204d/480p/mp4/file.mp4",
  //     },
  //     {
  //       quality: "720p",
  //       size: 921600,
  //       url: "video/c837a6_314c5a8d96b8421c8dc9376f87af204d/720p/mp4/file.mp4",
  //     },
  //     {
  //       quality: "1080p",
  //       size: 2073600,
  //       url: "video/c837a6_314c5a8d96b8421c8dc9376f87af204d/1080p/mp4/file.mp4",
  //     },
  //   ],
  //   isVideoDataExists: "1",
  //   videoFormat: "mp4",
  //   playbackRate: 1,
  //   autoPlay: true,
  //   containerId: "comp-kmj9eam1",
  //   animatePoster: "none",
  // };

  return (
    <div className="absolute h-full w-full ">
      <video
        role="presentation"
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        muted
        loop
        tabIndex="-1"
        autoPlay
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          opacity: 1,
        }}
      >
        <source
          src="https://video.wixstatic.com/video/11062b_e2ae833a8eaa43e38e4aa6d32eb3b8f7/480p/mp4/file.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Background;
