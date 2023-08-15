export interface User {
    id?: number,
    username?: string,
    full_name?: string,
    profile_picture?: string,
    profile_description?: string
  }
  
export interface IThreadCard {
    // posted_at: string,
    content: string,
    image: string,
    // like_count: number,
    id: number,
    // replies_count: number,
    // is_liked: boolean
    user?: User
}

export interface IAddContent {
    content: string,
    image: string,
}