// import { findPhotosByFileName } from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import { GridFSBucket } from 'mongodb';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();
  const bucket = new GridFSBucket(db, {
    bucketName: process.env.MONGO_IMG_BUCKET,
  });
  let downloadStream = bucket.openDownloadStreamByName(req.query.filename);

  downloadStream.on('data', function (data) {
    return res.status(200).write(data);
  });

  downloadStream.on('error', function () {
    return res.status(404).send({ message: 'Cannot download the Image!' });
  });

  downloadStream.on('end', () => {
    return res.end();
  });
  // const img = await findPhotosByFileName(db, req.query.filename);
  // res.json({ img });
});

export default handler;
