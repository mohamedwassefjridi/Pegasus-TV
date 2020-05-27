import React from 'react';
import videojs from 'videojs-playlist'
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [user, setUser] = React.useState("Bob")
  const [streamUrl, setStreamUrl] = React.useState("https://usb.bozztv.com/ssh101/dreikotv/dreikotv/playlist.m3u8")
  
  const didMountRef = React.useRef(false);

  React.useEffect(() => {
    if (didMountRef.current)
      updatePlayer()
    else
      didMountRef.current = true;
  }, [streamUrl]);
  
  function changeChannel(id: number) {
    switch (id) {
      case 1:
        setStreamUrl("https://usb.bozztv.com/ssh101/dreikotv/dreikotv/playlist.m3u8")
        break
      case 2:
        setStreamUrl("https://usb.bozztv.com/ssh101/k1live/k1live/playlist.m3u8")
        break
      default:
        break
    }
  }

  function updatePlayer() {
    var videoElm = document.getElementById('my-video') as videojs

    if (!videoElm.player.paused) {
      videoElm.player.pause();
    }

    videoElm.player.playlist([{
      sources: [{
        src: streamUrl,
        type: "application/x-mpegURL"
      }]
    }])

    videoElm.player.playlist.first();
  }

  return (
        <div className="row">
          <div className="col-md-12">
            <div className="block block-themed">
              <div className="block-header bg-gd-dusk">
                <h3 className="block-title">DreikoTV</h3>
              </div>
              <div className="block-content block-content-full">
                <video
                  id="my-video"
                  className="video-js vjs-theme-forest w-auto"
                  controls
                  preload="auto"
                  height="400"
                  poster="MY_VIDEO_POSTER.jpg"
                  data-setup="{}">
                  <source src={streamUrl} type="application/x-mpegURL" />
                  <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                      </p>
                </video>
              </div>
            </div>
          </div>
      </div>
  );
};
export default ExploreContainer;
