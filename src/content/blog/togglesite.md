---
title: Poor man's productivity hack - [togglesite]
subTitle: nimscript to edit /etc/hosts file to restrict my access to social-media and entertainment websites.
pubDate: 2024-07-04
lastModified: 2024-07-04
categories: ["micropost", "nim", "programming"]
---

```nim
#FILE: togglesite.nim
#works on nim v2.1.1
#build it with `nim c -d:release togglesite.nim`
#make sure the `togglesite` binary is in your PATH environmental variable
#use it like this: `togglesite  twitter` or `togglesite randomwebsite.com`


import sequtils, strutils, os, tables, sugar

if isAdmin().not:
    quit("ERROR: This script needs sudo permissions to edit /etc/hosts", 1)

const
    hostsFile = "/etc/hosts"
    siteMap = {
        "twitter": "x.com",
        "x": "x.com",
        "whatsapp": "web.whatsapp.com",
        "youtube": "youtube.com",
    }.toTable

let sites = commandLineParams()
var hostsInfo = readfile(hostsFile).strip.splitLines.mapit(it.strip)

for site in sites:
    var
        siteOn = "#127.0.0.1 "
        siteOff = "127.0.0.1 "

    if siteMap.hasKey(site):
        siteOn = siteOn & siteMap[site]
        siteOff = siteOff & siteMap[site]
    else:
        siteOn = siteOn & site
        siteOff = siteOff & site

    if siteOn in hostsInfo:
        hostsInfo = hostsInfo.map((line) => (if (line == siteOn): siteOff else: line))
    elif siteOff in hostsInfo:
        hostsInfo = hostsInfo.map((line) => (if (line == siteOff): siteOn else: line))
    else:
        echo "This is the first time ", site, " is getting added to /etc/hosts"
        hostsInfo.add(siteOff)

hostsFile.writeFile(hostsInfo.join("\n"))

```
