export interface simpleBlogCard {
    title: string;
    smalldescription: string;
    currentSlug: string;
    titleImage: any;
  }
  export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: string; // Assuming this will hold a URL
}