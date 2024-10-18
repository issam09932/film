import { create } from 'zustand'

export const useStore = create((set) => ({
  MovieList: [],
  setMovieList: (newList) => set({ MovieList: newList }),
  addMovie: (movie) => set((state) => ({ 
    MovieList: [...state.MovieList, movie] 
  }))},
  {
    MovieList: [],
    selectedMovie: null,
    setMovieList: (newList) => set({ MovieList: newList }),
    addMovie: (movie) => set((state) => ({ 
      MovieList: [...state.MovieList, movie] 
    })),
    setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  
}))