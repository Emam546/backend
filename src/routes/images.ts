import { v2 as cloudinary } from "cloudinary";
import { NodeEnvs } from "@src/declarations/enums";
import EnvVars from "@src/declarations/major/EnvVars";
import express, { Router } from "express";
import path from "path";
// **** Init **** //

const router = Router();
const imagesFolder = path.join(__dirname, "../../images");