/**
 * ==========================================================
 *  רשימת השמלות באתר — Shelly Balint Atelier
 * ==========================================================
 *  כדי להחליף לתמונות האמיתיות:
 *  1. שימי את קבצי התמונות בתיקייה images/dresses/
 *  2. בשדה images רשמי את כל התמונות של השמלה — הראשונה היא התמונה הראשית,
 *     השנייה מופיעה במעבר עכבר, וכולן מוצגות בגלריה בחלון התקריב.
 *     (לשמלה עם תמונה אחת אפשר גם לכתוב image: '...' במקום images)
 *  3. עדכני את title (שם השמלה). בלי title — השמלה מוצגת ללא שם (כמו בשמלות הערב)
 *
 *  category: 'bridal'  = קולקציית כלות
 *            'evening' = שמלות ערב
 *            'both'    = כלה וערב — מופיע רק בטאב "הכל"
 *
 *  מומלץ: תמונות אנכיות ביחס 3:4 (למשל 1200x1600 פיקסלים).
 *  כל עוד קובץ התמונה לא קיים — יוצג רקע עדין במקומו.
 * ==========================================================
 */
window.DRESSES = [
  {
    id: 'rose',
    category: 'both',
    images: [
      'images/dresses/rose-1.jpg',
      'images/dresses/rose-2.jpg',
      'images/dresses/rose-3.jpg'
    ]
  },
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
    id: 'elizabeth',
    title: 'Elizabeth',
    category: 'bridal',
    images: [
      'images/dresses/elizabeth-1.jpg',
      'images/dresses/elizabeth-2.jpg',
      'images/dresses/elizabeth-3.jpg'
    ]
  },
  {
    id: 'bella',
    category: 'evening',
    images: [
      'images/dresses/bella-1.jpg',
      'images/dresses/bella-2.jpg',
      'images/dresses/bella-3.jpg'
    ]
  },
  {
    id: 'scarlett',
    category: 'evening',
    images: [
      'images/dresses/scarlett-1.jpg',
      'images/dresses/scarlett-2.jpg'
    ]
  },
  {
    id: 'sienna',
    category: 'evening',
    images: [
      'images/dresses/sienna-1.jpg',
      'images/dresses/sienna-2.jpg'
    ]
  },
  {
    id: 'green',
    category: 'evening',
    images: [
      'images/dresses/green-1.jpg',
      'images/dresses/green-2.jpg',
      'images/dresses/green-3.jpg'
    ]
  },
  {
    id: 'silver',
    category: 'evening',
    images: [
      'images/dresses/silver-1.jpg'
    ]
  },
  {
    id: 'blue',
    category: 'evening',
    images: [
      'images/dresses/blue-1.jpg'
    ]
  },
  {
    id: 'red',
    category: 'evening',
    images: [
      'images/dresses/red-1.jpg'
    ]
  },
  {
    id: 'copper',
    category: 'evening',
    images: [
      'images/dresses/copper-1.jpg'
    ]
  },
  {
    id: 'champagne',
    category: 'evening',
    images: [
      'images/dresses/champagne-1.jpg'
    ]
  },
  {
    id: 'blush',
    category: 'evening',
    images: [
      'images/dresses/blush-1.jpg'
    ]
  },
  {
    id: 'yellow',
    category: 'evening',
    images: [
      'images/dresses/yellow-1.jpg',
      'images/dresses/yellow-2.jpg'
    ]
  },
  {
    id: 'noir-satin',
    category: 'evening',
    images: [
      'images/dresses/noir-satin-1.jpg'
    ]
  },
  {
    id: 'noir-lace',
    category: 'evening',
    images: [
      'images/dresses/noir-lace-1.jpg'
    ]
  },
  {
    id: 'black-corset',
    category: 'evening',
    images: [
      'images/dresses/black-corset-1.jpg',
      'images/dresses/black-corset-2.jpg',
      'images/dresses/black-corset-3.jpg'
    ]
  },
  {
    id: 'lilac',
    category: 'evening',
    images: [
      'images/dresses/lilac-1.jpg',
      'images/dresses/lilac-2.jpg',
      'images/dresses/lilac-3.jpg'
    ]
  }
];

/**
 * תמונות לסקשן האינסטגרם (עד 6, ריבועיות או אנכיות).
 * כל עוד הרשימה ריקה — מוצגות תמונות מהקולקציה.
 * דוגמה: 'images/instagram/insta-01.jpg'
 */
window.INSTAGRAM_IMAGES = [];
