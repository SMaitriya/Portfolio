---
title: "GSB Expenses"
summary: "Class project: Extension of a web application for managing expenses with an accountant"
date: "April 14 2024"
draft: false
tags:
- Laravel
- PHP
- CSS

repoUrl: https://github.com/SMaitriya/Gsbfrais
---

I developed a specific extension for accountants as part of the standardization project for visitor expenses within the laboratory.  
This extension, integrated into the existing site, provides a dedicated platform allowing accountants to **centralize and manage all visitor expense operations**, improving financial management and the overall efficiency of the expense handling process.

---

- **Search for expenses validated by the visitor**  
I created functions allowing accountants to **easily search and access expenses that visitors have validated**.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet3.png" />

---

- **View and modify expenses validated by the visitor**  
Accountants can **consult and modify validated expenses** via an intuitive interface.  
They can also **validate expenses** and **recalculate fixed allowances**.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet%206.png" />

---

- **View expenses validated by the accountant with month filtering and PDF export**  
A feature allows accountants to **visualize all validated expenses**, **filter by month**, and **export to PDF**, providing an overview of laboratory expenses for a given period.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/projet9.png" />

---

# CODE (Using MVC Model)

---

- **Example of a view to display the visitor selection page**

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codevue.png" />

---

- **Example of routes for navigating between links**

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/coderoute.png" />

---

- **Example of a controller that displays visitor-submitted expense forms**

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codecontroller.png" />

---

- **Example of PDO code to update an expense form**  
This code modifies the **modification date** and **calculates expenses** for a given visitor.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/gsbfraisprojet/codefonction.png" />
