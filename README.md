# VPlayer
VPlayer is a web-based video player.

## Features
- Control the video speed (the default windows video player doesn't have this feature).
- Stream my PC videos to my iPhone through my WLAN.

## Requirements
- Python 3
- Flask
- Termcolor (optional)
## Installation and Setup
```
git clone https://github.com/hazemessam/vplayer
cd vplayer
pip install -r requirements.txt
python server.py <path/to/videos/folder>
```
Open the browser and go to http://localhost:5000

## Hints
- The videos must be .mp4 files.
- If videos names are sorted with numbers (ex. video 1.mp4, video 2.mp4) you can add `sort=123` or `sort=num` query parameters to sort them according to the numbers at the end of their names http://localhost:5000?sort=123.
