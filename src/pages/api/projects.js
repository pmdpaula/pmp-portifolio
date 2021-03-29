import { connect } from '../../../utils/database';

export default async (req, res) => {
  const { db } = await connect();

  const projects = await db
    .collection(process.env.PORTIFOLIOS_COLLECTION)
    .find({})
    .sort({ category: 1 })
    .toArray();

  res.json(projects);
};
