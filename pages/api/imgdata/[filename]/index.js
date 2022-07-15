import { findPhotosByFileName } from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();
  const img = await findPhotosByFileName(db, req.query.filename);
  let data = { ...img };
  data.url = `${process.env.WEB_URI}api/img/${data.filename}`;
  data.dataurl = `${process.env.WEB_URI}api/imgdata/${data.filename}`;
  res.json({ img: data });
});

export default handler;
