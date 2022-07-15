// const util = require('util');
// const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

export const storage = GridFsStorage({
  url: process.env.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg', 'application/pdf'];
    const splitName = file.originalname.toLowerCase().split(' ').join('_');
    const theFName = `${Date.now()}-raycorp-${splitName}`;
    if (match.indexOf(file.mimetype) === 2) {
      return {
        bucketName: process.env.MONGO_PDF_BUCKET,
        filename: theFName,
      };
    } else if (
      match.indexOf(file.mimetype) === 0 ||
      match.indexOf(file.mimetype) === 1
    ) {
      return {
        bucketName: process.env.MONGO_IMG_BUCKET,
        filename: theFName,
      };
    } else {
      const filename = theFName;
      return filename;
    }
  },
});

// var uploadFiles = multer({ storage: storage }).array('file', 10);
// // var uploadFiles = multer({ storage: storage }).single("file");
// var uploadFilesMiddleware = util.promisify(uploadFiles);
// // uploadFilesMiddleware();
// module.exports = uploadFilesMiddleware;
