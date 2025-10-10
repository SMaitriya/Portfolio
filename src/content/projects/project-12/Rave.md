---
title: "Rave – Audio Recording & Transformation App"
summary: "A React Native app built with Expo for recording audio, saving locally, uploading to a server, and applying fun sound transformations."
date: "July 15 2025"
draft: false
tags:
- React Native
- Redux

repoUrl: https://github.com/SMaitriya/Rave
---

## Project Overview

**Rave** is a mobile application built with **React Native** and **Expo** that allows users to **record audio**, **manage their recordings**, and **send them to a server for sound transformation**.

Users can apply different **audio style models** (such as *Jazz*, *Cat*, *Dog*, etc.) to creatively modify their voice recordings.

---

## Features

- High-quality microphone recording  
- Local storage with custom file naming  
- ▶Playback & pause controls  
- Secure deletion with confirmation  
- Upload recordings to a remote server  
- Apply AI-style transformation models (Jazz, Cat, Dog, etc.)

---

## App Screenshots

### Server Connection Screen

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/rave/home.jpg" width="200" />

Users can configure the **server IP and port** where the audio will be sent for processing.

---

### Recording Screen

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/rave/enregistrement.png" width="200" />

Start a new recording and view your personal **library of saved audio files**, with playback and deletion options.

---

### Post-Recording Modal

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/rave/enregistrementtest.png" width="200" />

After recording, users can **rename**, **delete**, or **listen** before saving.

---

### Model Selection

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/rave/model.png" width="200" />

Choose which **transformation model** will be applied to the audio when sent to the server.

---

### Upload & Transformation

<img src="https://raw.githubusercontent.com/SMaitriya/Portfolio/main/public/images/rave/envoiserv.png" width="200" />

Select a file from **local storage**, **recordings**, or use a **default sample**, then **send to the server and listen to the transformed result.**

---

## Technologies

- **React Native** (UI & logic)
- **Expo SDK**
- `expo-audio` for recording & playback
- **Redux Toolkit + react-redux** for state management
- `redux-persist` + AsyncStorage for saving recordings
- `@expo/vector-icons` for UI icons
- React Navigation, Gesture Handler, etc.

---
