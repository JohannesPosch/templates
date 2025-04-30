
# author: {{=data.author.fullName}}
# date: {{=data.date.getFullYear()}}-{{=data.date.toLocaleString('en-US', {month: 'short'})}}-{{=data.date.getDate()}}
{{? data.argparse }}
import argparse
{{?}}

This is python script from repository templates.

def main():
	pass

if __name__ == '__main__':
	main()
