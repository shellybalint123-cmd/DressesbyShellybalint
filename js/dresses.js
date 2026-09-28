/**
 * ==========================================================
 *  רשימת השמלות באתר — Shelly Balint Atelier
 * ==========================================================
 *  כדי להחליף לתמונות האמיתיות:
 *  1. שימי את קבצי התמונות בתיקייה images/dresses/
 *  2. בשדה images רשמי את כל התמונות של השמלה — הראשונה היא התמונה הראשית,
 *     השנייה מופיעה במעבר עכבר, וכולן מוצגות בגלריה בחלון התקריב.
 *     (לשמלה עם תמונה אחת אפשר גם לכתוב image: '...' במקום images)
 *  3. עדכני את title (שם השמלה) ואת description (תיאור קצר)
 *
 *  category: 'bridal'  = קולקציית כלות
 *            'evening' = שמלות ערב
 *
 *  מומלץ: תמונות אנכיות ביחס 3:4 (למשל 1200x1600 פיקסלים).
 *  כל עוד קובץ התמונה לא קיים — יוצג רקע עדין במקומו.
 * ==========================================================
 */
window.DRESSES = [
  {
    id: 'mila',
    title: 'Mila',
    category: 'bridal',
    images: [
      'images/dresses/mila-1.jpg',
      'images/dresses/mila-2.jpg',
      'images/dresses/mila-3.jpg'
    ],
    description: 'שמלת הולטר מסאטן משי זורם, מחשוף וי עמוק ודרמטי וקפלי שיפון רכים שנאספים לקשר עדין במותן. הגזרה נצמדת לגוף ונפתחת לשובל רך — אלגנטיות נקייה ועל־זמנית.'
  },
  {
    id: 'celeste',
    title: 'סלסט',
    category: 'bridal',
    image: 'images/dresses/bridal-02.jpg',
    description: 'תחרה צרפתית בעבודת יד על בסיס טול אוורירי, שרוולים ארוכים שקופים וחצאית מלאה ונשפכת.'
  },
  {
    id: 'noa',
    title: 'נועה',
    category: 'bridal',
    image: 'images/dresses/bridal-03.jpg',
    description: 'גזרת מרמייד מחמיאה מסאטן כבד, קווים נקיים ומינימליסטיים ושובל ארוך ומרשים.'
  },
  {
    id: 'lumiere',
    title: 'לומייר',
    category: 'bridal',
    image: 'images/dresses/bridal-04.jpg',
    description: 'מחוך מובנה רקום בחרוזי קריסטל, חצאית אורגנזה בשכבות ותחושה של אור רך בכל תנועה.'
  },
  {
    id: 'elisheva',
    title: 'אלישבע',
    category: 'bridal',
    image: 'images/dresses/bridal-05.jpg',
    description: 'שמלה צנועה ואלגנטית עם צווארון גבוה, שרוולי תחרה ארוכים וחגורת סאטן דקה במותן.'
  },
  {
    id: 'noir',
    title: 'נואר',
    category: 'evening',
    image: 'images/dresses/evening-01.jpg',
    description: 'שמלת ערב שחורה מקטיפה, כתף אחת חשופה ושסע גבוה — קלאסיקה על־זמנית לערב בלתי נשכח.'
  },
  {
    id: 'champagne',
    title: 'שמפניה',
    category: 'evening',
    image: 'images/dresses/evening-02.jpg',
    description: 'סאטן בגוון שמפניה נוצץ, כתפיות דקות וגזרה נשפכת שעוטפת את הגוף ברכות.'
  },
  {
    id: 'rose',
    title: 'רוז',
    category: 'evening',
    image: 'images/dresses/evening-03.jpg',
    description: 'שיפון בגוון ורוד עתיק, מחשוף וי עדין ושכבות קלילות שזזות איתך על רחבת הריקודים.'
  },
  {
    id: 'emerald',
    title: 'אמרלד',
    category: 'evening',
    image: 'images/dresses/evening-04.jpg',
    description: 'ירוק אמרלד עמוק במשי כבד, קורסט מובנה וחצאית עפרון ארוכה — נוכחות שקטה ומלכותית.'
  }
];
