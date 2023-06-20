# DjNext = Django + Next.js (Boilerplate)

This is a basic boilerplate starter for a fullstack web project with Django as the server, PostgreSQL as the database and Next.js as the frontend.

# Get started with DjNext
To get a local copy of this template up and running on your machine, follow these simple steps.
### Prerequisites

#### Start with Docker
- Docker
`curl -fsSL https://get.docker.com -o get-docker.sh`
`sudo sh get-docker.sh`
- Build Project `docker-build`
- Start Project `docker-dev-up` or `docker-up`
- Stop Project `docker-dev-down` or `docker-down`

#### Start without Docker
- Download your project `git clone https://github.com/agostinhoramos/djnext && mv djnext myproject && cd myproject`
- Create virtual env `python3 -m venv env && source env/bin/activate && env/bin/python -m pip install pip pip-tools rav --upgrade`
- Build Project `rav run build`
- Start Project `rav run dev` or `rav run prd`


# In Development
- localhost:6080
- localhost:6443

# In Production
- https://localhost
- http://localhost

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Agostinho Ramos - [agostinhopina095@gmail.com](mailto:agostinhopina095@gmail.com)