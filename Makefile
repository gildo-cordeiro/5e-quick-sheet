# Makefile
DEAFULT_GOAL := help

.PHONY: help

help:
	@echo "start-dev: Start the development environment"
	@echo "start-prod: Start the production environment"
	@echo "stop-infra: Stop the infrastructure"

start-dev:
    docker-compose -f docker-compose.yml build
	docker-compose -f docker-compose.yml up -d
	npm run format
	npm run lint
	npm run start:dev

start-prod:
	docker-compose -f docker-compose.yml build
	docker-compose -f docker-compose.yml up -d
	npm run format
	npm run lint
	npm run start:prod

stop-infra:
	docker-compose -f docker-compose.yml down --remove-orphans