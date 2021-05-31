# gemeinde-hilft

A small web application to provide or ask for help with everyday life things.

"Gemeinde hilft" is German for "Church helps".

*Please note that the audience is german and thus all texts that are shown to the end users*

## Setup

### Server

For development you need to have a postgres database and an instance of mailhog
(SMTP server for development) running.
It is recommended to use docker for this purpose. The following commands will
run postgres and mailhog in a docker container.

```
docker run --name gemeinde-hilft-mailhog -p 1025:1025 -p 8025:8025 -d mailhog/mailhog
docker run --name gemeinde-hilft-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

# Credits

This project uses SVGs from the twemoji project provided under the MIT license (https://github.com/twitter/twemoji).
