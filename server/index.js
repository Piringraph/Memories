import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(corse());

const CONNECTION_URL = 'mongodb+srv://pirin:pirin@cluster0.wotxga1.mongodb.net/?retryWrites=true&w=majority'