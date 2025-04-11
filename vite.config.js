import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Автоматичне виявлення всіх HTML-файлів у директорії pages
function getInputs() {
  const inputs = {
    main: resolve(__dirname, 'index.html')
  };
  
  const pagesDir = resolve(__dirname, 'pages');
  
  // Перевіряємо чи існує директорія pages
  if (fs.existsSync(pagesDir)) {
    // Знаходимо всі підпапки в директорії pages
    fs.readdirSync(pagesDir).forEach(pageDir => {
      const pagePath = resolve(pagesDir, pageDir);
      
      // Перевіряємо, що це дійсно директорія
      if (fs.statSync(pagePath).isDirectory()) {
        const htmlFile = resolve(pagePath, 'index.html');
        
        // Перевіряємо, чи існує index.html у цій директорії
        if (fs.existsSync(htmlFile)) {
          inputs[pageDir] = htmlFile;
        }
      }
    });
  }
  
  return inputs;
}

export default defineConfig({
  // Базовий шлях для GitHub Pages (ім'я репозиторію)
  // Змініть 'your-repo-name' на реальну назву вашого репозиторію
  base: '/your-repo-name/',
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getInputs(),
    },
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  
  // Налаштування серверу розробки
  server: {
    port: 3000,
    open: true, // Відкриває браузер при запуску
  },
});