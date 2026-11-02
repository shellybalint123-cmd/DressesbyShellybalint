# Shelly Balint — Atelier Website

אתר תדמית לסטודיו לשמלות כלה ושמלות ערב (Haute Couture). עברית מלאה (RTL), HTML/CSS/JS נקי — בלי התקנות ובלי build.

## הרצה
פשוט לפתוח את `index.html` בדפדפן. האתר מתארח ב-**Cloudflare Pages** (ראו למטה).

## מבנה
```
index.html          — מבנה הדף
css/style.css       — העיצוב (צבעים וגופנים מוגדרים בראש הקובץ ב-:root)
js/dresses.js       — ⭐ רשימת השמלות — כאן מחליפים שמות ותמונות
js/main.js          — סינון, Lightbox, וואטסאפ, אנימציות
images/hero.jpg     — תמונת האווירה הראשית (אנכית 3:4, כרגע Mila)
images/dresses/     — תמונות השמלות (יחס 3:4, מומלץ 1200x1600)
images/instagram/   — תמונות לסקשן האינסטגרם (נרשמות ב-INSTAGRAM_IMAGES בסוף js/dresses.js; אם ריק — מוצגות תמונות מהקולקציה)
```

## החלפת תמונות
1. מעתיקים את התמונות לתיקייה `images/dresses/`.
2. ב-`js/dresses.js` מעדכנים לכל שמלה: `title`, `category` (`'bridal'` או `'evening'`), `images`.
3. לשמלה עם כמה תמונות משתמשים ב-`images: [...]` — הראשונה ראשית, השנייה מתחלפת במעבר עכבר, וכולן בגלריה של חלון התקריב.
4. להוספת שמלה — מעתיקים בלוק `{ ... }` קיים ומשנים את הערכים (ה-`id` צריך להיות ייחודי).

כל עוד קובץ תמונה חסר, מוצג במקומו רקע עדין עם מונוגרמה — כך שהאתר נראה טוב גם לפני שהתמונות עולות.

## וואטסאפ ואינסטגרם
המספר והקישור מוגדרים בראש `js/main.js` (`CONFIG`), וגם כגיבוי ב-`index.html`.
- וואטסאפ: `972506657822`
- אינסטגרם: `https://www.instagram.com/shelly_balint/`

## להשלמה
- כתובת הסטודיו ושעות הפתיחה בפוטר (`index.html`, חלק FOOTER).

## פרסום ב-Cloudflare Pages
האתר סטטי, אין build. חיבור חד-פעמי:
1. נכנסים ל-[dash.cloudflare.com](https://dash.cloudflare.com) ← **Workers & Pages** ← **Create** ← לשונית **Pages** ← **Connect to Git**.
2. מחברים את חשבון GitHub ‏`shellybalint123-cmd` ובוחרים את הריפו `sbmedia`.
3. הגדרות:
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** ריק
   - **Build output directory:** `/`
4. **Save and Deploy**. האתר יעלה בכתובת `https://<שם-הפרויקט>.pages.dev`.

מכאן כל `push` ל-`main` מעדכן את האתר אוטומטית, וכל ענף אחר מקבל כתובת תצוגה מקדימה משלו (Preview).

אחרי שיש כתובת סופית (pages.dev או דומיין משלך דרך **Custom domains**), מעדכנים ב-`index.html` את `og:url`, `og:image` ו-`canonical`.

הקובץ `_headers` מגדיר כותרות אבטחה ו-cache לתמונות/CSS/JS.
