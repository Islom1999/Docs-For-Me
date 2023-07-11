# Docker hubga image yuklash

Docker Hub, rasmiy Docker image registry-sidir va uning orqali ommaviy Docker image-larni o'rnatish, ulardan foydalanish va ulardan foydalanuvchilar bilan ulashish mumkin. Docker image-ni Docker Hub ga yuklash uchun quyidagi qadamlarni izohlashingiz mumkin:

1. Docker Hub hisobingizni yarating: Docker Hub-da hisob ochish uchun `https://hub.docker.com/` saytiga kirib, "Sign Up" tugmasini bosing va talabnomalarni to'ldiring.

2. Docker image-ni tag qiling: O'zingizning lokal Docker image-ningizga mavjud bo'lgan nomni va versiyani Docker Hub registry-si uchun tag qiling. Buning uchun quyidagi komandani ishlatishingiz mumkin:

```shell
docker tag local_image:tag username/repository:tag
```

Bu komandada `local_image` o'zingizning lokal Docker image-nizning nomi, `tag` esa versiya raqami. `username/repository` esa Docker Hub-da yaratganiz yoki nomlangan repository-ni ifodalaydi.

3. Docker Hub-ga kirish: Terminalda Docker Hub-ga kirish uchun quyidagi komandani ishlatishingiz mumkin:

```shell
docker login
```

Bu komanda ishga tushirilgach, sizdan Docker Hub foydalanuvchi nomi va parolni so'raydi. Ular haqida ma'lumotlarni kiriting va kirishni yakunlang.

4. Docker image-ni Docker Hub-ga yuklash: Docker image-ni Docker Hub-ga yuklash uchun quyidagi komandani ishlatishingiz mumkin:

```shell
docker push username/repository:tag
```

Bu komanda Docker Hub-ga yuklanayotgan image-ni aniqlaydi. `username/repository:tag` qismida yuqoridagi taglangan nomni va versiyani kiriting.

Komanda ishga tushirilgach, Docker image-ni sizning Docker Hub repository-ingizga yuklanadi.

5. Docker Hub-da image-ni tekshirish: Docker Hub-da yuklangan image-ni tekshirish uchun, Docker Hub saytida repository-ingizga kirib, yuklangan image-ni topishingiz mumkin. Uning nomi va versiyasi orqali uni aniqlashingiz mumkin.

Shu qadamga asosan yuqoridagi jarayonlarni amalga oshirishingiz mumkin va Docker image-ni Docker Hub-ga yuklashingiz mumkin. Bu, image-ni ommaviy ravishda o'rnatish, ulardan foydalanish va ulardan ulashishni osonlashtiradi.