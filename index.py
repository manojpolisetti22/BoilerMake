import webbrowser
from lxml import html
import requests
from bs4 import BeautifulSoup
import wikipedia
import re


firstName,lastName = input('Enter the author: ').split(" ")
#lastList = list(lastName)


page = requests.get('https://en.wikipedia.org/wiki/'+firstName+'_'+lastName)
url = page.text
#webbrowser.open('https://en.wikipedia.org/wiki/'+firstName+'_'+lastName, new=2)

soup = BeautifulSoup(url, 'lxml')

biblio = soup.find('span', {'id':'Bibliography'})
#print (biblio)
h2 = biblio.parent
h3 = h2.findNextSiblings('ol')
h3.extend(h2.findNextSiblings('ul'))


empty = []

for li in h3:
	obj = list(li.find_all('li'))
	for str in obj:
		#searchObj = re.search(r'/*[2017-9]*/', str.text)
		if "2017" in str.text:
			empty.append(str.text)
		elif "2018" in str.text:
			empty.append(str.txt)
			print (str.text)
		elif "2019" in str.text:
			empty.append(str.text)

print(empty)
