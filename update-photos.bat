@echo off
cd /d "%~dp0"
python -c "
import os, json
exts = {'.jpg','.jpeg','.png','.gif','.webp','.avif','.JPG','.JPEG','.PNG','.GIF','.WEBP'}
files = sorted([f for f in os.listdir('photo') if os.path.splitext(f)[1] in exts])
with open('photo/manifest.json','w') as f:
    json.dump(files, f, indent=2)
print('manifest.json updated —', len(files), 'photo(s) found:')
for f in files: print(' ', f)
"
echo.
echo Done! Now commit and push.
pause
