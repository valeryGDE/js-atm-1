import { expect } from 'chai';
import sendRequest from '../helpers/api.helper.js';
import testdata from '../config/testdata.json' assert { type: 'json' };


describe('API Test Suite', () => {
    let postId;

    it('should get() all posts', async () => {
        const response = await sendRequest('posts');

        expect(response.status).to.equal(200);
        expect(response.data[0].id).to.equal(1);
    });

    it('should create a post using post() method', async () => {
        const response = await sendRequest('posts', testdata, 'post');

        postId = response.data.id;
        expect(response.status).to.equal(201);
        const getPost = await sendRequest(`posts/${postId}`);
        expect(getPost.status).to.equal(200);
        expect(getPost.data.id).to.equal(postId);
    });

    it('should update a post using put() method', async () => {
        postId = testdata.id;
        const initialResponse = await sendRequest(`posts/${postId}`);
        const initialBody = initialResponse.data.body

        const response = await sendRequest(`posts/${postId}`, testdata, 'PUT');
        expect(response.status).to.equal(200);

        const getPost = await sendRequest(`posts/${postId}`);
        expect(getPost.status).to.equal(200);
        expect(initialBody).not.to.equal(getPost.data.body);
    });

    it('should delete a post using delete() method', async () => {
        postId = 1;
        const initialResponse = await sendRequest(`posts/${postId}`);
        expect(response.status).to.equal(200);

        const response = await sendRequest(`posts/${postId}`, null, 'DELETE');
        expect(response.status).to.equal(200);

        const getPost = await sendRequest(`posts/${postId}`);
        expect(getPost.status).to.equal(404);
    });
});  
