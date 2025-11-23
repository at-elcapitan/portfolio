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
                    "1": "Hi! I'm Vladislav Nazarov, also known as ElCaptain or John. I'm a programmer and system administrator with over six years of experience. Since 2018, I've been creating various pet projects: Linux installation automation systems, Telegram bots for integration with camera security systems, as well as web applications. Most often, I work with Python, C, Bash Script, and I enjoy studying tools like Ansible, Docker, Podman, and Proxmox.",
                    "2": "Currently, I'm a Senior System Administrator at Kyivstar.Tech and I'm responsible for the stable operation of the corporate infrastructure. I maintain the information system based on Windows and Linux servers hosting the B2B CRM Creatio. I handle automation of requests, routine tasks, and support the security and reliability of the system.",
                    "3": "In my free time, I learn to play the guitar, create new pet projects, and experiment with DevOps technologies. I have volunteer experience in charitable organizations and was also active in student self-government, which helped me develop organizational skills and team spirit."
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
                1: "Привіт! Я — Владислав Назаров, але мене також знають під псевдонімами Ель-Капітан або Джон. Я програміст і системний адміністратор із досвідом понад шість років. Починаючи з 2018 року, створюю різні пет-проєкти: системи автоматизації встановлення Linux, телеграм-ботів для інтеграції з системами безпеки, а також вебзастосунки. Найчастіше працюю з Python, C, Bash Script, люблю використовувати інструменти на кшталт Ansible, Docker, Podman і Proxmox.",
                2: "Зараз я системний адміністратор у компанії Київстар.Тех і відповідаю за стабільну роботу корпоративної інфраструктури. Підтримую інформаційну систему на базі Windows та Linux серверах, які хостять B2B CRM Creatio. Займаюсь автоматизацією запитів, рутинних справ та підтримую рівень безпеки та надійності системи.",
                3: "У вільний час вчуся грати на гітарі, створюю нові пет-проєкти, експериментую з DevOps-технологіями. Маю волонтерський досвід у благодійних організаціях, а також був активним у студентському самоврядуванні, що допомогло мені розвинути організаторські здібності та командний дух."
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
    },
	jp: {
		nav: {
			buttons: {
				1: "私について",
				2: "知識",
				3: "リンク"
			}
		},
		hello: {
			parts: {
				1: "おは！ 私は",
				2: "ギタリスト",
				3: "開発者",
				4: "エルキャピタン",
				name: "ウラディスラフ"
			},
			infocard: "アメリカ合衆国、ヨセミテ国立公園、エル・キャピタン山"
		},
		quoter: {
			header1: "お気に入りの",
			header2: "名言",
			quotes: {
				1: {
					text: "私たちはすべての行動の総和であり、救いは自分の内にある。",
					author: "Alek OS、YouTuber"
				},
				2: {
					text: "もし予測可能なものを超えた、何か非凡なことを成し遂げたいなら、非凡な環境が必要だ。",
					author: "アンドレイ・ドロニチェフ、開発者"
				},
				3: {
					text: "生物学における過度に一般化された主張は、これも含めてすべて誤りである。",
					author: "アレクサンドル・パンチン、科学者"
				},
				4: {
					text: "小さな町で生まれ育っても、頂点に立つチャンスは必ずある。",
					author: "ユーリ・ドゥード、ジャーナリスト"
				},
				5: {
					text: "強さとは何か？客観的な現実を見る力、真実のために戦う力、表面的なものから本質を見分ける力だ。結局のところ、そう、強さとは真実にある。そして、真実が存在し、明らかにできると信じることだ。",
					author: "レオニード・ヴォルコフ、ACFディレクター"
				}
			}
		},
		about: {
			header: "私について",
			textblocks: {
				"1": "よー！ウラディスラフ『ElCaptain』ナザロフで、ジョンとしても呼ばれます。6年以上の経験を持つプログラマー兼システム管理者です。2018年から、Linuxインストール自動化システム、カメラ監視との連携用Telegramボット、Webアプリケーションなど、さまざまな個人プロジェクトを作成してきました。主に Python、C、Bash Script を使用し、Ansible、Docker、Podman、Proxmox といったツールの学習を楽しんでいます。",
				"2": "現在、Kyivstar.Tech のシニアシステム管理者として、企業インフラの安定稼働を担当しています。Windows および Linux サーバー上で稼働する B2B CRM Creatio の情報システムを維持管理しています。リクエストの自動化、日常作業の効率化、システムのセキュリティと信頼性の確保を行っています。",
				"3": "自由時間にはギターを練習したり、新しい個人プロジェクトを作成したり、DevOps 技術の実験を行っています。また、慈善団体でのボランティア経験があり、学生自治組織で積極的に活動していたため、組織力とチームワークを身につけることができました。"
			},
			lang: {
				header: "語学スキル",
				2: {
					name: "英語"
				},
				1: {
					name: "ウクライナ語"
				},
				3: {
					name: "日本語"
				}
			},
			skills: {
				experience: "経験",
				years: {
					1: "年",
					2: "年",
					3: "年"
				},
				month: {
					1: "ヶ月",
					2: "ヶ月",
					3: "ヶ月"
				},
				learning: {
					title: "学習中",
					1: "強力なビジネス志向の言語",
					2: "動的サイト構築のための別のPythonフレームワーク",
					3: "強力なJavaScriptフロントエンドフレームワーク"
				},
				learned: {
					1: "強力なスクリプト言語",
					2: "動的サイトを作成するためのPythonフレームワーク",
					3: "REST API バックエンドを構築するPythonフレームワーク",
					4: "最も古い低レベルプログラミング言語の一つ",
					5: "強力なJavaScriptフロントエンドフレームワーク",
					6: "最も人気のあるバージョン管理システム",
					7: "強力な汎用プログラミング言語",
					18: "Microsoft のオブジェクト指向言語",
					19: "ディストリビューション",
					20: "エディション",

					8: "最も人気のあるオペレーティングシステム",
					9: "使いやすくユーザーフレンドリーなオペレーティングシステム",
					10: "最も人気のあるドメインコントローラー",
					11: "Microsoft のメールサーバー",
					12: "オープンソースのAD代替スタック（389 DS、Kerberos、BIND、DogTag）",
					13: "オープンソースのVPNサービス",
					14: "ログ収集のための Elasticsearch、Logstash、Kibana のスタック",
					15: "オープンソースのマシン監視サービス",
					16: "人気の自動化ツール",
					17: "人気のコンテナ化サービス"
				}
			}
		},
		footer: {
			title: {
				1: "クレジット",
				2: "最新プロジェクト",
				3: "このプロジェクトについて",
				4: "連絡先"
			}
		}
	}
};

const browserLanguage = navigator.language;
const mapping = {
    'en': 'en',
    'ja': 'jp',
    'uk': 'ua',
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

        return { locale, t, repos, error };
    }
});

app.use(i18n).mount("#app");
