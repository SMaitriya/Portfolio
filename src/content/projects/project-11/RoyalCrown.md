---
title: "E-Commerce Royal Crown"
summary: "An online store built with Symfony featuring category navigation, shopping cart, authentication, and order confirmation."
date: "Mar 25 2025"
draft: false
tags:
- Symfony
- Tailwind
- E-Commerce

repoUrl: https://github.com/SMaitriya/E-Commerce-Symfony

---

## Project Overview

**E-Commerce Royal Crown** is an online store built with **Symfony** and styled with **Tailwind CSS**.  
Users can browse products through two main categories (**Elegance** and **Sport**), view product details, add items to their cart, and place an order after authentication.

The app also includes a **user account area** and an **admin back-office** for product management.

---

## Features

### Home Page

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/home.png" />

The home page displays the two main product categories: **Elegance** and **Sport**.  
Users can quickly navigate to a category and see highlighted products.

---

### Category Page

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/categorie.png" />

The category page shows all products within the selected category (Elegance or Sport).  
Each product card displays the **image, name, price**.

---

### Product Page

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/produit.png" />

The product page includes detailed **information about the product**, such as images, description and price.
Users can select the desired quantity and **add the product to the cart**.

---

### Cart

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/cart.png" />

The cart page lists all added products.  
Users can **update quantities**, **remove items**, and see a **summary of the total** including a **fixed shipping fee**.

---

### Order Confirmation

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/confirmation.png" />

Once the order is placed, a confirmation page is displayed.  
It includes a **delivery address** and estimated arrival notice.

---

### Authentication

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/login.png" />

Users must **sign up or log in** to place an order.  
The authentication system stores user information and delivery address.

---


### Admin Back-office

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/admin.png" />
<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/royalcrown/modifier.png" />

The admin panel allows the administrator to **create, edit, and delete products**.  
Product management is simplified with a clear interface and form validation.

---

## Tech Stack

- **PHP 8.2+ / Symfony 7.2.5**
- **Tailwind CSS**
- **Doctrine & Fixtures**
- **MySQL**
- **Sessions for cart & user handling**
