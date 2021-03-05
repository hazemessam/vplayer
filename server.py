import os
import sys
from flask import Flask, request, render_template, send_from_directory
from termcolor import colored


if len(sys.argv) == 2:
    VIDS_PATH = sys.argv[1]
else:
    print(colored(' - You must specify the videos folder!', 'red'))
    sys.exit()

app = Flask(__name__)


@app.after_request
def add_headers(res):
    res.headers["Cache-Control"] = 'no-cache, no-store, must-revalidate'
    res.headers["Pragma"] = 'no-cache'
    res.headers["Expires"] = '0'
    return res


@app.route('/')
def index():
    vids = os.listdir(VIDS_PATH)
    vids = [vid for vid in vids if vid.endswith('mp4')]  # video must be an mp4 video
    
    sort = request.args.get('sort')
    if sort == '123' or sort == 'num':
        vids.sort(key=lambda vid: int(vid.split()[-1].split('.')[0]))
    else:
        vids.sort()
    
    return render_template('vids.html', vids=vids)


@app.route('/vids/<vid_name>')
def get_vid(vid_name):
    return send_from_directory(VIDS_PATH, vid_name)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
