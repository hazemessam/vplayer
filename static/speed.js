// Videos Speed
const vids = document.querySelectorAll('video');
const vidSpeedInp = document.querySelector('.vid-speed');

const setVidSpeed = (speed)=> {
    for (let vid of vids)
        vid.playbackRate = speed;
}

vidSpeedInp.addEventListener('input', (e) => {
    setVidSpeed(e.target.value);
});
