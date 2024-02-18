import { memo } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton";
import { Article, ArticleList } from "entities/Article";

interface ArticlesPageProps {
	className?: string
}

const article = {
	"id": "1",
	"user": {
		"id": "1",
		"username": "admin",
		"avatar": "https://media.istockphoto.com/id/1300845620/ru/векторная/пользователь-icon-flat-изолирован-на-белом-фоне-символ-пользователя-иллюстрация-вектора.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek="
	},
	"title": "JS news 1",
	"subtitle": "Що нового в JS за 2023 рік?",
	"img": "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/06/nature-1686808887.jpg",
	"views": 2424,
	"createdAt": "24.02.2023",
	"type": [
	  "IT"
	],
	"blocks": [
	  {
			"id": "1",
			"type": "TEXT",
			"title": "Заголовок цього блока",
			"paragraphs": [
		  "Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, засобами некоєї мови.",
		  "JavaScript — це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і серверну платформу Node.js. Якщо до цього часу ви не написали жодного рядка коду на JS і читаєте цей текст в браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми."
			]
	  },
	  {
			"id": "4",
			"type": "CODE",
			"code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
	  },
	  {
			"id": "5",
			"type": "TEXT",
			"title": "Заголовок цього блока",
			"paragraphs": [
		  "Програма, яку традиційно називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, за допомогою засобів певної мови.",
		  "Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код форматують у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це виконується за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, поданий на цьому ресурсі. Цей приклад можна запустити за допомогою ресурсу (шукайте кнопку Try it Yourself), але ми діємо трошки інакше. А саме, створимо в якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код."
			]
	  },
	  {
			"id": "2",
			"type": "IMAGE",
			"src": "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
			"title": "Рисунок 1 - скриншот сайта"
	  },
	  {
			"id": "3",
			"type": "CODE",
			"code": "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
	  },
	  {
			"id": "7",
			"type": "TEXT",
			"title": "Заголовок цього блока",
			"paragraphs": [
		  "Програма, яку традиційно називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, за допомогою засобів певної мови.",
		  "Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код форматують у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це виконується за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, поданий на цьому ресурсі. Цей приклад можна запустити за допомогою ресурсу (шукайте кнопку Try it Yourself), але ми діємо трошки інакше. А саме, створимо в якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код."
			]
	  },
	  {
			"id": "8",
			"type": "IMAGE",
			"src": "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/06/nature-1686808887.jpg",
			"title": "Рисунок 1 - скриншот сайта"
	  },
	  {
			"id": "9",
			"type": "TEXT",
			"title": "Заголовок этого блока",
			"paragraphs": [
		  "JavaScript — це мова, на якій можна виконувати програми в різних середовищах. У нашому випадку йдеться про браузери та серверну платформу Node.js. Якщо до цього часу ви не писали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми."
			]
	  }
	]
} as Article;
	

const ArticlesPage = ({ className } : ArticlesPageProps) => {

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticleList 
				isLoading={true}
				articles={[article, article,article]}/>
		</div>
	);
};

export default memo(ArticlesPage);