# {{=data.filename}}.yaml
# Created: {{=data.date.toISOString().split('T')[0]}}
# Author: {{=data.author.fullName}}

version: '1.0'
name: example-config

# Settings section
settings:
  environment: development
  debug: true
  log_level: info

# Features section
features:
  feature1:
    enabled: true
    options:
      - option1
      - option2
  feature2:
    enabled: false

# Additional configurations can be added below
