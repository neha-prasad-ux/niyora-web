#!/usr/bin/env bash
#
# Upload marketing assets to Cloudflare R2 (bucket: niyora-web-assets, served at https://assets.niyora.com).
#
# Usage:
#   scripts/upload-assets.sh                              # uploads default launch video + poster
#   scripts/upload-assets.sh path/to/file.mp4 [...more]   # uploads each file with content-type inferred from extension
#
# Requires: wrangler (logged into the "Niyora" Cloudflare account), ffmpeg (only if re-encoding).
#
# To replace the launch video later:
#   1. Drop the new 4K source somewhere (e.g. ~/Downloads/launch-source.mp4)
#   2. Run: scripts/encode-launch-video.sh ~/Downloads/launch-source.mp4
#      (writes ~/Downloads/niyora-launch.mp4 + niyora-launch-poster.jpg)
#   3. Run: scripts/upload-assets.sh
#   4. Cloudflare cache busts automatically because new uploads have a new ETag,
#      but browsers cache for 1 year. If you must force a refresh, rename the file
#      (e.g. niyora-launch-v2.mp4) and update the <video src> in src/pages/index.astro.

set -euo pipefail

BUCKET="niyora-web-assets"
DEFAULT_DIR="${HOME}/Downloads"
DEFAULT_FILES=(
  "${DEFAULT_DIR}/niyora-launch.mp4"
  "${DEFAULT_DIR}/niyora-launch-poster.jpg"
)

content_type_for() {
  case "${1,,}" in
    *.mp4)  echo "video/mp4" ;;
    *.webm) echo "video/webm" ;;
    *.mov)  echo "video/quicktime" ;;
    *.jpg|*.jpeg) echo "image/jpeg" ;;
    *.png)  echo "image/png" ;;
    *.webp) echo "image/webp" ;;
    *.svg)  echo "image/svg+xml" ;;
    *)      echo "application/octet-stream" ;;
  esac
}

if [ "$#" -eq 0 ]; then
  files=("${DEFAULT_FILES[@]}")
else
  files=("$@")
fi

for path in "${files[@]}"; do
  if [ ! -f "$path" ]; then
    echo "Skipping $path (not found)" >&2
    continue
  fi
  name="$(basename "$path")"
  ctype="$(content_type_for "$name")"
  echo "Uploading $name as $ctype to $BUCKET (remote)..."
  wrangler r2 object put "${BUCKET}/${name}" \
    --file="$path" \
    --content-type="$ctype" \
    --cache-control="public, max-age=31536000, immutable" \
    --remote
done

echo "Done. Live at https://assets.niyora.com/<filename>"
