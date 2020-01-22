import fetch from 'cross-fetch';

import config from './config';

const URL = config.PREFIX + 'blog';

export default {
    
    getBlogPosts: () => {
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL, options);
    },

    getPublishedBlogPosts: () => {
        return fetch(URL + '/published');
    },

    getBlogPostsOrder: () => {
        return fetch(URL + '/order');
    },

    getBlogPostById: id => {
        return fetch(URL + `/post/${id}`);
    },

    getBlogPostsNumber: () => {
        return fetch(URL + '/count');
    },

    createBlogPost: async data => {
        const options = {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        if (data.image) {
            let result = await fetch(URL + '/create-blog-post', options);
            result = await result.json(); 
        } else {
            return fetch(URL + '/create-blog-post', options);
        }
    },

    updateBlogPost: (data, id) => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + `/post/${id}`, options);
    },

    setPublished: (id, isPublished) => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ published: isPublished })
        };

        return fetch(URL + `/post/${id}/publish`, options);
    },

    deleteBlogPost: id => {
        const options = {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL + `/${id}`, options);
    },

    changePostsOrder: data => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + `/order`, options);
    }
};