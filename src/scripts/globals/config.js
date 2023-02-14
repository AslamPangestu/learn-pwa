const CONFIG = {
  KEY: process.env.API_KEY,
  BASE_URL: process.env.BASE_URL,
  BASE_IMAGE_URL: process.env.BASE_URL_IMAGE,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: process.env.IDB_NAME,
  DATABASE_VERSION: process.env.IDB_VERSION,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: process.env.WEB_SOCKET_URL,
  PUSH_MSG_VAPID_PUBLIC_KEY: process.env.PUSH_MESSAGE_KEY,
  PUSH_MSG_SUBSCRIBE_URL: `${process.env.PUSH_MESSAGE_URL}/subscribe`,
  PUSH_MSG_UNSUBSCRIBE_URL: `${process.env.PUSH_MESSAGE_URL}/unsubscribe`
}

export default CONFIG
