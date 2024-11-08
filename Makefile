setup:
	@make build
	@make up
	@make composer-update
	@make data
	start http://localhost:3000/
build:
	docker compose build --no-cache --force-rm
stop: 
	docker compose stop
up:
	docker compose up -d
composer-update:
	docker exec blog-backend bash -c "composer update"
data:
	docker exec blog-backend bash -c "php artisan migrate"
	docker exec blog-backend bash -c "php artisan db:seed"
	
down:
	docker compose down
