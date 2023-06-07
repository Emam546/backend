/* eslint-disable @typescript-eslint/no-unused-vars */
import { v2 as cloudinary } from "cloudinary";
import { NodeEnvs } from "@serv/declarations/enums";
import EnvVars from "@serv/declarations/major/EnvVars";
import express, { Router } from "express";
import path from "path";
// **** Init **** //

const router = Router();
const imagesFolder = path.join(__dirname, "../../images");
