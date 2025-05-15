import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginationpage',
  templateUrl: './paginationpage.component.html',
  styleUrls: ['./paginationpage.component.scss'],
  imports: [CommonModule] ,
  standalone: true
  
})
export class PaginationpageComponent {

  // movies: any[] = [];
  // currentPage: number = 1;
  // itemsPerPage: number = 10;
  // loading: boolean = false;
  // totalCount: number = 0;

  // constructor(private http: HttpClient) {
  //   this.fetchMovies();
  // }

  // fetchMovies(): void {
  //   this.loading = true;
  //   const headers = new HttpHeaders({
  //     'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
  //     'x-rapidapi-key': 'cdc9ef00ebmsh46f4dcc5055a237p18d547jsn7ac639bb524e'
  //   });

  //   const apiUrl = `https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=${this.itemsPerPage}&page=${this.currentPage}`;

  //   this.http.get<any>(apiUrl, { headers }).subscribe(
  //     (response) => {
  //       this.movies = response.data.movies.slice(0, this.itemsPerPage);
  //       this.totalCount = response.data.movie_count;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       console.error('Failed to fetch movies:', error);
  //       this.loading = false;
  //     }
  //   );
  // }

  // nextPage(): void {
  //   if (this.currentPage * this.itemsPerPage < this.totalCount) {
  //     this.currentPage++;
  //     this.fetchMovies();
  //   }
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.fetchMovies();
  //   }
  // }



  movies: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalCount: number = 0;
  totalPages: number = 0;
  visiblePages: number[] = [];
  isCardView: boolean = true; // Default to card view

  constructor(private http: HttpClient) {
    this.fetchMovies();
  }

  toggleView(): void {
    this.isCardView = !this.isCardView;
  }

  fetchMovies(): void {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com',
      'x-rapidapi-key': '3a1264ace8mshd1e55b3004926dbp1f6f1cjsnc71f40e1a0b0'
    });

    const apiUrl = `https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=${this.itemsPerPage}&page=${this.currentPage}`;

    this.http.get<any>(apiUrl, { headers }).subscribe(
      (response) => {
        this.movies = response.data.movies;
        this.totalCount = response.data.movie_count;
        this.totalPages = Math.ceil(this.totalCount / this.itemsPerPage);
        this.updateVisiblePages();
      },
      (error) => {
        console.error('Failed to fetch movies:', error);
      }
    );
  }

  updateVisiblePages(): void {
    this.visiblePages = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages, this.currentPage + 2);

    if (this.currentPage <= 3) {
      start = 1;
      end = Math.min(this.totalPages, maxVisible);
    } else if (this.currentPage > this.totalPages - 3) {
      start = Math.max(1, this.totalPages - (maxVisible - 1));
      end = this.totalPages;
    }

    for (let i = start; i <= end; i++) {
      this.visiblePages.push(i);
    }
  }

  loadPage(page: number): void {
    this.currentPage = page;
    this.fetchMovies();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchMovies();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies();
    }
  }
  }
  




