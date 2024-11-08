# DreamMusic 🎵

DreamMusic is a music player application built with **React.js** for the frontend and **Node.js** for backend services. It supports drag-and-drop reordering of songs, music playback using the **Howler.js** library, and intuitive UI controls for playing, pausing, and navigating between tracks.

## Features

- 🎨 **Responsive UI**: Designed to work seamlessly across devices.
- 🎶 **Music Playback**: Play, pause, skip, and replay songs.
- 🖱️ **Drag-and-Drop**: Reorder songs interactively.
- 💾 **Backend Integration**: Serve assets using Node.js (optional).
- 🔊 **Howler.js Integration**: Robust and smooth music handling.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Music Management**: Howler.js
- **Drag-and-Drop**: react-dnd
- **Backend**: Node.js (optional, for serving assets)

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 16.x)
- npm (>= 8.x)
- npm i -g pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/0xmohitsen/DreamMusic
   cd dream-music
   ```
2. Install frontend dependencies:
   ```bash
   pnpm install
   ```
3. (Optional) Set up the backend:
   ```bash
   cd backend
   pnpm install
   ```

### Running the Application

Frontend

- Start the React.js development server:
  ```bash
  pnpm run dev
  ```

Backend (Optional)

- Serve music assets or APIs with Node.js:
  ```bash
  node server.js
  ```

### Usage

1. Drag and Drop:

- Reorder songs in the playlist by dragging them.

2. Play Music:

- Click on a song to play it.
- Use the right-side card controls to pause, play, skip, or go to the previous track.

3. Responsive Design:

- The UI adapts to mobile, tablet, and desktop screens.

### Future Improvements

- Add playlist support.
- Add user authentication for personalized playlists.
