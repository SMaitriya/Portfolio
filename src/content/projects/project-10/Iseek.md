---
title: "Iseek - Music Search & Collection App"
summary: "A React Native app to search for artists and music via the iTunes API and save them in a personal collection"
date: "Oct 1 2025"
draft: false
tags:
- React Native
- API

repoUrl: https://github.com/SMaitriya/ItuneSeek

---

## Project Overview

Iseek is a mobile application built with React Native that allows users to search for artists or music tracks via the iTunes API. Users can browse search results, select their favorite items, and save them to a personal collection. The app features a two-tab navigation system: **ISeek** for searching, and **Collection** for viewing and managing saved items. The collection is persisted locally using Redux and AsyncStorage.

---

## Features

### Home / Search Page

- Users can search for **artists** or **music tracks**.
- Search queries fetch results from the iTunes API.
- Results are displayed in a list showing:
  - Artist name
  - Track title
  - Artwork (image)
- Users can add a selected item to their personal collection.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/Iseek/accueil.jpg" width="200" style="display:inline-block; margin-right:10px;" />
<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/Iseek/search.jpg" width="200" style="display:inline-block; margin-right:10px;" />
<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/Iseek/profil.jpg" width="200" style="display:inline-block;" />





---

### Collection Page

- Displays all saved artists and tracks.
- Users can **delete** items from their collection.
- Items are organized by artist name or track title.

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/Iseek/collection.jpg" width="300" />


---

### Navigation

- Bottom tab navigation with two tabs:
  - **Home**: Search page
  - **Collection**: Saved items page

---

### Technical Highlights

- **React Native + Expo**: Cross-platform mobile development.
- **iTunes API Integration**: Search for artists and tracks with API requests.
- **AsyncStorage**: Local persistence for the user’s collection and ratings.
- **FlatList**: Efficiently render search results and collection items.
- **Real-Time Updates**: Adding or removing an item updates the collection instantly.

---

