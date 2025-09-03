FROM nginxinc/nginx-unprivileged:stable-alpine-slim

LABEL org.opencontainers.image.title="Personal-Startpage"
LABEL org.opencontainers.image.description="Minimalist, inspirational, elegant and clean startpage."
LABEL org.opencontainers.image.authors="Ciro Mota <github.com/ciro-mota> (@ciro-mota)"
LABEL org.opencontainers.image.url="https://github.com/ciro-mota/Personal-Startpage"
LABEL org.opencontainers.image.documentation="https://github.com/ciro-mota/Personal-Startpage/README.md"
LABEL org.opencontainers.image.source="https://github.com/ciro-mota/Personal-Startpage"

COPY . /usr/share/nginx/html
