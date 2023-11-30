import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from 'axios'

function VideoList({editVideo}){
  const url ="https://api.mockaroo.com/api/65dcde30?count=1000&key=1bd06140"

   const videos = useVideos()

   async function handleClick () {
    const res = await axios.get(url);
    console.log('Get Videos', res)
   }

    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          <button onClick={handleClick}>Get Videos</button>
          </>
    )
}

export default VideoList