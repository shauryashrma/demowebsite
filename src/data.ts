export const photos = {
  hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2200&q=85',
  patio: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1600&q=85',
  coffee: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=85',
  matcha: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1100&q=85',
  flowers: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1300&q=85',
  event: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=85',
  merch: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=85',
  journal: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=85',
  interior: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85',
  latte: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1100&q=85',
  garden: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85',
}

export const menuGroups = [
  { title: 'Coffee', rows: [['Espresso', '$3.50'], ['Americano', '$4.25'], ['Cortado', '$4.75'], ['Cappuccino', '$5.50'], ['Honey oat latte', '$6.75'], ['Maple sea salt mocha', '$7.25'], ['Slow steep cold brew', '$6.50']] },
  { title: 'A little green', rows: [['Ceremonial matcha', '$7.50'], ['Strawberry matcha', '$8.00'], ['Vanilla bean matcha', '$7.75'], ['Golden chai', '$6.75'], ['Herbal tea', '$4.50']] },
  { title: 'Good things extra', rows: [['Oat, almond or coconut milk', '+$0.75'], ['Vanilla, honey or lavender', '+$0.75'], ['A little extra espresso', '+$1.50']] },
  { title: 'Right now', rows: [['Brown sugar cinnamon latte', '$7.75'], ['Apple butter chai', '$7.50'], ['Rose cardamom cold brew', '$7.25']] },
]

export const products = [
  { name: 'Everyday canvas tote', price: '$24', image: photos.merch, badge: 'Bestseller', category: 'For the everyday' },
  { name: 'Sunday morning mug', price: '$28', image: photos.coffee, category: 'For the kitchen' },
  { name: 'The café sweatshirt', price: '$58', image: photos.interior, category: 'For the everyday' },
]

export const stories = [
  { category: 'Rituals', title: 'A gentler start to the day', excerpt: 'On making a little room for yourself before the day begins.', image: photos.journal, href: '/blog/a-gentler-start' },
  { category: 'From the bar', title: 'What’s in our cup this season', excerpt: 'A few lovely ingredients, a little patience, and the first sip of fall.', image: photos.latte, href: '/blog/whats-in-our-cup' },
  { category: 'Community', title: 'Flowers, friends & Fridays', excerpt: 'A small tradition that has become our favourite part of the week.', image: photos.flowers, href: '/blog/flowers-and-fridays' },
]
