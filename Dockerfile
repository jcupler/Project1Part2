FROM python:3.15.0a6-alpine3.23
WORKDIR /app
COPY /src /app
EXPOSE 80
CMD ["python", "-m", "http.server", "80"]
