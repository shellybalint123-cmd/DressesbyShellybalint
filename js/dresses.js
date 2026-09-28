/**
 * ==========================================================
 *  רשימת השמלות באתר — Shelly Balint Atelier
 * ==========================================================
 *  כדי להחליף לתמונות האמיתיות:
 *  1. שימי את קבצי התמונות בתיקייה images/dresses/
 *  2. בשדה images רשמי את כל התמונות של השמלה — הראשונה היא התמונה הראשית,
 *     השנייה מופיעה במעבר עכבר, וכולן מוצגות בגלריה בחלון התקריב.
 *     (לשמלה עם תמונה אחת אפשר גם לכתוב image: '...' במקום images)
 *  3. עדכני את title (שם השמלה)
 *
 *  category: 'bridal'  = קולקציית כלות
 *            'evening' = שמלות ערב
 *
 *  שמלות הערב שמתחת הן עדיין דוגמאות זמניות — יוחלפו כשיגיעו תמונות אמיתיות.
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
    ]
  },
  {
    id: 'luna',
    title: 'Luna',
    category: 'bridal',
    images: [
      'images/dresses/luna-1.jpg',
      'images/dresses/luna-2.jpg'
    ]
  },
  {
    id: 'alex',
    title: 'Alex',
    category: 'bridal',
    images: [
      'images/dresses/alex-1.jpg',
      'images/dresses/alex-2.jpg'
    ]
  },
  {
    id: 'chloe',
    title: 'Chloe',
    category: 'bridal',
    images: [
      'images/dresses/chloe-1.jpg',
      'images/dresses/chloe-2.jpg'
    ]
  },
  {
    id: 'zoe',
    title: 'Zoe',
    category: 'bridal',
    images: [
      'images/dresses/zoe-1.jpg',
      'images/dresses/zoe-2.jpg',
      'images/dresses/zoe-3.jpg',
      'images/dresses/zoe-4.jpg'
    ]
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'evening',
    image: '' // TODO: תמונה אמיתית
  },
  {
    id: 'champagne',
    title: 'Champagne',
    category: 'evening',
    image: '' // TODO: תמונה אמיתית
  },
  {
    id: 'rose',
    title: 'Rose',
    category: 'evening',
    image: '' // TODO: תמונה אמיתית
  },
  {
    id: 'emerald',
    title: 'Emerald',
    category: 'evening',
    image: '' // TODO: תמונה אמיתית
  }
];

/**
 * תמונות לסקשן האינסטגרם (עד 6, ריבועיות או אנכיות).
 * כל עוד הרשימה ריקה — מוצגות תמונות מהקולקציה.
 * דוגמה: 'images/instagram/insta-01.jpg'
 */
window.INSTAGRAM_IMAGES = [];
