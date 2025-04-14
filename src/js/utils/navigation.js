document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо базовий шлях з метатегу або змінної середовища
    const basePath = '/baba-cook/';
    
    // Виправляємо всі посилання на сторінці
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      // Якщо це внутрішнє посилання і воно не починається з базового шляху
      if (href && href.startsWith('pages/') || 
          (href.startsWith('./') && !href.startsWith(basePath))) {
        // Замінюємо відносний шлях на абсолютний з базовим шляхом
        link.setAttribute('href', `${basePath}${href.replace('./', '')}`);
      }
    });
  });