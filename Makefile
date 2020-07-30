
install:
	docker-compose -f docker-compose-build.yml run --rm install
dev:
	docker-compose -f docker-compose-dev.yml down && docker-compose -f docker-compose-dev.yml up --remove-orphans
setup:
	docker volume create --name=node__modules
