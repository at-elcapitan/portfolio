const { createApp, ref, watch, onMounted } = Vue;
const { createI18n, useI18n } = VueI18n;

const messages = {
    en: {
        nav : {
            buttons : {
                1: "About Me",
                2: "Knowledge",
                3: "Links"
            }
        },
        hello: {
           parts: {
                1: "Hi, I'm",
                2: "Guitarist",
                3: "Developer",
                4: "ElCapitan",
                name: "Vladislav"
           },
            infocard: "USA, Yosemite National Park, El Capitan Mountain",
        },
        quoter: {
            header1: "Favourite",
            header2: "quotes",
            quotes: {
                1: {
                    text: "We are the sum of all our actions, salvation is within.",
                    author: "Alek OS, youtuber"
                },
                2: {
                    text: "If you want to do something extraordinary, something much greater than predictable, you need extraordinary conditions.",
                    author: "Andrey Doronichev, developer"
                },
                3: {
                    text: "Any excessively general statement in biology is false, including this one.",
                    author: "Alexander Panchin, scientist"
                },
                4: {
                    text: "Even if you were born and raised in a small town, you always have a chance to make it to the very top.",
                    author: "Yuri Dud, journalist"
                },
                5: {
                    text: "Where is strength? In the ability to see objective reality, to fight for the truth, to separate it from the superficial. In the end, yes, strength is in the truth. And in believing that the truth exists and can be established.",
                    author: "Leonid Volkov, director of ACF"
                }
            }
        },
        about: {
            header: "About me",
            textblocks: {
                1: "Software programmer and system administrator with over six years of experience. I have been actively working on software development since 2018 on personal projects. Examples include automation systems for Linux OS installation, Telegram bots integrated with security systems for sending notifications, and web applications. I deal with Python, Bash, and PowerShell daily, as well as such tools as Ansible, Docker, Podman, and Proxmox.",
                2: "I am currently employed as a System Administrator at a company, where my responsibilities include infrastructure management. I stabilise Windows Server environments with Active Directory and MS Exchange, and implement monitoring using Zabbix. I created an inventory tracking system on PostgreSQL and Appsmith and automated a series of repetitive tasks. In parallel to that, I keep learning software engineering and dynamically boosting my tech skills with a target of shifting into a programmer position.",
                3: "Apart from work, I am self-learning to play the guitar, creating side projects, experimenting with DevOps technologies, and visiting my home country. I have volunteer experience with human rights organisations and was an active participant in student government, which exposed me to organisational management and teamwork."
            },
            lang : {
                header : "Language skills",
                2: {
                    name: "English"
                },
                1: {
                    name: "Ukrainian"
                },
                3: {
                    name: "Japaneese"
                }
            },
            skills: {
                experience: "Experience",
                years: {
                    1: "year",
                    2: "years",
                    3: "years"
                },
                month: {
                    1: "month",
                    2: "month",
                    3: "month"
                },
                learning: {
                    title: "Learning",
                    1: "Powerfull business-oriented language",
                    2: "Another Python Framework for creating dynamic sites",
                    3: "Powerfull frontend framework for JavaScript"
                },
                learned: {
                    1: "Powerfull scripting language",
                    2: "Python Framework for creating dynamic websites",
                    3: "Python Framework for creating REST API backends",
                    4: "One of the oldest low-lever programming languages",
                    5: "Powerfull JavaScript frontend framework",
                    6: "The most popular version control system",
                    7: "Powerful, general-purpose programming language",
                    18: "Microsoft object-oriented language",
                    19: "Destributions",
                    20: "Editions",

                    8: "The most popular operating system",
                    9: "Easy to use, user-friendly Operating System",
                    10: "The most popular Domain Controller",
                    11: "Microsoft mail server",
                    12: "Open-source AD alternative stack (389 DS, Kerberos, BIND, DogTag)",
                    13: "Open-source VPN service",
                    14: "Stack of Elasticsearch, Logstash and Kibana services for logs collecting",
                    15: "Open-source machines monitoring service",
                    16: "Popular automatization tool",
                    17: "Popular containerization service"
                }
            }
        },
        footer: {
            title: {
                1: "Credits",
                2: "Latest Projects",
                3: "This Project",
                4: "Contact"
            }
        }
    },
    ua: { 
        nav: {
            buttons: {
                1: "Про мене",
                2: "Мої знання",
                3: "Посилання"
            }
        },
        hello: {
        parts: {
                1: "Привіт, я",
                2: "Гітарист",
                3: "Девелопер",
                4: "Ель-Капітан",
              name: "Владислав"
        },
            infocard: "США, Національний парк Йосеміті, гора Ель-Капітан"
        },
        quoter: {
            header1: "Улюблені",
            header2: "цитати",
            quotes: {
                1: {
                    text: "Ми — сума всіх наших вчинків, порятунок всередині нас.",
                    author: "Alek OS, ютубер"
                },
                2: {
                    text: "Якщо хочете зробити щось надзвичайне, щось значно більше за передбачуване — потрібні надзвичайні умови.",
                    author: "Андрій Доронічев, розробник ПЗ"
                },
                3: {
                    text: "Будь-яке надто загальне твердження в біології завідомо хибне, включно з цим.",
                    author: "Олександр Панчин, вчений"
                },
                4: {
                    text: "Навіть якщо ви народилися й виросли у маленькому містечку, у вас завжди є шанс дістатися самого верху.",
                    author: "Юрій Дудь, журналіст"
                },
                5: {
                    text: "У чому сила? В умінні бачити об'єктивну реальність, боротися за правду, відділяти її від наносного. Зрештою, так, сила у правді. І у вірі, що правда існує та може бути встановлена.",
                    author: "Леонід Волков, директор ФБК"
                }
            }
        },
        about: {
            header: "Про мене",
            textblocks: {
                1: "Программіст та системний адміністратор з досвідом роботи у сфері більше шести років. Займаюсь активною розробкою ПЗ з 2018 року у форматі пет-проєктів. Серед них - системи автоматизації установки ОС Linux, телеграм-боти, що інтегруються з системами безпеки для надсилання сповіщень, а також вебзастосунки. Регулярно використовую Python, Bash і PowerShell, а також такі інструменти як Ansible, Docker, Podman та Proxmox.",
                2: "Наразі працюю на посаді Системного Адміністратора в компанії, де відповідаю за адміністрування інфраструктури. Підтримую стабільність роботи Windows Server з Active Directory та MS Exchange, налаштовую моніторинг за допомогою Zabbix. Створив систему обліку інвентаря на PostgreSQL та Appsmith, автоматизував низку рутинних задач. Паралельно продовжую навчання у сфері інженерії програмного забезпечення, активно розширюю свої технічні знання з метою перейти на посаду програміста.",
                3: "У вільний час навчаюсь грати на гітарі, реалізую пет-проєкти, експериментую з DevOps-технологіями та подорожую рідною країною. Маю волонтерський досвід у благодійних організаціях, активну участь у студентському самоврядуванні, що сформувало в мені організаторські навички та командний дух."
            },
            skills: {
                experience: "Досвід",
                years: {
                    1: "рік",
                    2: "роки",
                    3: "років"
                },
                month: {
                    1: "місяць",
                    2: "місяці",
                    3: "місяців"
                },
                learning: {
                    title: "Вивчаю",
                    1: "Потужна бізнес-орієнтована мова",
                    2: "Ще один фреймворк Python для створення динамічних сайтів",
                    3: "Потужний інтерфейсний фреймворк для JavaScript"
                },
                learned: {
                    1: "Потужна мова сценаріїв",
                    2: "Фреймворк Python для створення динамічних вебсайтів",
                    3: "Фреймворк Python для створення REST API бекендів",
                    4: "Одна з найстаріших мов програмування низького рівня",
                    5: "Потужний фронтенд-фреймворк на JavaScript",
                    6: "Найпопулярніша система контролю версій",
                    7: "Потужна мова програмування загального призначення",
                    18: "Об’єктно-орієнтована мова програмування від Microsoft",
                    19: "Дестрибути",
                    20: "Видання",

                    8: "Найпопулярніша операційна система",
                    9: "Проста у використанні, дружня до користувача операційна система",
                    10: "Найпопулярніший контролер домену",
                    11: "Поштовий сервер Microsoft",
                    12: "Відкрита альтернатива Active Directory (389 DS, Kerberos, BIND, DogTag)",
                    13: "Відкрита VPN-служба",
                    14: "Стек служб Elasticsearch, Logstash та Kibana для збору логів",
                    15: "Відкрита система моніторингу машин",
                    16: "Популярний інструмент автоматизації",
                    17: "Популярний сервіс контейнеризації"
                }
            }
        },
        footer: {
            title: {
                1: "Посилання на матеріали",
                2: "Останні проєкти",
                3: "Цей проєкт",
                4: "Контакти"
            }
        }
    }
};

const i18n = createI18n({
    legacy: false,
    globalInjection: false,
    locale: 'en',
    messages
});

const app = createApp({
    setup() {
        const { t, locale } = useI18n();
        const typedInstance = ref(null);
        const error = ref(null);
        const repos = ref([]);

        function startTyping() {
            if (typedInstance.value) {
                typedInstance.value.destroy();
            }

            const el = document.querySelector("#typing");
            if (!el) {
                console.error("Element #typing not found!");
                return;
            }

            typedInstance.value = new Typed("#typing", {
                strings: [t("hello.parts.2"), t("hello.parts.3"), t("hello.parts.4")],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 1000,
                startDelay: 500,
                loop: false,
            });
        }

        watch(locale, () => {
            startTyping();
        });

        onMounted(async () => {
            startTyping();
            try {
                const res = await fetch(`https://api.github.com/users/at-elcapitan/repos?sort=updated&per_page=6`);
                if(!res.ok) throw new Error('Unable to fetch repositories');
                const data = await res.json();
                repos.value = data;
            } catch (err) {
                error.value = err.message;
            }
        });

        return { locale, t, repos, error };
    }
});

app.use(i18n).mount("#app");
