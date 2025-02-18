import os
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.utils.keyboard import ReplyKeyboardBuilder
from aiogram.filters import CommandStart

# Настройка логирования
logging.basicConfig(level=logging.INFO)

# Инициализация бота
bot = Bot(token="<Токен бота>")
dp = Dispatcher()

# Команда /start
@dp.message(CommandStart())
async def start(message: types.Message):
    web_app_info = types.WebAppInfo(url="<ваша ссылка на сайт>")  # Укажите ссылку на ваш сайт
    builder = ReplyKeyboardBuilder()
    builder.add(types.KeyboardButton(text="Валентинка", web_app=web_app_info))
    
    await message.answer("Нажми на валенинку💓", reply_markup=builder.as_markup())

# Запуск бота
async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())