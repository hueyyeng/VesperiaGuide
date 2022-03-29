# Tales of Vesperia Guide

## Where to Start

1. Visit https://hueyyeng.github.io/VesperiaGuide/ for the checklist guide.
2. Clone and build/serve this repo.

## Requirements

1. Python 3.6+ (last tested with Python 3.8.10)

### Cloning the Repository:

```bash
# Clone project using https
git clone https://github.com/hueyyeng/VesperiaGuide.git
```

### Setting up a Virtualenv

It is recommended to install the project's dependencies into a virtual env.

Read more about Virtualenv over here: https://realpython.com/python-virtual-environments-a-primer/

#### For Linux

```bash
# Go into the project directory
cd VesperiaGuide

# Create a new virtualenv in a directory named 'env'
python -m venv env

# Activate the virtualenv
source env/bin/activate

# Install Python dependencies
pip install -r requirements/base.txt
```

#### For Windows

```bash
# Go into the project directory
cd VesperiaGuide

# Create a new virtualenv in a directory named 'env'
python -m venv env

# Activate the virtualenv
source env/Scripts/activate

# Install Python dependencies
pip install -r requirements/base.txt
```

### Using MkDocs to Generate the Guide

1. Make sure the current working directory has `mkdocs.yml` and **docs** directory.

```bash
# Generate the guide and serve on localhost
mkdocs serve
```

## Contact:

- [GitHub: hueyyeng](https://github.com/hueyyeng)
- [Twitter: @tauke](https://twitter.com/tauke)
