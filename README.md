# IMDB Clone

This project is an IMDB clone built with Next.js, providing a sleek interface for browsing and searching movies.

## Features

- Browse popular movies
- Search for movies by title
- View detailed information about each movie
- Dynamic routing for movie pages
- Responsive design for mobile and desktop
- Dark mode support

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A TMDB API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/salonikareer/imdb.git
   ```

2. Navigate to the project directory:
   ```
   cd imdb/movieapp
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add your TMDB API key:
   ```
   API_KEY=your_tmdb_api_key_here
   ```

## Usage

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
movieapp/
│
├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── layout.jsx
│   ├── loading.jsx
│   ├── page.jsx
│   └── Providers.jsx
│
├── components/
│   ├── Card.jsx
│   ├── DarkModeSwitch.jsx
│   ├── Header.jsx
│   ├── MenuItem.jsx
│   ├── NavbarItem.jsx
│   ├── Results.jsx
│   └── SearchBox.jsx
│
├── public/
│   └── spinner.svg
│
└── next.config.js
```

## Features

### Dynamic Routing

This project uses Next.js App Router for handling dynamic routes. The `app/movie/[id]/page.jsx` file (not shown in the structure above, but likely exists) handles the dynamic routing for movie details pages.

### Dark Mode

The project includes a dark mode feature, implemented using the `DarkModeSwitch` component and the `Providers` component for theme management.

### Search Functionality

Users can search for movies using the `SearchBox` component, which likely integrates with the TMDB API to fetch search results.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Saloni Kareer

- Email: salonikareer60@gmail.com
- LinkedIn: [linkedin.com/in/saloni-kareer](https://linkedin.com/in/saloni-kareer)
- Instagram: [@frontend_perfection](https://www.instagram.com/frontend_perfection/)

Project Link: [https://github.com/salonikareer/imdb](https://github.com/salonikareer/imdb)

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [The Movie Database API](https://developers.themoviedb.org/3)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
