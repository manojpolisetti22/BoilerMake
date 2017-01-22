import webbrowser
from lxml import html
import requests
from bs4 import BeautifulSoup
import re

def getBooks(s):
	
	firstName,lastName = s.split(" ")
	page = requests.get('https://en.wikipedia.org/wiki/'+firstName+'_'+lastName)
	url = page.text

	soup = BeautifulSoup(url, 'lxml')

	biblio = soup.find('span', {'id':'Bibliography'})
	h2 = biblio.parent
	h3 = h2.findNextSiblings('ol')
	h3.extend(h2.findNextSiblings('ul'))


	empty = []
	
	for li in h3:
		obj = list(li.find_all('li'))
		for str in obj:
			if "2017" in str.text:
				empty.append(str.text)
			elif "2018" in str.text:
				empty.append(str.txt)
				#print (str.text)
			elif "2019" in str.text:
				empty.append(str.text)

	print(empty)


#getBooks(input('Enter Author: '))
