# 📔 Upload file

# 1 - Tushuncha

NestJS-da fayllarni yuklash uchun, multer middleware-dan foydalanish mumkin. Multer, Node.js uchun eng ko'p ishlatiladigan middlewarelar orasida, unda fayl yuklash imkoniyati mavjud.

Birinchi qadam sifatida, multer paketini o'rnatish kerak. Bu quyidagi buyruq orqali amalga oshiriladi:

```
npm install --save multer

```

Keyin, Multer modulini app.module.ts fayliga import qilish kerak:

```tsx
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class AppModule {}

```

Yuqoridagi misolda, yuklanadigan fayllar avtomatik ravishda `./uploads` katalogiga saqlanadi.

Endi, biror controllerda fayllarni qabul qilish uchun bir route yaratishimiz kerak. Quyidagi misolda, `UploadController` nomli controller yaratilgan, u `uploadFile` metodini ishga tushiradi. Ushbu metod, faylni yuklab olishni boshqaradi:

```tsx
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }
}

```

Bu yerda `FileInterceptor` nomli interceptor Multer-dan kelib chiqqan, va `file` degan nomli form maydonini qabul qiladi. `@UploadedFile()` decoratori orqali, yuklangan faylni metod parametri sifatida olamiz.

Endi, siz client tarafiga POST so'rov jo'natishingiz kerak, va form-data sifatida `file` maydonini yuklash kerak. Siz postman yoki boshqa HTTP client-dan foydalanishingiz mumkin.

Agar siz fayllarni yuklash jarayonini boshqarish uchun ko'proq nazoratga ega bo'lishni istasangiz, yoki fayllarni boshqa joyga yuklashni xohlasangiz, Multer konfiguratsiyasini o'zgartirishingiz kerak. Buning uchun multer documentation-ga murojaat qilishingiz mumkin.

# 2 - Hayotiy misol

Quyidagi misolga e'tibor bering. Ushbu misolda, faylni yuklash, faylni saqlash uchun ishlatiladigan nomni aniqlash, faylni tekshirish va natijani qaytarish kabi operatsiyalar ko'rsatilgan.

Birinchi bo'lib, o'rnatilishi kerak bo'lgan paketlarni o'rnating:

```
npm install --save multer
npm install --save @types/multer

```

Keyin, `uploads` papkasini yaratamiz va uni Multer uchun destinatsiya sifatida ko'rsatamiz:

```tsx
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
})
export class AppModule {}

```

Keyin, `upload.controller.ts` nomli yangi faylni yaratamiz va uni quyidagicha to'ldiramiz:

```tsx
import { Controller, Post, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }
    })
  }))
  async uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new HttpException('No file provided', HttpStatus.BAD_REQUEST);
    }
    return {
      fileName: file.filename,
      originalName: file.originalname,
      path: file.path
    };
  }
}

```

Bu yerda, `diskStorage` funksiyasini ishlatib, saqlash strategiyasini tuzdik. `destination`ga fayllarni saqlash joyini ko'rsatdik, `filename`ga esa faylni qanday nomlash kerakligini ko'rsatdik.

Faylni yuklashdan oldin uni tekshirib, agar fayl mavjud bo'lmasa, HTTP 400 (Bad Request) xatosini yuboramiz. Agar fayl yuklangan bo'lsa, fayl haqida ma'lumotni qaytarib beramiz.

Endi, siz clientdan POST so'rov yuborishingiz kerak, va form-data sifatida `file` maydonini yuborishingiz kerak. Siz Postman yoki boshqa HTTP klientidan foydalana olasiz. Post so'rovi quyidagicha bo'lishi kerak:

```
POST /upload

```

Form-data maydonlarida:

```
file: (your file here)

```

Agar yuklash muvaffaqiyatli bo'lsa, server quyidagi javobni qaytaradi:

```tsx
{
  "fileName": "randomlyGeneratedFileName.extension",
  "originalName": "originalFileName.extension",
  "path": "uploads/randomlyGeneratedFileName.extension"
}

```

Bu javob, yuklangan faylning serverdagi nomini (`fileName`), faylning original nomini (`originalName`) va faylning serverdagi to'liq yo'lini (`path`) qaytaradi.

Shuni yodda tutingki, yuklangan fayllarni o'zgartirish yoki o'chirish uchun sizga qo'shimcha routelar yaratish kerak bo'ladi. Shuningdek, amaliyotda, fayllarni yuklash va ularga murojaat qilish uchun to'liq muhofaza qilinadigan yo'l, masalan, Amazon S3 kabi tashqi xizmatlarga yuklashni ko'zdan kechirishingiz mumkin.

Yuklab olish jarayonida faylni tekshirish uchun, multer-ni `fileFilter` funksiyasini ishlatishingiz mumkin. Bu funksiya, fayl yuklanishini ruxsat berish yoki rad etish uchun ishlatiladi. Quyidagi misolda, faqat jpeg yoki png fayllarini qabul qilish uchun `fileFilter` funksiyasini qo'shganman:

```tsx
@Post()
@UseInterceptors(FileInterceptor('file', {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
      return cb(null, `${randomName}${extname(file.originalname)}`);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/\\/(jpg|jpeg|png)$/)) {
      cb(null, true);
    } else {
      cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
    }
  }
}))
async uploadFile(@UploadedFile() file) {
  if (!file) {
    throw new HttpException('No file provided', HttpStatus.BAD_REQUEST);
  }
  return {
    fileName: file.filename,
    originalName: file.originalname,
    path: file.path
  };
}

```

Bu yerda, `fileFilter` funksiyasi faylning MIME tipini tekshiradi va faqat jpeg yoki png fayllarini qabul qiladi. Agar boshqa turi bo'lgan fayl yuklanmoqchi bo'lsa, HTTP 400 (Bad Request) xatosi bilan "Unsupported file type" xabarini qaytaradi.