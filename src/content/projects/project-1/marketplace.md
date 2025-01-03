---
title: "Projet Marketplace"
summary: "Creation of a B2B marketplace model for my internship"
date: "Mar 15 2024"
draft: false 
tags:
- React
- Javascript
- PHP
- Laravel

repoUrl: https://github.com/SMaitriya/MarketPlace
---

During my internship at Fin de Déchet, I worked on creating a B2B marketplace for the film and television industry. This platform allows companies to share or sell goods, reducing waste in the entertainment industry and preserving the environment by promoting the reuse of sets and filming equipment. Our goal is to help make the entertainment industry more sustainable and responsible.

I chose to use Laravel for the backend and React for the frontend. After creating mockups and establishing a logical database, here is what I accomplished:

<iframe width="560" height="315" src="https://www.youtube.com/embed/zxslw7yDti8?" frameborder="0" allowfullscreen></iframe>



- Login via Breeze: Implemented a secure and seamless login process for users using Breeze.

- Product Posting by Category: Developed a feature allowing users to post goods by product category.

- Product Validation: Integrated solid validation mechanisms to ensure the quality of submitted products.

- Product Homepage: Created a dynamic page displaying all available products, providing a comprehensive overview.


Here is some of the code:


![Using the useForm hook to manage form data](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/useform.png)


- Using the useForm hook to manage form data, submission actions, processing, reset, and associated errors.

- Using the useEffect hook in React to update the "Typeproduit" data with the value of selectedProductType whenever it changes within the component.


![Using the .map() method](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/map.png)

- Using the .map() method to iterate over each filtered property, this code dynamically displays input fields. The use of setData allows updating the values of the properties in the form state based on the user's input, including a specific description for the field at index 1 for the "floor" product.



![Using Laravel](https://github.com/SMaitriya/Portfolio/raw/main/public/images/projetmarket/laravel.png)


- Extracting offers from the database using PHP Laravel, including their photos and properties, then passing them to the view for display.



