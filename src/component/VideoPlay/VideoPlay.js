import './VideoPlay.scss';

function VideoPlay() {
  return (
    <>
    <h1>Video Player Indicators</h1>
       <video className="video-m" 
            src='https://ik.imagekit.io/ikmedia/example_video.mp4'
            poster='https://ik.imagekit.io/ikmedia/example_video.mp4/ik-thumbnail.jpg?tr=w-1200,h-680'
            width='650'
            height='380'
            controls
            muted
        />
        <video className="video-m" 
            src='https://www.taxmann.com/emailer/images/GST.mp4'
            width='650'
            height='380'
            autoplay
            controls
        />
        <video className="video-m" 
            src='https://www.taxmann.com/emailer/images/GST.mp4'
            width='650'
            height='380'
            muted
            controls
        />
        <video className="video-m" 
            src='https://ik.imagekit.io/ikmedia/example_video.mp4'
            poster='https://ik.imagekit.io/ikmedia/example_video.mp4/ik-thumbnail.jpg?tr=w-1200,h-680'
            width='650'
            height='380'
            muted
            controls
        />
        
       
    </>
  );
}

export default VideoPlay;
