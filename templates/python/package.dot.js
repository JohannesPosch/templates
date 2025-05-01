#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
{{=data.description || data.name + ' package'}}

Author: {{=data.author.fullName}} <{{=data.author.email}}>
Date: {{=data.date.toISOString().split('T')[0]}}
"""

from .core import *

__version__ = "0.1.0"
