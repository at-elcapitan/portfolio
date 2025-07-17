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
                3: "Programmer",
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
                1: "I'm a programmer with over six years of experience in the field. I have been actively developing software since 2018 through pet projects. Some of them are systems for automating the installation of Linux OS, websites, and integrated with security systems Telegram bots, that send notifications about their status.",
                2: "Currently, I work as a System Administrator at a company, where I apply my knowledge and skills in practice. Alongside this, I continue my evaluation, learning new technologies in software development, and aim to become a programmer.",
                3: "In free time, I learn to play the guitar, work on pet projects, and travel around my home country."
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
                learning: {
                    title: "Learning",
                    1: "Powerfull business-oriented language",
                    2: "Another Python Framework for creating dynamic sites",
                    3: "Powerfull frontend framework for JavaScript"
                },
                learned: {
                    title: "Knowledge",
                    1: "Powerfull scripting language",
                    2: "Python Framework for creating dynamic websites",
                    3: "Python Framework for creating REST API backends",
                    4: "One of the oldest low-lever programming languages",
                    5: "Powerfull JavaScript frontend framework",
                    6: "The most popular version control system"
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
                3: "Програміст",
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
                1: "Программіст з досвідом роботи у сфері більше шести років. Займаюсь активною розробкою ПЗ з 2018 року у форматі пет-проєктів. Серед них системи автоматизації установки ОС Linux, телеграм боти, що інтегруються с системами безпеки для відправки повідомленнь про стан та вебсайти.",
                2: "Наразі працюю на посаді Системного Адміністратора в компанії, на практиці застосвую отримані знання та навички. Поряд з цим не зупиняю особистісний розвиток, продовжую вивчати нові технології у сфері розробки ПЗ та прагну отримати посаду програміста у майбутньому.",
                3: "У вільний час навчаюсь грати на гітарі, роблю пет-проєкти та подорожую рідною країною."
            },
            skills: {
                learning: {
                    title: "Вивчаю",
                    1: "Потужна бізнес-орієнтована мова",
                    2: "Ще один фреймворк Python для створення динамічних сайтів",
                    3: "Потужний інтерфейсний фреймворк для JavaScript"
                },
                learned: {
                    title: "Навички",
                    1: "Потужна мова сценаріїв",
                    2: "Фреймворк Python для створення динамічних веб-сайтів",
                    3: "Фреймворк Python для створення REST API бекендів",
                    4: "Одна з найстаріших низькорівневих мов програмування",
                    5: "Потужний інтерфейсний фреймворк JavaScript",
                    6: "Найпопулярніша система контролю версій"
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
    },
    jp: {
        navb1: "自己紹介",
        navb2: "プロジェクト",
        navb3: "リンク",
        hello1: "こんにちは、私は",
        hello_name: "ヴラディスラフです",
        hello2: "ギタリストです",
        hello3: "夢想家です",
        hello4: "プログラマーです",
        infocard: "アメリカ合衆国、ヨセミテ国立公園、エルキャピタン山"
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
                const res = await fetch(`https://api.github.com/users/at-elcapitan/repos?sort=updated&per_page=5`);
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
