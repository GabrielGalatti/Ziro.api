export const getAll = model => async (req, res) => {
  try {
    const docs = await model
      .find({})
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body });
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send({ error: e })
      .end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const findById = model => async (req, res) => {
  try {
    const docs = await model
      .find({ _id: req.params.id })
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
export const crudControllers = model => ({
  getAll: getAll(model),
  removeOne: removeOne(model),
  createOne: createOne(model),
  findById: findById(model)
});
