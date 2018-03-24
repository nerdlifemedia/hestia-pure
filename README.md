# Hestia Pure
Hestia Pure is a simple hugo theme, based Pure.

![screenshot](https://raw.githubusercontent.com/diwao/hestia-pure/master/static/image/theme/screenshot.png)

## Installation & Usage
Clone this repository to your hugo theme directory.

```
$ git clone https://github.com/nerdlifemedia/hestia-pure.git themes/
$ hugo server --theme=hestia-pure --buildDrafts --watch
```

## Configuration
In this theme you can add variables to your site config file. The following is the example config:

```
baseurl = "/"
languageCode = "en"
title = “johnrlive’s diary“
theme = 'hestia-pure'

[author]
 author = 'johnrlive'
 profile = 'profile goes here'
 image = 'image/theme/profile.jpg'

[Params]
 localeOgp = "en"
 description = "This site is johnrlive's blog."
 keywords = "Sendai,Mac,iPhone,Web"
 twitter = "johnrlive"
 github = "johnrlive"
 facebook = "johnrlive"
 googleanalytics = "UA-12345678-9"
 googlecustomsearch = "xxxxxxxxx"
```

## Original Author
Daisuke Iwao

## Modified By
John Rodriguez

## License
MIT License
