import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

export const fetchData = (option, id) => {
  let res = null;
  if (id) {
    res = db
      .get(option)
      .chain()
      .find(id)
      .value();
  } else {
    res = db.get(option).value();
  }

  return res;
};

export const fetchProductOfCart = (option, id) => {
  let res = null;
  if (id) {
    res = db
      .get(option)
      .chain()
      .filter(id)
      .value();
  } else {
    res = db.get(option).value();
  }

  return res;
};
export const fetchAllData = (option, id) => {
  let res = null;
  if (id) {
    res = db
      .get(option)
      .chain()
      .filter(id)
      .value();
  } else {
    res = db.get(option).value();
  }

  return res;
};

export const removeCart = () => {
  db.set("cart", []).write();
};

export const updateData = (option, id, data) => {
  const res = db
    .get(option)
    .find(id)
    .assign(data)
    .write();

  return res;
};

export const sortDataDesc = (option, filter, sortBy, count) => {
  const res = db
    .get(option)
    .filter(filter)
    .sortBy(sortBy)
    .reverse()
    .take(count)
    .value();

  return res;
};

export const addData = (option, data) => {
  const res = db
    .get(option)
    .push(data)
    .write();

  return res;
};

export const removeData = (option, id) => {
  const res = db
    .get(option)
    .remove(id)
    .write();

  return res;
};
