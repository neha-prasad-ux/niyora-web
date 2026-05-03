#!/usr/bin/env bash
#
# Encode a high-resolution launch video down to a web-optimised 1080p MP4
# and generate a poster JPEG. Output goes to ~/Downloads/ alongside the names
# expected by upload-assets.sh.
#
# Usage:
#   scripts/encode-launch-video.sh path/to/source.mp4
#
# Requires: ffmpeg (brew install ffmpeg).

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <source-video-path>" >&2
  exit 1
fi

src="$1"
if [ ! -f "$src" ]; then
  echo "Source not found: $src" >&2
  exit 1
fi

out_video="${HOME}/Downloads/niyora-launch.mp4"
out_poster="${HOME}/Downloads/niyora-launch-poster.jpg"

echo "Encoding $src to 1080p H.264 (CRF 23, faststart)..."
ffmpeg -y -i "$src" \
  -vf "scale=-2:1080" \
  -c:v libx264 -preset slow -crf 23 \
  -profile:v high -level 4.1 -pix_fmt yuv420p \
  -movflags +faststart \
  -c:a aac -b:a 128k -ac 2 \
  "$out_video"

echo "Extracting poster frame at 1s..."
ffmpeg -y -i "$out_video" -ss 00:00:01 -frames:v 1 -q:v 2 "$out_poster"

echo "Output:"
ls -lh "$out_video" "$out_poster"
echo
echo "Next: scripts/upload-assets.sh"
