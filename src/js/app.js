const { createApp, ref, watch, onMounted } = Vue;
const { createI18n, useI18n } = VueI18n;

const messages = {
    en: {
        navb1: "About",
        navb2: "Projects",
        navb3: "Links",
        hello1: "Hi, I'm",
        hello_name: "Vladislav",
        hello2: "Guitarist",
        hello3: "Dreamer",
        hello4: "Programmer",
        infocard: "USA, Yosemite National Park, El Capitan Mountain",
        quoter_header: "Favourite",
        quoter_header2: "quotes",
        quote1: "We are the sum of all our actions, salvation is within.",
        quote2: "If you want to do something extraordinary, something much greater than predictable, you need extraordinary conditions.",
        quote3: "Any excessively general statement in biology is false, including this one.",
        author1: "Alek OS",
        author2: "Andrey Doronichev",
        author3: "Alexander Panchin"
    },
    ua: { 
        navb1: "Про мене",
        navb2: "Мої Проєкти",
        navb3: "Контакти",
        hello1: "Привіт, я",
        hello_name: "Владислав",
        hello2: "Гітарист",
        hello3: "Мрійник",
        hello4: "Програміст",
        infocard: "США, Національний парк Йосеміті, Гора Ель Капітан",
        quoter_header: "Улюблені",
        quoter_header2: "цитати",
        quote1: "Ми - всіх своїх дій сума, спасіння всередині.",
        quote2: "Якщо ви хочете зробити щось незвичайне, що набагато більше, ніж передбачуване — потрібні незвичайні умови.",
        quote3: "Будь-яке надмірно загальне твердження в біології завідомо хибне, включаючи це.",
        author1: "Alek OS",
        author2: "Андрій Дороничев",
        author3: "Олександр Панчин"
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
                strings: [t("hello2"), t("hello3"), t("hello4")],
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
