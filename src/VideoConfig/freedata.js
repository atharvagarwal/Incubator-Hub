import React,{useState,useEffect} from 'react'

export const Videolist = [
    {
      id: 1,
      title: '7 CSS tools you should be using ',
      category: 'development',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://www.youtube.com/embed/lpfxdFyJyzI',
    },
    {
      id: 2,
      title: 'Milan Places That Highlight The City',
      category: 'travel',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://www.youtube.com/embed/j6kCPJNqHG4',
    },
    {
      id: 3,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: 'https://www.youtube.com/embed/snychWgbJxU',
    },
   
  ];
  