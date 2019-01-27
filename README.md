# Tales of Vesperia Guide
## Where to Start

1. Visit https://hueyyeng.github.io/VesperiaGuide/ for the checklist guide.
2. Use the checkbox as keep track of the events.

## Requirements

1. Python 3.6+ (have not tested with older version)

### Cloning the Repository:
```bash
# Clone project using https
git clone https://github.com/hueyyeng/VesperiaGuide.git
```

### Setting up a Virtualenv

It's recommended to install the project's dependencies into a virtual env.

Read more about Virtualenv over here: https://realpython.com/python-virtual-environments-a-primer/
```bash
# Go into the project directory
cd VesperiaGuide

# Create a new Python 3.6 virtualenv in a directory named 'env'
virtualenv -p python3.6 env

# Activate the virtualenv
source env/bin/activate

# Install Python dependencies
pip install -r requirements/base.txt
```

### Using MkDocs to Generate the Guide

1. Make sure the current working directory has `mkdocs.yml`, __docs__ and __custom_theme__ directories.

```bash
# Generate the guide and serve on localhost
mkdocs serve
```


## Contact:

- [GitHub: hueyyeng](https://github.com/hueyyeng)
- [Twitter: @tauke](https://twitter.com/tauke)