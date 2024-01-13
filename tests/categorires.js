const mongoose = require('mongoose');
const request = require('supertest');
const supertest = require('supertest');
const express = require('express');
const dotenv = require('dotenv');
const app = require('../app');
require('dotenv/config');
const dbConfig = require('./config/database.config.js');

beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("GET /api/v1/categories", () => { it("api find categories", async () => { const res = await request(app).post("/api/v1/users//get/categories").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });


beforeEach(async () => { await mongoose.connect('mongodb+srv://AshishManer:dOfESXseJigCYQSf@cluster0.kdoubwi.mongodb.net/?retryWrites=true&w=majority'); })
describe("POST /api/v1/categories", () => { it("api CREATE categories", async () => { const res = await request(app).post("/api/v1/users//get/categories").expect(res.statusCode).toBe(201); }); })
afterEach(async () => { await mongoose.connection.close(); });