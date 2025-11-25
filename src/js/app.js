const { createApp, ref, watch, onMounted } = Vue;
const { createI18n, useI18n } = VueI18n;

const messages = {
    en: {
        nav : {
            buttons : {
                1: "About Me",
                2: "Experience",
				3: "Showcase"
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
			work: {
				header: "Work Experience",
				1: {
					name: "Kyivstar.Tech, LLC",
					position: "Senior System Administrator",
					work_time: "September 2025 — now",
					list: {
						1: "Ensure stable operation of the corporate infrastructure.",
						2: "Maintain an information system based on Windows and Linux servers hosting the B2B CRM Creatio.",
						3: "Automate internal requests and routine operational tasks.",
						4: "Support the security, reliability, and continuous availability of critical systems.",
						5: "Monitor and troubleshoot infrastructure components to prevent downtime.",
						6: "Creating routine work automation scripts with AI."
					}
				},
				2: {
					name: "TRC Respublika, LLC",
					position: "System Administrator",
					work_time: "December 2024 — September 2025",
					list: {
						1: "Developed an inventory management system from scratch using PostgreSQL and Appsmith, enabling centralized data tracking.",
						2: "Automated routine administrative tasks by creating Python and PowerShell scripts.",
						3: "Administered server infrastructure on Windows Server, including MS Exchange and Active Directory DS.",
						4: "Implemented a Zabbix monitoring system for proactive control of key servers and network devices.",
						5: "Managed network infrastructure based on MikroTik and TP-Link, performing equipment configuration.",
						6: "Optimized the workstation preparation process using a universal Windows image for rapid deployment."
					}
				}
			},
			showcase: {
				header: "Showcase",
				dev: {
					header: "Developer Stack"
				},
				sysadmin: {
					header: "DevOps/SysAdmin Stack"
				},
				formating: {
					year: {
						1: "year",
						2: "years",
						3: "years"
					},
					month: {
						1: "month",
						2: "month",
						3: "month"
					}
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
                2: "Досвід",
                3: "Портфоліо"
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
            lang : {
                header : "Мови",
                2: {
                    name: "Англійська"
                },
                1: {
                    name: "Українська"
                },
                3: {
                    name: "Японська"
                }
            },
			work: {
				header: "Досвід роботи",
				1: {
					name: "ТОВ \"Київстар.Тех\"",
					position: "Старший Адміністратор Системи",
					work_time: "Вересень 2025 — теперішній час",
					list: {
						1: "Забезпечення стабільної роботи корпоративної інфраструктури.",
						2: "Підтримка інформаційної системи на базі серверів Windows і Linux, що розміщують B2B CRM Creatio.",
						3: "Автоматизація внутрішніх запитів та рутинних операційних завдань.",
						4: "Підтримка безпеки, надійності та безперервної доступності критичних систем.",
						5: "Моніторинг та усунення проблем компонентів інфраструктури для запобігання простоїв.",
						6: "Створення скриптів автоматизації рутинної роботи за допомогою AI."
					}
				},
				2: {
					name: "ТОВ \"ТРЦ Республіка\"",
					position: "Адміністратор Системи",
					work_time: "Грудень 2024 — Вересень 2025",
					list: {
						1: "Розробив систему управління інвентаризацією з нуля з використанням PostgreSQL та Appsmith, що дозволило централізовано відстежувати дані.",
						2: "Автоматизував рутинні адміністративні завдання за допомогою скриптів на Python та PowerShell.",
						3: "Адміністрував серверну інфраструктуру на Windows Server, включно з MS Exchange та Active Directory DS.",
						4: "Впровадив систему моніторингу Zabbix для проактивного контролю ключових серверів та мережевого обладнання.",
						5: "Керував мережею на базі MikroTik та TP-Link, здійснюючи конфігурацію обладнання.",
						6: "Оптимізував процес підготовки робочих місць за допомогою універсального образу Windows для швидкого розгортання."
					}
				}
			},
			showcase: {
				header: "Вітрина",
				dev: {
					header: "Стек розробника"
				},
				sysadmin: {
					header: "DevOps/SysAdmin стек"
				},
				formating: {
					year: {
						1: "рік",
						2: "роки",
						3: "років"
					},
					month: {
						1: "місяць",
						2: "місяці",
						3: "місяців"
					}
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
				2: "経験",
				3: "展示"
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
			},
			work: {
				header: "職務経験",
				1: {
					name: "Kyivstar.Tech, LLC",
					position: "シニアシステム管理者",
					work_time: "2025年9月 — 現在",
					list: {
						1: "企業インフラの安定稼働を確保。",
						2: "WindowsおよびLinuxサーバー上で稼働するB2B CRM Creatioに基づく情報システムを維持。",
						3: "社内リクエストおよび日常の運用タスクを自動化。",
						4: "重要システムのセキュリティ、信頼性、継続的な可用性をサポート。",
						5: "インフラストラクチャコンポーネントを監視し、ダウンタイムを防止。",
						6: "AIを用いた日常業務の自動化スクリプトの作成。"
					}
				},
				2: {
					name: "TRC Respublika, LLC",
					position: "システム管理者",
					work_time: "2024年12月 — 2025年9月",
					list: {
						1: "PostgreSQLとAppsmithを使用して、中央集約型データ追跡が可能な在庫管理システムをゼロから開発。",
						2: "PythonおよびPowerShellスクリプトを作成して、日常の管理タスクを自動化。",
						3: "Windows Server上のサーバーインフラを管理し、MS ExchangeおよびActive Directory DSを含む。",
						4: "主要なサーバーおよびネットワーク機器のプロアクティブ監視のためにZabbixモニタリングシステムを実装。",
						5: "MikroTikおよびTP-Linkベースのネットワークインフラを管理し、機器の設定を実施。",
						6: "迅速な展開のために汎用Windowsイメージを使用してワークステーションの準備プロセスを最適化。"
					}
				}
			},
			showcase: {
				header: "ショーケース",
				dev: {
					header: "開発者スタック"
				},
				sysadmin: {
					header: "DevOps／シスアドミン・スタック"
				},
				formating: {
					year: {
						1: "年",
						2: "年",
						3: "年"
					},
					month: {
						1: "ヶ月",
						2: "ヶ月",
						3: "ヶ月"
					}
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
