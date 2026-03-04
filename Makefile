create-container:
	docker build --no-cache=true -t app:latest .

run-container:
	docker run -d -p 8080:80 app:latest

stop-container:
	docker stop $(shell docker ps -q --filter ancestor=app:latest)

destroy-image:
	docker image rm app:latest

prune-container:
	docker container prune

local-web:
	cd src
	python -m http.server 8000
