# DjNext = Django + Next.js (Boilerplate)

This is a basic boilerplate starter for a fullstack web project with Django as the server, PostgreSQL as the database and Next.js as the frontend.

# Get started with DjNext
To get a local copy of this template up and running on your machine, follow these simple steps.
## Prerequisites
- Docker `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh`
- Git
- Python
- Node

## Quickstart
- Download your project `git clone https://github.com/agostinhoramos/djnext && mv djnext myproject && cd myproject`
- Create virtual env `python3 -m venv env && source env/bin/activate && env/bin/python -m pip install pip pip-tools rav --upgrade`

    #### with Docker
    - Activate virtual env `source env/bin/activate`
    - Build Project `rav run docker-build`
    - Start Project `rav run docker-dev-up` or `rav run docker-up`
    - Stop Project `rav run docker-dev-down` or `rav run docker-down`

    #### without Docker
    - Activate virtual env `source env/bin/activate`
    - Build Project `rav run build`
    - Start Project `rav run dev-up` or `rav run prd-up`
    - Start Project `rav run dev-down` or `rav run prd-down`

# URL for development
- localhost:6080
- localhost:6443

# URL for production
- https://localhost (443)
- http://localhost (80)

## Some routes
- http://localhost (Frontend page)
- http://localhost/dn-admin (Backend panel)
- http://localhost/_api (Backend API)

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Agostinho Ramos - [agostinhopina095@gmail.com](mailto:agostinhopina095@gmail.com)