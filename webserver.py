import os
import subprocess
os.chdir(os.path.dirname(os.path.abspath(__file__)))
subprocess.call('py -m http.server')
#http://localhost:8000/