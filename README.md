# Magic Portfolio (My Personal Fork)

This repository is a customized version of the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) created by Once UI. It is a minimalist portfolio template using MDX for content management.

## 🛠️ My Modifications (Fork)

I adapted the original project to fit my specific needs with the following updates:

* **Tech Stack Update:** Upgraded to Next.js 16 and React 19.2.
* **Localization:** Translated user interface (UI) elements into French.
* **Security:** Moved password management to the `.env` file for enhanced security and easier management.
* **Optimization:** Updated avatar and icon image paths to configure *cache busting*.
* **Content:** Added my own portfolio projects and case studies.

## 🚀 Local Setup

1. Clone the repository:
```bash
git clone [https://github.com/Zvenytoh/magic-portfolio.git](https://github.com/Zvenytoh/magic-portfolio.git)
```

2. Install dependencies:
```bash
cd magic-portfolio
npm install
```

3. Start the development server:
```bash
npm run dev
```

## ⚙️ How to Edit Content

* **Configuration:** Edit `src/resources/once-ui.config.js`
* **Text and Information:** Edit `src/resources/content.js`
* **Add a Project/Post:** Create a new `.mdx` file inside `src/app/work/projects` or `src/app/blog/posts`

---
*Original project distributed under the CC BY-NC 4.0 License.*
