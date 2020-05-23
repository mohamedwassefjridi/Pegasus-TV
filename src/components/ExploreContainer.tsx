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
    <main id="main-container" className="bg-gray-light">
      <div className="bg-white">
        <div className="content content-full">
          <div className="pt-20 pb-10 text-center">
            <img src="assets/icon/icon.png"></img>
            <h1 className="font-w300 mb-10 mt-2">PegasusTV</h1>
            <h2 className="h4 text-muted font-w300 mb-0">Welcome <strong>{user}</strong>, everything looks good.</h2>
            <button type="button" className="btn btn-square btn-outline-warning min-width-125 mt-20" onClick={() => setUser("Alice")}>Switch to Alice</button>
          </div>
        </div>
      </div>

      <div className="content">
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

        <div className="row">
          <div className="col-md-12">
            <div className="block block-themed">
              <div className="block-header bg-gd-dusk">
                <h3 className="block-title">Channels</h3>
              </div>
              <div className="block-content block-content-full">
                <div className="row gutters-tiny">
                  <div className="col-6 col-md-4 col-xl-2">
                    <a className="block block-rounded block-bordered block-link-shadow text-center" onClick={() => changeChannel(1)} href="javascript:void(0)">
                      <div className="block-content">
                        <p className="mt-5">
                          <img src="http://www.ssh101.com/img/dreikotv.jpg"></img>
                        </p>
                        <p className="font-w600">DreikoTV</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-6 col-md-4 col-xl-2">
                    <a className="block block-rounded block-bordered block-link-shadow text-center" onClick={() => changeChannel(2)} href="javascript:void(0)">
                      <div className="block-content">
                        <p className="mt-5">
                          <img src="http://www.ssh101.com/img/k1live.jpg"></img>
                        </p>
                        <p className="font-w600">K1 Live</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

  );
};
export default ExploreContainer;
