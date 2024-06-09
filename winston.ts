const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info", // Уровень логирования: 'error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'
  format: format.combine(
    format.timestamp(), // Добавляем временную метку к каждому сообщению
    format.json() // Выводим сообщения в формате JSON
  ),
  transports: [
    // Транспорт для вывода сообщений в консоль
    new transports.Console(),
    // Транспорт для записи сообщений в файл
    new transports.File({ filename: "error.log", level: "error" }), // Файл для ошибок
    new transports.File({ filename: "combined.log" }), // Общий файл журнала
  ],
});

module.exports = logger;
