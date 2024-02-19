// const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL_TASKS = "https://wedev-api.sky.pro/api/kanban";
const API_URL_CREATE_TASK = "https://wedev-api.sky.pro/api/kanban";
const API_URL_DELETE_TASK = "https://wedev-api.sky.pro/api/kanban";
const API_URL_SAVE_TASK = "https://wedev-api.sky.pro/api/kanban";

export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function registration({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function getTasks({ token }) {
  const response = await fetch(API_URL_TASKS, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function createTask({ title, description, topic, date, token }) {
  const response = await fetch(API_URL_CREATE_TASK, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      topic,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function saveTask({id, title, status, description, topic, date, token }) {
  const response = await fetch(API_URL_SAVE_TASK + "/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      status,
      description,
      topic,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function deleteTask({id, token }) {
  const response = await fetch(API_URL_DELETE_TASK + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

