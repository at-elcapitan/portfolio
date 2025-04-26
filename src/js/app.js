const { createApp, ref, watch, onMounted } = Vue;
const { createI18n, useI18n } = VueI18n;

const messages = {
    en: {
        nav : {
            buttons : {
                1: "About",
                2: "Projects",
                3: "Links"
            }
        },
        hello: {
           parts: {
                1: "Hi, I'm",
                2: "Guitarist",
                3: "Dreamer",
                4: "Programmer",
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
            header: "About me"
        }
    },
    ua: { 
        nav: {
            buttons: {
                1: "Про мене",
                2: "Мої проєкти",
                3: "Посилання"
            }
        },
        hello: {
        parts: {
                1: "Привіт, я",
                2: "Гітарист",
                3: "Мрійник",
                4: "Програміст",
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
                author: "Андрій Доронічев, розробник"
              },
            3: {
                text: "Будь-яке надто загальне твердження в біології є хибним, включно з цим.",
                author: "Олександр Панчин, вчений"
              },
            4: {
                text: "Навіть якщо ви народилися й виросли в маленькому містечку, у вас завжди є шанс дістатися самого верху.",
                author: "Юрій Дудь, журналіст"
              },
            5: {
                text: "У чому сила? В умінні бачити об'єктивну реальність, боротися за правду, відділяти її від наносного. Зрештою, так, сила у правді. І у вірі, що правда існує та може бути встановлена.",
                author: "Леонід Волков, директор ФБК"
            }
            }
        },
        about: {
            header: "Про мене"
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

        onMounted(() => {
            startTyping();
        });

        return { locale, t };
    }
});

app.use(i18n).mount("#app");
