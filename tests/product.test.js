const mongoose = require('mongoose');
const request = require('supertest');
const supertest = require('supertest');
const express = require('express');
const dotenv = require('dotenv');
const app = require('../app');
require('dotenv/config');
const dbConfig = require('./config/database.config.js');



beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("POST /api/v1/products/", () => { it("api create products", async () => { const res = await request(app).post("/api/v1/users/products").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });



beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("GET /api/v1/products/:id", () => { it("api response products", async () => { const res = await request(app).post("/api/v1/users/products/:id").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });


beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("GET /api/v1/products/get/count", () => { it("api count products", async () => { const res = await request(app).post("/api/v1/users//get/count").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });


beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("GET /api/v1/products/get/featured/:count", () => { it("api count products", async () => { const res = await request(app).post("/api/v1/users//get/featured/:count").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });


beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("PUT /api/v1/products/gallery-images/:id", () => { it("api update products", async () => { const res = await request(app).post("/api/v1/users/products").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });