export async function findAllPhotos(db) {
  const images = db.collection(process.env.MONGO_IMG_BUCKET + '.files');
  const countCursor = images.estimatedDocumentCount();
  const cursor = images.find({});

  if ((await countCursor) === 0) {
    return [];
  }

  let fileInfos = [];
  if ((await countCursor) != 0) {
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: `${process.env.WEB_URI}api/img/${doc.filename}`,
        dataurl: `${process.env.WEB_URI}api/imgdata/${doc.filename}`,
      });
    });
  }
  return fileInfos;
}

export async function findPhotosByFileName(db, filename) {
  return db
    .collection(process.env.MONGO_IMG_BUCKET + '.files')
    .findOne({ filename })
    .then((photo) => photo || null);
}

export async function findPdfByFileName(db, filename) {
  return db
    .collection(process.env.MONGO_PDF_BUCKET + '.files')
    .findOne({ filename })
    .then((photo) => photo || null);
}
