import { FunctionalComponent, h } from 'preact';

const GifPlayer: FunctionalComponent = () => {

  return (
    <video controls width="250" playsInline autoPlay muted loop>
      <source src="https://media2.giphy.com/media/zMCfqXkwjmTO8/giphy.mp4?cid=69b30c62ps4odsn71r8mroa1kigd36qnkltbaaqpmpqyarv4&rid=giphy.mp4&ct=g"
              type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video>
  )
};

export {
  GifPlayer
}
