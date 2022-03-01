<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Easy CVE</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/dyoder838/deepsurface_project/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/dyoder838/deepsurface_project/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Manipulating JSON to visualize data
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project is an exercise in manipulating and viewing CVE data from a large Json file.

planning phases:
- [Phase 1](https://github.com/dyoder838/deepsurface_project/projects/1) - Creating basic page layout - concept

- [Phase 2](https://github.com/dyoder838/deepsurface_project/projects/2) - Basic search functionality - WIP



## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

Just clone the repo and run "npm i" in your terminal

### Prerequisites

What things you need to install the software and how to install them.

```
Node.js
npm
```

### Installing

Clone the repo

```
git clone git@github.com:dyoder838/deepsurface_project.git
```

In your terminal run

```
npm i
```


## 🔧 Running the tests <a name = "tests"></a>

There are no automated tests at this time


## 🎈 Usage <a name="usage"></a>

The interface is minimal, the buttons are still hard coded in the current version. 
A user can navagate Main, Dashboard, or Analysis pages via the nav bar. 

The Analysis page is meant to show the user vulnerability trends by targeted system. currently the buttons only give results for Microsoft systems. 

The graph shows all of the CVE reports in an ascending timeline with their associated "risk" levels (risk/time by OS, the timeline is currently in julian date format). This is to show a user the frequency and severity of vulnerabilitys they may be facing with their selected OS. 
further implementation will show comparisons of each system and average risk for each based on the average risk of the vulnerability as compared to the occurance of vulnerabilities. 

The Main page is intended to be a general search page and is not well developed - clicking on "see all curent CVEs" will redirect a user to the dashboard. 
"Advanced" button is currently undeveloped 

The Dashboard page loads all 500 of the CVEs from the json file and displays them. 


## 🚀 Deployment <a name = "deployment"></a>

There is no live deployment at this time 

## ⛏️ Built Using <a name = "built_using"></a>

- [Fuse.js](https://fusejs.io/) - Fuzzy Search Library 
- [React](https://reactjs.org/) - Front End 
- [MUI](https://mui.com/) - CSS Framework
- [Recharts](https://recharts.org/en-US/) - Lharting Library

## ✍️ Authors <a name = "authors"></a>

- [@dyoder838](https://github.com/dyoder838) - Idea & Initial work


