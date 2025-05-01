#!/usr/bin/env python{{? data.pythonVersion === '3.6+' }}3.6{{?? data.pythonVersion === '3.8+' }}3.8{{?? data.pythonVersion === '3.10+' }}3.10{{??}}3{{?}}
# -*- coding: utf-8 -*-
"""
{{=data.description || data.name}}

Author: {{=data.author.fullName}} <{{=data.author.email}}>
Date: {{=data.date.toISOString().split('T')[0]}}
"""

import sys
{{? data.includeArgparse }}
import argparse
{{?}}


{{? data.includeArgparse }}
def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(description='{{=data.description || data.name}}')
    parser.add_argument('-v', '--verbose', action='store_true', help='Enable verbose output')
    # TODO: Add more arguments as needed
    return parser.parse_args()
{{?}}


def main():
    """Main entry point of the script."""
    {{? data.includeArgparse }}
    args = parse_arguments()
    verbose = args.verbose
    {{?}}

    # TODO: Implement main functionality
    print("Hello, World!")
    {{? data.includeArgparse }}
    if verbose:
        print("Verbose mode enabled")
    {{?}}
    return 0


if __name__ == "__main__":
    sys.exit(main())
