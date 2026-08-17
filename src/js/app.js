const { createApp, ref, watch, onMounted } = Vue;
const { createI18n, useI18n } = VueI18n;

const devStack = [
	{ name: "Python", img: "static/python-logo.webp", class: "bigger", date: [2020, 0, 1] },
	{ name: "C", img: "static/c.svg", class: "medium", date: [2023, 0, 1] },
	{ name: "C++", img: "static/c++.png", class: "medium", date: [2023, 0, 1] },
	{ name: "C#", img: "static/cs.png", class: "medium", date: [2024, 9, 1] },
	{ name: "FastAPI", img: "static/fastapi.svg", class: "biggest", noBg: true, date: [2025, 6, 1] },
	{ name: "SQLAlchemy", img: "static/sqlalchemy.png", class: "small cubic", date: [2025, 6, 1] },
	{ name: "Vue.js", img: "static/vue.png", class: "small", date: [2025, 9, 1] },
	{ name: "Flask", img: "static/flask.png", class: "medium", date: [2023, 0, 1] }
];

const devopsStack = [
	{ name: "AD DC", img: "static/ad.png", class: "medium", date: [2023, 9, 1] },
	{ name: "Linux", img: "static/linux.png", class: "medium", date: [2016, 0, 1] },
	{ name: "FreeIPA", img: "static/freeipa.png", class: "medium", date: [2025, 1, 1] },
	{ name: "OpenVPN", img: "static/openvpn.png", class: "medium", noBg: false, date: [2025, 1, 1] },
	{ name: "ELK", img: "static/elk.png", class: "medium", date: [2024, 7, 1] },
	{ name: "PostgreSQL", img: "static/psql.png", class: "medium", date: [2024, 6, 1] },
	{ name: "Redis", img: "static/redis.png", class: "medium", date: [2025, 8, 1] },
	{ name: "Docker", img: "static/docker.png", class: "medium", date: [2024, 0, 1] },
	{ name: "Kubernetes", img: "static/k8s.svg", class: "medium", date: [2026, 0, 1] },
	{ name: "Ansible", img: "static/ansible.png", class: "biggest", date: [2024, 7, 1] },
	{ name: "Creatio", img: "static/creatio.png", class:"bigger", date: [2025, 8, 1] }
];

const browserLanguage = navigator.language;
const mapping = {
    'en': 'en',
    'ja': 'jp',
    'uk': 'ua',
	'pl': 'pl'
};

const i18n = createI18n({
    legacy: false,
    globalInjection: false,
    locale: mapping[browserLanguage.split('-')[0]] || 'en',
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


		function getTranslCode(number) {
			if (number == 1) {
				return "1";
			}

			if (number < 5) {
				return "2";
			}

			return "3";
		}

		function td(date1, date2 = new Date(), forWork = false) {
			let years = date2.getFullYear() - date1.getFullYear();
			let months = date2.getMonth() - date1.getMonth();

			if (forWork) {
				let yearsText = "";
				let monthText = "";

				if (date1 > date2) {
					return t("formatting.work.tba");
				}

				if (months < 0) {
					years--;
					months += 12;
				}

				months++;

				if (years > 0) {
					const yearsTranslCode = getTranslCode(years);
					yearsText = `${years} ${t(`formatting.year.${yearsTranslCode}`)}, `
				}
				
				const monthTranslCode = getTranslCode(months);
				monthText = `${months} ${t(`formatting.month.${monthTranslCode}`)}`

				return `${yearsText}${monthText}`
			}

			if (months < 0) {
				years--;
				months += 12;
			}

			let gap, unitText;

			if (years > 0) {
				gap = years;
				unitText = "year";
			} else {
				gap = months;
				unitText = "month";
			}

			const translationCode = getTranslCode(gap);
			let text = t(`formatting.${unitText}.${translationCode}`);

			return `${gap} ${text}`;
		}

        return { locale, t, repos, error, td, devopsStack, devStack };
    }
});

app.use(i18n).mount("#app");
