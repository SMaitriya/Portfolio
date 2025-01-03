---
title: "HTauto"
summary: "Car Catalogue"
date: "Oct 20 2023"
draft: false
tags:
- PHP
- CSS
- HTML
---

This project aims to create a web application for managing a car catalog using the MVC (Model-View-Controller) method in PHP. The application allows users to log in, search for cars by type and brand, and perform various operations such as adding new types/brands, modifying cars, and changing their password. Error handling is also integrated to ensure a smooth user experience.

- MVC Method
- Adding a new car type/brand
- CSS Modifications
- Password change



![Htauto](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/htautoprojet.png)

Detailed Features:

- The project is structured according to the MVC model, making it easy to maintain and extend. The directory structure is as follows:

![MVC](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/codemvc.png)



-A navigation menu has been added to allow users to easily access the features for adding car types/brands and changing their password.

![Menu](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/menu.png)



Example of the 'Add a Car Brand' View :


![View Add](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/vueajout.png)



- The main controller handles the different possible actions using cases for each functionality, such as the car list, adding a type/brand, and changing the password.

![Case Add](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/caseajout.png)



- In this project, the functions are separated into distinct files to ensure a modular structure and improved maintainability. For example, a specific function was added in the user controller to handle password changes. This feature processes the password change form and updates the information in the database once all required conditions are met.

![Fonction Update Mot de Passe](https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/projethtauto/fontionupdatemdp.png)
