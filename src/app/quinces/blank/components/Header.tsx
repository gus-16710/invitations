import { big, glass, mea, mystery } from "./Fonts";

function Header() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/background-stars.jpeg')] bg-center bg-cover bg-fixed relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/quinces/blank/205775-927765405_small.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-blue-600/40 to-transparent"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg2"
        fillRule="evenodd"
        width={250}
        version="1.1"
        clipRule="evenodd"
        viewBox="0 0 36063.31 6639.3385"
        fill="#b0b0b0"
        className="z-10 mb-10"
      >
        <defs>
          <linearGradient
            id="metallic-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#083347" />{" "}
            <stop offset="20%" stopColor="#0e879d" />{" "}
            <stop offset="40%" stopColor="#5eaabd" />{" "}
            <stop offset="50%" stopColor="#9fd2e0" />{" "}
            <stop offset="60%" stopColor="#5eaabd" />{" "}
            <stop offset="80%" stopColor="#0e879d" />{" "}
            <stop offset="100%" stopColor="#083347" />{" "}
          </linearGradient>
        </defs>
        <path
          id="path17"
          d="m343.49 0.0019531c-0.19-0.0080078-0.35-0.0054749-0.48 0.0078125-2.09 0.24803 4.18 3.2959 7.58 10.418 3.41 7.157 3.94 18.353 6.74 26.644 2.83 8.292 7.93 13.642 13.53 18 5.56 4.394 11.62 7.797 14.28 7.832 2.69 0 1.98-3.331 0.57-8.115-1.46-4.819-3.65-11.09-7.3-17.752-3.69-6.626-8.89-13.642-8.15-14.422 0.71-0.779 7.33 4.679 11.97 11.518 4.61 6.803 7.27 14.988 8.9 22.004 1.66 7.015 2.27 12.862 1.63 17.504-0.18 1.204-0.46 2.337-0.74 3.365-3.37-1.524-6.74-3.047-10.03-4.57-14.14-6.449-27.5-12.899-42.31-18.604-28.56-10.984-53.08-16.441-78.06-15.023-25.72 1.452-52.01 10.205-83.8 27.673-10.06 5.563-13.53 9.142-25.19 10.772-7.41 1.027-13.68 0.957-19.52-1.594-5.85-2.551-11.24-7.619-12.37-14.812-1.14-7.193 2.05-16.512 6.94-22.287 4.93-5.741 11.63-7.937 17.12-7.086 5.49 0.815 9.81 4.676 9.74 8.857s-4.5 8.647-8.47 9.604c-3.96 0.956-7.47-1.631-8.75-0.709-1.31 0.921-0.39 5.35 4.08 8.468 4.46 3.154 12.47 4.996 18.31 0.78 5.89-4.252 9.61-14.563 7.09-22.5-2.51-7.937-11.34-13.501-21.83-13.643-10.52-0.142-22.71 5.138-29.12 13.996-0.96 1.311-1.77 2.694-2.45 4.111-2.09-5.527-5.63-11.729-10.98-14.882-5.598-3.26-13.146-3.224-17.93-0.389-4.819 2.835-6.873 8.398-7.086 13.748-0.212 5.35 1.49 10.488 4.36 13.57 2.87 3.118 6.944 4.217 10.275 4.287 3.366 0.036 5.953-0.92 4.748-2.054-1.169-1.134-6.13-2.375-8.433-5.67-2.268-3.295-1.949-8.575 0.921-11.445 2.835-2.871 8.184-3.33 11.935-2.692 3.73 0.602 5.85 2.338 8.16 6.094 0.74 1.24 1.52 2.657 2.23 4.074-2.09 7.264-1.53 15.237 1.49 21.473 4.28 8.893 13.5 14.315 23.24 15.697 5.1 0.709 10.38 0.353 15.16-0.391-8.07 4.819-16.01 9.532-23.98 13.713-16.48 8.678-33.098 15.238-48.121 18.138-15.024 2.95-28.418 2.27-37.985-1.38-9.602-3.65-15.341-10.27-16.404-18.529-1.028-8.256 2.657-18.177 8.574-24.307 5.953-6.13 14.103-8.469 20.729-7.937 6.626 0.567 11.693 4.004 16.015 7.441 4.288 3.402 7.867 6.804 8.965 6.662 1.099-0.142-0.284-3.827-2.693-8.185-2.445-4.394-5.882-9.462-10.205-13.182-4.323-3.756-9.497-6.166-16.406-6.697-6.91-0.496-14.02 0.886-22.311 5.67-11.374 6.729-22.858 19.989-23.473 34.705 0.0541 4.989 0.7944 11.204 3.4417 16.109 4.9603 9.17 14.492 17.36 26.468 20.97 11.977 3.65 26.362 2.73 38.09 0.53 11.729-2.19 20.836-5.63 22.147-2.94 1.346 2.7-5.103 11.59-12.686 19.07-7.618 7.47-16.37 13.57-27.248 18s-23.882 7.19-33.023 6.2c-9.371-0.78-21.372-13.91-21.385-10.5 0.19981 4.1 8.7132 14.86 12.633 18.97 6.413 5.77 16.867 10.7 28.666 11.23 11.799 0.49 24.909-3.4 35.504-12.62 10.594-9.21 18.637-23.7 24.587-34.33 5.92-10.67 9.71-17.43 14.25-22.5 4.57-5.07 9.85-8.4 11.23-7.97 1.38 0.46-1.13 4.74-2.76 10.41-1.6 5.71-2.31 12.87-0.85 20.1 1.41 7.26 4.99 14.63 11.55 18.24 6.55 3.62 16.12 3.51 22.74-0.92 6.6-4.43 10.28-13.18 10.53-19.84 0.21-6.7-3.01-11.3-4.71-11.13-1.74 0.18-1.99 5.14-4.75 8.54-2.73 3.4-8.05 5.21-12.65 2.87-4.61-2.37-8.51-8.93-7.94-16.93 0.57-7.98 5.63-17.44 17.15-26.473 11.52-9.036 29.48-17.646 47.3-24.555 17.83-6.909 35.58-12.083 53.12-13.748s34.93 0.176 47.23 3.082c12.33 2.941 19.56 6.981 19.63 8.434 0.07 1.417-7.09 0.282-18.07-0.178-10.99-0.461-25.83-0.247-41.21 2.056-15.34 2.304-31.25 6.697-44.72 15.094-13.46 8.398-24.48 20.838-30.43 32.388-5.92 11.55-6.74 22.25-4.93 31.92 1.77 9.68 6.13 18.32 15.02 23.32 8.86 4.99 22.19 6.38 32.28 3.68 10.07-2.69 16.83-9.49 19.6-16.69 2.76-7.19 1.52-14.77-2.77-21.11-4.25-6.35-11.48-11.41-14.06-11.73-2.59-0.36-0.53 4 0.28 8.22 0.78 4.21 0.32 8.22-1.81 11.97-2.12 3.73-5.91 7.2-11.44 8.3-5.53 1.06-12.76-0.18-17.18-5.99-4.43-5.81-6.06-16.2-1.85-26.65 4.18-10.49 14.21-21.081 28.53-28.876 14.35-7.831 32.98-12.897 53.92-14.81 20.95-1.878 44.19-0.639 69.99 5.349 25.76 5.988 54.07 16.69 84.96 27.677 2.77 0.99 5.57 1.98 8.37 2.97-7.69 1.14-17.83 3.94-30.4 9.78-15.06 7.02-37.71 24.77-49.79 28.1-4.5 1.24-10.42 1.35-17.57 0.6-7.2-0.7-15.63-2.3-22.97-6.06-7.37-3.72-13.64-9.56-12.93-10.38 0.68-0.81 8.29 3.44 15.34 6.24 7.06 2.8 13.58 4.18 18.5 5 4.96 0.81 8.36 1.06 8.01-1.56-0.39-2.66-4.5-8.22-9.57-13.22-5.03-4.96-10.98-9.39-19.59-11.13-8.58-1.73-19.77-0.81-27.25-3.29-7.51-2.45-11.34-8.29-11.3-6.2 0.03 2.09 3.93 12.08 9.03 21.36 5.1 9.32 11.41 17.9 20.48 23.64 9.04 5.74 20.84 8.64 30.97 8 3.22-0.21 6.27-0.77 9.07-1.59-3.58 3.4-6.8 6.66-10.17 9.96-7.58 7.4-16.01 15.02-25.23 20.76-9.24 5.74-19.31 9.67-21.33 10.03-2.02 0.32 4.04-2.91 10.67-7.09 6.66-4.22 13.92-9.39 19.88-14.42 5.99-5.03 10.7-9.92 9.14-11.91-1.6-1.98-9.46-1.06-17.22 1.14-7.73 2.23-15.35 5.74-21.26 11.16-5.92 5.39-10.17 12.72-13.33 20.44-3.11 7.73-5.13 15.91-5.77 22.26-0.64 6.37 0.1 10.91 1.13 10.41 1.07-0.46 2.38-5.98 10.63-10.45 8.26-4.46 23.46-7.86 34.55-14.99 11.13-7.15 18.14-18.03 22.64-26.11 4.54-8.08 6.56-13.36 13.96-20.3 7.44-6.95 20.27-15.52 33.66-21.97 13.43-6.41 27.39-10.74 40.04-13.57 12.62-2.8 23.89-4.15 33.63-4.72 0.6-0.03 1.24-0.07 1.88-0.1-8.33 3.75-15.38 11.05-18.53 21.36-4.5 14.81 2.58 24.95-1.49 34.98-2.13 5.31-4.32 7.83-8.36 9s-9.96 0.99-13.4-2.7c-3.4-3.68-4.32-10.84-2.12-15.48 2.19-4.64 7.51-6.77 8.68-8.4 1.2-1.63-1.77-2.73-5.42-2.41-3.65 0.36-8.05 2.2-10.88 6.66-2.84 4.43-4.18 11.55-3.4 18.82 0.74 7.23 3.61 14.67 9.17 18.11 5.57 3.43 13.86 2.9 19.63-2.02 5.57-4.72 8.86-13.43 10.56-21.12 0.92 1.91 1.95 3.72 3.12 5.38 7.94 11.55 21.9 17.75 33.41 16.69 11.52-1.06 20.63-9.35 22.61-20.37 1.99-10.99-3.15-24.7-10.03-29.98-6.87-5.24-15.48-2.09-20.05 2.52-4.61 4.64-5.18 10.73-3.65 11.87 1.52 1.17 5.1-2.66 9.56-1.67 4.47 0.96 9.78 6.7 10.28 12.37s-3.86 11.27-9.81 12.83c-5.96 1.59-13.54-0.85-19.53-8.26-5.99-7.44-10.38-19.84-9.88-29.69 0.49-9.89 5.95-17.22 12.08-21.16 12.08-7.76 42.02 4.93 56.97 7.51 31.01 5.35 59.57 4.79 81.04 0.04 9.19-2.02 17.07-4.8 23.89-7.98 6.81 3.18 14.7 5.96 23.88 7.98 21.48 4.75 50.04 5.31 81.04-0.04 14.95-2.58 44.89-15.27 56.97-7.51 6.13 3.94 11.59 11.27 12.09 21.16 0.49 9.85-3.9 22.25-9.89 29.69-5.99 7.41-13.57 9.85-19.52 8.26-5.95-1.56-10.31-7.16-9.82-12.83 0.5-5.67 5.81-11.41 10.28-12.37 4.46-0.99 8.04 2.84 9.57 1.67 1.52-1.14 0.95-7.23-3.65-11.87-4.57-4.61-13.19-7.76-20.06-2.52-6.87 5.28-12.01 18.99-10.03 29.98 1.99 11.02 11.09 19.31 22.61 20.37s25.48-5.14 33.41-16.69c1.17-1.66 2.2-3.47 3.12-5.38 1.7 7.69 5 16.4 10.56 21.12 5.78 4.92 14.07 5.45 19.63 2.02 5.56-3.44 8.43-10.88 9.18-18.11 0.78-7.27-0.57-14.39-3.4-18.82-2.84-4.46-7.23-6.3-10.88-6.66-3.65-0.32-6.63 0.78-5.42 2.41 1.17 1.63 6.48 3.76 8.68 8.4 2.19 4.64 1.27 11.8-2.13 15.48-3.43 3.69-9.35 3.87-13.39 2.7s-6.24-3.69-8.36-9c-4.08-10.03 3.01-20.17-1.49-34.98-3.16-10.31-10.21-17.61-18.53-21.36 0.63 0.03 1.27 0.07 1.87 0.1 9.75 0.57 21.02 1.92 33.63 4.72 12.65 2.83 26.61 7.16 40.04 13.57 13.39 6.45 26.22 15.02 33.66 21.97 7.41 6.94 9.43 12.22 13.96 20.3 4.5 8.08 11.52 18.96 22.64 26.11 11.09 7.13 26.29 10.53 34.55 14.99 8.26 4.47 9.57 9.99 10.63 10.45 1.03 0.5 1.77-4.04 1.13-10.41-0.63-6.35-2.65-14.53-5.77-22.26-3.15-7.72-7.41-15.05-13.32-20.44-5.92-5.42-13.54-8.93-21.26-11.16-7.76-2.2-15.63-3.12-17.22-1.14-1.56 1.99 3.15 6.88 9.14 11.91 5.95 5.03 13.21 10.2 19.88 14.42 6.62 4.18 12.68 7.41 10.66 7.09-2.02-0.36-12.08-4.29-21.33-10.03-9.21-5.74-17.65-13.36-25.23-20.76-3.36-3.3-6.59-6.56-10.17-9.96 2.8 0.82 5.85 1.38 9.07 1.59 10.14 0.64 21.94-2.26 30.97-8 9.07-5.74 15.38-14.32 20.48-23.64 5.11-9.28 9-19.27 9.04-21.36 0.03-2.09-3.79 3.75-11.3 6.2-7.48 2.48-18.68 1.56-27.25 3.29-8.61 1.74-14.57 6.17-19.6 11.13-5.07 5-9.18 10.56-9.56 13.22-0.36 2.62 3.04 2.37 8 1.56 4.93-0.82 11.45-2.2 18.5-5s14.67-7.05 15.34-6.24c0.71 0.82-5.56 6.66-12.93 10.38-7.34 3.76-15.77 5.36-22.96 6.06-7.16 0.75-13.08 0.64-17.58-0.6-12.08-3.33-34.72-21.08-49.78-28.1-12.58-5.84-22.71-8.64-30.4-9.78 2.8-0.99 5.6-1.98 8.36-2.97 30.9-10.987 59.21-21.689 84.97-27.677 25.79-5.988 49.04-7.227 69.98-5.349 20.89 1.913 39.59 6.979 53.89 14.81 14.4 7.795 24.4 18.386 28.6 28.876 4.2 10.45 2.5 20.84-1.9 26.65s-11.6 7.05-17.2 5.99c-5.5-1.1-9.3-4.57-11.4-8.3-2.1-3.75-2.6-7.76-1.8-11.97 0.8-4.22 2.9-8.58 0.3-8.22-2.6 0.32-9.8 5.38-14.1 11.73-4.3 6.34-5.5 13.92-2.8 21.11 2.8 7.2 9.6 14 19.6 16.69 10.1 2.7 23.5 1.31 32.3-3.68 8.9-5 13.3-13.64 15-23.32 1.8-9.67 1-20.37-4.9-31.92s-17-23.99-30.4-32.388c-13.5-8.397-29.4-12.79-44.7-15.094-15.42-2.303-30.27-2.517-41.25-2.056-10.99 0.46-18.15 1.595-18.07 0.178 0.07-1.453 7.29-5.493 19.62-8.434 12.3-2.906 29.7-4.747 47.2-3.082 17.6 1.665 35.3 6.839 53.2 13.748 17.8 6.909 35.7 15.519 47.3 24.555 11.5 9.033 16.5 18.493 17.1 26.473 0.6 8-3.3 14.56-7.9 16.93-4.6 2.34-10 0.53-12.7-2.87s-3-8.36-4.7-8.54c-1.7-0.17-5 4.43-4.7 11.13 0.2 6.66 3.9 15.41 10.5 19.84s16.2 4.54 22.7 0.92c6.6-3.61 10.2-10.98 11.6-18.24 1.4-7.23 0.7-14.39-0.9-20.1-1.6-5.67-4.1-9.95-2.7-10.41 1.3-0.43 6.6 2.9 11.2 7.97 4.5 5.07 8.3 11.83 14.2 22.5 6 10.63 14 25.12 24.6 34.33 10.6 9.22 23.7 13.11 35.5 12.62 11.8-0.53 22.3-5.46 28.7-11.23 3.9-4.11 12.4-14.87 12.6-18.97 0-3.41-12 9.72-21.4 10.5-9.1 0.99-22.1-1.77-33-6.2s-19.6-10.53-27.2-18c-7.6-7.48-14.1-16.37-12.7-19.07 1.3-2.69 10.4 0.75 22.1 2.94 11.8 2.2 26.2 3.12 38.1-0.53 12-3.61 21.5-11.8 26.5-20.97 2.6-4.905 3.4-11.12 3.4-16.109-0.6-14.716-12.1-27.976-23.4-34.705-8.3-4.784-15.4-6.166-22.3-5.67-7 0.531-12.1 2.941-16.5 6.697-4.3 3.72-7.7 8.788-10.2 13.182-2.4 4.358-3.7 8.043-2.6 8.185 1 0.142 4.6-3.26 8.9-6.662 4.3-3.437 9.4-6.874 16-7.441 6.7-0.532 14.8 1.807 20.8 7.937 5.9 6.13 9.6 16.051 8.5 24.307-1 8.259-6.8 14.879-16.4 18.529-9.5 3.65-22.9 4.33-38 1.38-15-2.9-31.6-9.46-48.1-18.138-7.9-4.181-15.9-8.894-24-13.713 4.8 0.744 10.1 1.1 15.2 0.391 9.7-1.382 19-6.804 23.2-15.697 3.1-6.236 3.6-14.209 1.5-21.473 0.7-1.417 1.5-2.834 2.3-4.074 2.3-3.756 4.4-5.492 8.1-6.094 3.8-0.638 9.1-0.179 12 2.692 2.8 2.87 3.1 8.15 0.9 11.445-2.3 3.295-7.3 4.536-8.5 5.67s1.4 2.09 4.8 2.054c3.3-0.07 7.4-1.169 10.3-4.287 2.8-3.082 4.5-8.22 4.3-13.57s-2.2-10.913-7.1-13.748c-4.7-2.835-12.3-2.871-17.9 0.389-5.3 3.153-8.9 9.355-11 14.882-0.6-1.417-1.5-2.8-2.4-4.111-6.4-8.858-18.6-14.138-29.1-13.996s-19.4 5.706-21.9 13.643 1.2 18.248 7.1 22.5c5.9 4.216 13.9 2.374 18.3-0.78 4.5-3.118 5.4-7.547 4.1-8.468-1.3-0.922-4.8 1.665-8.7 0.709-4-0.957-8.4-5.423-8.5-9.604s4.2-8.042 9.7-8.857c5.5-0.851 12.2 1.345 17.2 7.086 4.8 5.775 8 15.094 6.9 22.287s-6.5 12.261-12.4 14.812c-5.8 2.551-12.1 2.621-19.5 1.594-11.7-1.63-15.1-5.209-25.2-10.772-31.8-17.468-58.1-26.221-83.8-27.673-24.97-1.418-49.49 4.039-78.05 15.023-14.81 5.705-28.16 12.155-42.3 18.604-3.3 1.523-6.67 3.046-10.03 4.57-0.29-1.028-0.57-2.161-0.75-3.365-0.63-4.642-0.03-10.489 1.64-17.504 1.63-7.016 4.28-15.201 8.89-22.004 4.64-6.839 11.27-12.297 11.97-11.518 0.75 0.78-4.46 7.796-8.14 14.422-3.65 6.662-5.85 12.933-7.3 17.752-1.42 4.784-2.13 8.115 0.56 8.115 2.66-0.035 8.72-3.438 14.28-7.832 5.6-4.358 10.7-9.708 13.54-18 2.8-8.291 3.33-19.487 6.73-26.644 3.4-7.1223 9.67-10.17 7.58-10.418-0.13-0.013534-0.29-0.016047-0.48-0.0080469-2.87 0.12314-12.61 2.6233-21.88 6.2441-9.85 3.8979-19.16 9.0699-26.04 17.326-6.84 8.256-11.19 19.595-11.83 29.729s2.48 19.064 5.6 24.131c0.35 0.602 0.74 1.132 1.09 1.629-9.81 4.393-20.09 8.894-31.28 13.677-16.91 7.193-35.83 14.952-56.59 21.292-12.12 3.72-24.84 6.95-37.17 9.53 9.67-4.57 21.01-10.66 29.2-19.52 11.05-11.975 16.37-28.948 10.49-44.433-5.89-15.448-22.93-29.444-43.09-32.527-20.16-3.118-43.44 4.643-57.33 16.867-13.89 12.26-18.43 28.984-11.48 41.28 6.94 12.295 25.4 20.193 38.8 18.423 13.35-1.73 21.68-13.108 23.6-21.931 1.87-8.823-2.66-15.13-5.6-14.74-2.94 0.389-4.26 7.512-10.81 10.949-6.59 3.437-18.39 3.223-23.88-1.666-5.53-4.855-4.75-14.387 1.52-21.686s18.11-12.402 32.18-11.232c14.1 1.134 30.5 8.541 38.37 18.32 7.87 9.815 7.23 22.039 2.73 31.748-4.5 9.748-12.83 17.038-23.85 23.418-6.77 3.9-18.6 10.17-26.25 11.23-19.28 2.7-35.3 3.16-49.5 2.13-11.72-0.85-22.23-2.75-32.04-5.87 4.44-2.72 8.3-5.56 11.69-8.34 5.98-4.96 19.88-21.065 16.25-18.609l-3 2.029c-2.2 1.56-5.42 4-9.39 6.66-6.9 4.69-16.01 10.15-25.93 14.41-9.93-4.26-19.04-9.72-25.94-14.41-3.96-2.66-7.19-5.1-9.38-6.66l-3-2.029c-3.63-2.456 10.26 13.649 16.25 18.609 3.38 2.78 7.25 5.62 11.68 8.34-9.81 3.12-20.31 5.02-32.03 5.87-14.21 1.03-30.23 0.57-49.5-2.13-7.66-1.06-19.49-7.33-26.26-11.23-11.02-6.38-19.34-13.67-23.84-23.418-4.5-9.709-5.14-21.933 2.72-31.748 7.87-9.779 24.28-17.186 38.38-18.32 14.06-1.17 25.9 3.933 32.17 11.232s7.05 16.831 1.53 21.686c-5.5 4.889-17.29 5.103-23.89 1.666-6.55-3.437-7.86-10.56-10.8-10.949-2.94-0.39-7.48 5.917-5.6 14.74 1.91 8.823 10.24 20.201 23.6 21.931 13.39 1.77 31.85-6.128 38.8-18.423 6.94-12.296 2.41-29.02-11.48-41.28-13.89-12.224-37.17-19.985-57.34-16.867-20.16 3.083-37.2 17.079-43.08 32.527-5.88 15.485-0.57 32.458 10.49 44.433 8.18 8.86 19.52 14.95 29.19 19.52-12.33-2.58-25.05-5.81-37.17-9.53-20.76-6.34-39.68-14.099-56.58-21.292-11.2-4.783-21.47-9.284-31.29-13.677 0.36-0.497 0.74-1.027 1.1-1.629 3.12-5.067 6.23-13.997 5.6-24.131-0.64-10.134-5-21.473-11.84-29.729-6.87-8.256-16.19-13.428-26.04-17.326-9.27-3.6207-19-6.1209-21.88-6.244z"
          transform="matrix(28.222 0 0 28.222 0 -.034882)"
          fill="url(#metallic-gradient)"
        />
      </svg>

      <p className={`${glass.className} text-xl text-zinc-300 z-10`}>
        ACOMPAÑAME ESTE DÍA TAN ESPECIAL
      </p>
      <p className={`${big.className} text-5xl text-metallic mt-2 z-10`}>
        ~ MIS XV AÑOS ~
      </p>
      {/* <p className={`${glass.className} text-xl text-zinc-300 mt-2 z-10`}>
        DE NUESTRA HIJA
      </p> */}

      <h1
        className={`${mea.className} text-8xl text-silver font-extrabold text-center my-10 z-10 px-5`}
      >
        Camila
      </h1>     

      <div className="flex items-center justify-center flex-col mb-2 text-zinc-300 z-10">
        <label className={`${glass.className} pb-4 text-xl`}>DICIEMBRE</label>
        <div className="flex items-center">
          <label className={`${glass.className} p-4 w-20 text-center text-2xl`}>
            SÁB
          </label>
          <label
            className={`${big.className} py-2 px-6 border-l-2 border-r-2 border-zinc-300/60 text-7xl text-metallic`}
          >
            26
          </label>
          <label className={`${glass.className} p-4 w-20 text-center text-2xl`}>
            13HRS
          </label>
        </div>
        <label className={`${glass.className} text-xl`}>2024</label>
      </div>

      <div className="absolute -bottom-1 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: "#ffff" }}
          className="rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Header;
