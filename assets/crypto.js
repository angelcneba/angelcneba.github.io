/*────────────────────────────────────────────────────────────────────────────────────────────────*/

class Crypto {
// Список символов для генерации пароля
    static alphabet = new Map([...new Set(
        '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    )].map((v, k) => [k, v]));
    
/*┌────────────────────────────┐
  │ Генерирует случайное число │
  └────────────────────────────┘*/
    static getRandomNumber(min = 0, max = 1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
/*┌───────────────────────────┐
  │ Генерирует случайный ключ │
  └───────────────────────────┘*/
    static getRandomKey(length = 45) {
        return Array(length).fill().map(() => this.alphabet.get(
            this.getRandomNumber(0, this.alphabet.size - 1)
        )).join('');
    }
    
/*┌───────────────────────────────────────────────┐
  │ Переводит число в 36-ричную систему счисления │
  └───────────────────────────────────────────────┘*/
    static date(number = 1) {
    // Переводим в 36-ричную систему счисления
        number = number.toString(36);
        
    // Переводим в верхний регистр (кроме i и o)
        if (number != 'i' && number != 'o') {
            number = number.toUpperCase();
        }
        
    // Возвращаем переведенное число
        return number;
    }
    
/*┌────────────────────────────────┐
  │ Возвращает зашифрованный текст │
  └────────────────────────────────┘*/
    static en(key = '', text = '') {
    // Создаем конфигурацию шифрования
        let cfg = {mode:CryptoJS.mode.CTR};
        
    // Возвращаем зашифрованный текст
        return CryptoJS.AES.encrypt(text, key, cfg).toString();
    }
    
/*┌─────────────────────────────────┐
  │ Возвращает расшифрованный текст │
  └─────────────────────────────────┘*/
    static de(key = '', text = '') {
    // Создаем конфигурацию шифрования
        let cfg = {mode:CryptoJS.mode.CTR};
        
    // Возвращаем расшифрованный текст 
        return CryptoJS.AES.decrypt(text, key, cfg).toString(CryptoJS.enc.Utf8);
    }
}

/*────────────────────────────────────────────────────────────────────────────────────────────────*/