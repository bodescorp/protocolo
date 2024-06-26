import multer from "multer"
import path from 'path'
import crypto from "crypto"
import aws from "aws-sdk"
import multerS3 from "multer-s3"
import dotenv from 'dotenv'


dotenv.config();


const storageTypes = {
    local: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'));
        },
        filename: (request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) {
                    callback(error,null);
                }
                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                callback(null, fileName);
            });
        },
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (request, file, callback) => {
            crypto.randomBytes(16, (error, hash) => {
                if (error) callback(error);

                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                callback(null, fileName);
            });
        }
    })
};

export const multerConfig = {
    dest: path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads'),
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: 32 * 1024 * 1024
    },
    fileFilter: (request, file, callback) => {
        const allowedMimes = [
            "application/pdf"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Invalid file type."));
        }
    }
};