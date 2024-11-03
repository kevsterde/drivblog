### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![Laravel][Laravel.com]][Laravel-url]

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

https://www.docker.com

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/kevinFE63/drivblog.git
   ```
2.  Setting Up (must be in root folder)

   ```sh
   make setup
   ```

   or if no Make

   ```sh
   cd blog-frontend && npm i && npm run build && cd .. &&
   docker compose build --no-cache --force-rm &&
   docker compose up -d &&
   docker exec blog-backend bash -c "composer update" &&
   docker exec blog-backend bash -c "php artisan migrate" &&
   docker exec blog-backend bash -c "php artisan db:seed" &&
   start http://localhost:3000/
   ```

4. Check URL

   phpAdmin : http://localhost:9001/

   ```
   SERVER=mysql_db
   DB_USERNAME=laravel_user
   DB_PASSWORD=laravel_password
   ```

   Laravel : http://localhost:9000/

   Next: http://localhost:3000/

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
