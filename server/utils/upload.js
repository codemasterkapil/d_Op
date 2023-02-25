
import dotenv from 'dotenv';
dotenv.config();

const password=process.env.DB_PASSWORD;
const username=process.env.DB_USERNAME;

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({

   url:`mongodb://${username}:${password}@ac-qg1lqyk-shard-00-00.btb2lda.mongodb.net:27017,ac-qg1lqyk-shard-00-01.btb2lda.mongodb.net:27017,ac-qg1lqyk-shard-00-02.btb2lda.mongodb.net:27017/?ssl=true&replicaSet=atlas-2401mc-shard-0&authSource=admin&retryWrites=true&w=majority`,

    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 