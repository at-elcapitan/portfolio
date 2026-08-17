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

const messages = {
    en: {
		formatting: {
			year: {
				1: "year",
				2: "years",
				3: "years"
			},
			month: {
				1: "month",
				2: "month",
				3: "month"
			},
			work: {
				tba: "not yet started"
			}
		},
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
					text: "An infantryman gets a ceremonial shovel\nWe raise the salaries of the deputies",
					author: "Dmytro Odnorozhenko (hatespeech)\nfrom the song \"MPZD!\""
				},
				5: {
					text: "People invented fire\nAnd since then everything burns",
					author: "Dmytro Odnorozhenko (hatespeech)\nfrom the song \"Lying Slogans\""
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
					work_time: "September 2025 — May 2026",
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
				},
				3: {
					name: "Kyiv Professional College of Communication",
					position: "System/Network Administrator",
					work_time: "October 2023 — December 2024",
					list : {
						1: "Administered over 200 GNU/Linux-based and Windows-based computers",
						2: "Deployed and maintained virtual machines on Proxmox and deployed services using Docker and Podman",
						3: "Setted up container management using Portainer",
						4: "Automated hardware interaction using Ansible",
						5: "Deployed Active Directory on Windows Server for centralized user management and configured Group Policies",
						6: "Ensured stable operation of the legacy hardware/software"
					}
				},
				4: {
					name: "Deloitte CE",
					position: "Middle DevOps Engineer",
					work_time: "May 2026 — August 2026",
					list: {
						1: "Automated local Creatio deployments",
    					2: "Designed the project's Git Flow strategy",
    					3: "Developed CI/CD pipelines in Azure DevOps and Jenkins",
    					4: "Worked on implementing of an ephemeral AWS test environment with Terraform and Packer",
    					5: "Created detailed documentation for projects",
    					6: "Prepared onboarding guides for new developers"
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
		formatting: {
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
		},
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
					text: "Піхотинцю - нагородна лопата\nМи піднімаємо зарплати депутатам\nГрамота і подяка солдату\nАле законотворцю треба гідна оплата",
					author: "Дмитро Однороженко (хейтспіч)\nз пісні \"МПЗД!\""
				},
				5: {
					text: "Балакучі пиздаки\nТрибунали навпаки\nБити правою чи бігти\nБігти наче пацюки\nЗемний шар як смолоскип\nЩо робить — ніхто не знає\nЛюди винайшли вогонь\nІ відтоді все палає",
					author: "Дмитро Однороженко (хейтспіч)\nз пісні \"Брехливі девізи\""
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
				},
				3: {
					name: "Київський фаховий коледж зв’язку",
					position: "Системний/Мережевий адміністратор",
					work_time: "Жовтень 2023 — Грудень 2024",
					list : {
						1: "Адміністрував понад 200 комп’ютерів на базі GNU/Linux та Windows",
						2: "Розгортав і супроводжував віртуальні машини на Proxmox та сервіси з використанням Docker і Podman",
						3: "Налаштував керування контейнерами за допомогою Portainer",
						4: "Автоматизував взаємодію з ПК за допомогою Ansible",
						5: "Розгорнув Active Directory на Windows Server для централізованого керування користувачами та налаштував групові політики",
						6: "Забезпечував стабільну роботу застарілого апаратного та програмного забезпечення"
					}
				},
				4: {
					name: "Deloitte CE",
					position: "Middle DevOps-інженер",
					work_time: "Травень 2026 — Серпень 2026",
					list: {
						1: "Автоматизував локальне розгортання Creatio",
						2: "Розробив стратегію Git Flow для проєкту",
						3: "Розробив CI/CD пайплайни в Azure DevOps та Jenkins",
						4: "Працював над створенням та впровадженням тимчасового тестового середовища в AWS за допомогою Terraform та Packer",
						5: "Створив детальну документацію для проєктів",
						6: "Підготував інструкції з адаптації для нових розробників"
					}
				}
			},
			showcase: {
				header: "Портфоліо",
				dev: {
					header: "Стек розробника"
				},
				sysadmin: {
					header: "DevOps/SysAdmin стек"
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
		formatting: {
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
		},
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
					text: "歩兵には表彰用のシャベル\n我々は議員の給料を引き上げる",
					author: "ドミトロ・オドノロジェンコ（ヘイトスピーチ）\n楽曲「MPZD!」より"
				},
				5: {
					text: "人類は火を発明した\nそれ以来すべてが燃えている",
					author: "ドミトロ・オドノロジェンコ（ヘイトスピーチ）\n楽曲「嘘のスローガン」より"
				}

			}
		},
		about: {
			header: "私について",
			textblocks: {
				"1": "よー！ウラディスラフ『ElCaptain』ナザロフで、ジョンとしても呼ばれます。6年以上の経験を持つプログラマー兼システム管理者です。2018年から、『Linux』インストール自動化システム、カメラ監視との連携用Telegramボット、Webアプリケーションなど、さまざまな個人プロジェクトを作成してきました。主に 『Python』、『C』、『Bash　Script』 を使用し、『Ansible』、『Docker』、『Podman』、『Proxmox』といったツールの学習を楽しんでいます。",
				"2": "現在、『Kyivstar.Tech』のシニアシステム管理者として、企業インフラの安定稼働を担当しています。『Windows』および『Linux』サーバー上で稼働する『CRM　Creatio』の情報システムを維持管理しています。リクエストの自動化、日常作業の効率化、システムのセキュリティと信頼性の確保を行っています。",
				"3": "自由時間にはギターを練習したり、新しい個人プロジェクトを作成したり、DevOps技術の実験を行っています。また、慈善団体でのボランティア経験があり、学生自治組織で積極的に活動していたため、組織力とチームワークを身につけることができました。"
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
					11: "Microsoftのメールサーバー",
					12: "オープンソースのAD代替スタック（389　DS、Kerberos、BIND、DogTag）",
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
						2: "『Windows』および『Linux』サーバー上で稼働する『CRM　Creatio』に基づく情報システムを維持。",
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
						1: "『PostgreSQL』と『Appsmith』を使用して、中央集約型データ追跡が可能な在庫管理システムをゼロから開発。",
						2: "『Python』および『PowerShell』スクリプトを作成して、日常の管理タスクを自動化。",
						3: "『Windows Server』上のサーバーインフラを管理し、『MS　Exchange』および『Active　Directory　DS』を含む。",
						4: "主要なサーバーおよびネットワーク機器のプロアクティブ監視のために『Zabbix』モニタリングシステムを実装。",
						5: "『MikroTik』および『TP-Link』ベースのネットワークインフラを管理し、機器の設定を実施。",
						6: "迅速な展開のために汎用『Windows』イメージを使用してワークステーションの準備プロセスを最適化。"
					}
				},
				3: {
					name: "キーウ通信専門カレッジ",
					position: "システム／ネットワーク管理者",
					work_time: "2023年10月 — 2024年12月",
					list : {
						1: "『GNU/Linux』および『Windows』ベースのコンピュータ200台以上を管理",
						2: "『Proxmox』上で仮想マシンを構築・運用し、『Docker』および『Podman』を用いてサービスを展開",
						3: "『Portainer』を使用してコンテナ管理を構成",
						4: "『Ansible』によりハードウェア操作を自動化",
						5: "『Windows　Server』上に『Active　Directory』を構築し、集中型ユーザー管理とグループポリシーを設定",
						6: "レガシーなハードウェアおよびソフトウェアの安定稼働を維持"
					}
				},
				4: {
					name: "Deloitte CE",
					position: "Middle DevOpsエンジニア",
					work_time: "2026年5月 — 2026年8月",
					list: {
						1: "ローカル環境でのCreatioのデプロイを自動化しました",
						2: "プロジェクトのGit Flow戦略を設計しました",
						3: "Azure DevOpsとJenkinsでCI/CDパイプラインを構築しました",
						4: "TerraformとPackerを使用して、AWSのエフェメラルなテスト環境の構築に取り組みました",
						5: "プロジェクトの詳細なドキュメントを作成しました",
						6: "新しい開発者向けのオンボーディングガイドを作成しました"
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
	},
	pl: {
		formatting: {
			year: {
				1: "rok",
				2: "lata",
				3: "lat"
			},
			month: {
				1: "miesiąc",
				2: "miesiące",
				3: "miesięcy"
			},
			work: {
				tba: "jeszcze nie rozpoczęto"
			}
		},
		nav: {
			buttons: {
				1: "O mnie",
				2: "Doświadczenie",
				3: "Portfolio"
			}
		},
		hello: {
			parts: {
				1: "Cześć, jestem",
				2: "Gitarzysta",
				3: "Programista",
				4: "ElCapitan",
				name: "Władysław"
			},
			infocard: "USA, Park Narodowy Yosemite, Góra El Capitan"
		},
		quoter: {
			header1: "Ulubione",
			header2: "cytaty",
			quotes: {
				1: {
					text: "Jesteśmy sumą wszystkich naszych działań, zbawienie jest wewnątrz nas.",
					author: "Alek OS, youtuber"
				},
				2: {
					text: "Jeśli chcesz zrobić coś niezwykłego, coś znacznie większego niż przewidywalne, potrzebujesz niezwykłych warunków.",
					author: "Andrzej Doroniczew, programista"
				},
				3: {
					text: "Każde zbyt ogólne stwierdzenie w biologii jest fałszywe, włącznie z tym.",
					author: "Aleksandr Panchin, naukowiec"
				},
				4: {
					text: "Piechur dostaje ceremonialną łopatę\nPodnosimy pensje posłom",
					author: "Dmytro Odnorozhenko (hejtspich)\nz utworu \"MPZD!\""
				},
				5: {
					text: "Ludzie wymyślili ogień\nI od tamtej pory wszystko płonie",
					author: "Dmytro Odnorozhenko (hejtspich)\nz utworu \"Kłamliwe hasła\""
				}
			}
		},
		about: {
			header: "O mnie",
			textblocks: {
				"1": "Cześć! Jestem Władysław Nazarow, znany również jako ElCaptain albo John. Jestem programistą i administratorem systemów z ponad sześcioma latami doświadczenia. Od 2018 roku tworzę różne projekty poboczne: systemy automatyzacji instalacji Linux, boty Telegram do integracji z systemami bezpieczeństwa wizyjnego, a także aplikacje webowe. Najczęściej pracuję z Pythonem, C, Bash Script i lubię poznawać narzędzia takie jak Ansible, Docker, Podman i Proxmox.",
				"2": "Obecnie pracuję jako Starszy Administrator Systemów w Kyivstar.Tech i odpowiadam za stabilną pracę infrastruktury korporacyjnej. Obsługuję system informacyjny oparty na serwerach Windows i Linux, na których działa B2B CRM Creatio. Zajmuję się automatyzacją zgłoszeń, rutynowych zadań oraz zapewnieniem bezpieczeństwa i niezawodności systemu.",
				"3": "W wolnym czasie uczę się grać na gitarze, tworzę nowe projekty poboczne i eksperymentuję z technologiami DevOps. Mam doświadczenie wolontariatu w organizacjach charytatywnych oraz byłem aktywny w samorządzie studenckim, co pomogło mi rozwijać umiejętności organizacyjne i ducha zespołu."
			},
			lang: {
				header: "Języki",
				2: {
					name: "Angielski"
				},
				1: {
					name: "Ukraiński"
				},
				3: {
					name: "Japoński"
				}
			},
			work: {
				header: "Doświadczenie zawodowe",
				1: {
					name: "Kyivstar.Tech, LLC",
					position: "Starszy Administrator Systemów",
					work_time: "Wrzesień 2025 — Maj 2026",
					list: {
						1: "Zapewnienie stabilnej pracy infrastruktury korporacyjnej.",
						2: "Obsługa systemu informacyjnego opartego na serwerach Windows i Linux hostingujących B2B CRM Creatio.",
						3: "Automatyzacja wewnętrznych zgłoszeń i rutynowych zadań operacyjnych.",
						4: "Wsparcie bezpieczeństwa, niezawodności i ciągłej dostępności krytycznych systemów.",
						5: "Monitorowanie i rozwiązywanie problemów komponentów infrastruktury w celu zapobiegania przestojom.",
						6: "Tworzenie skryptów automatyzacji rutynowej pracy z wykorzystaniem AI."
					}
				},
				2: {
					name: "TRC Respublika, LLC",
					position: "Administrator Systemów",
					work_time: "Grudzień 2024 — Wrzesień 2025",
					list: {
						1: "Opracowanie od podstaw systemu zarządzania inwentarzem z wykorzystaniem PostgreSQL i Appsmith, umożliwiającego scentralizowane śledzenie danych.",
						2: "Automatyzacja rutynowych zadań administracyjnych poprzez tworzenie skryptów w Pythonie i PowerShell.",
						3: "Administracja infrastruktury serwerowej na Windows Server, w tym MS Exchange i Active Directory DS.",
						4: "Wdrożenie systemu monitoringu Zabbix do proaktywnego nadzoru nad kluczowymi serwerami i urządzeniami sieciowymi.",
						5: "Zarządzanie infrastrukturą sieciową opartą na MikroTik i TP-Link, z konfiguracją urządzeń.",
						6: "Optymalizacja procesu przygotowania stacji roboczych za pomocą uniwersalnego obrazu Windows do szybkiego wdrożenia."
					}
				},
				3: {
					name: "Kijowski Profesjonalny College Komunikacji",
					position: "Administrator Systemów/Sieci",
					work_time: "Październik 2023 — Grudzień 2024",
					list: {
						1: "Administrowanie ponad 200 komputerami opartymi na GNU/Linux i Windows.",
						2: "Wdrażanie i utrzymanie maszyn wirtualnych na Proxmox oraz wdrażanie usług z użyciem Docker i Podman.",
						3: "Konfiguracja zarządzania kontenerami z użyciem Portainer.",
						4: "Automatyzacja współpracy z urządzeniami sprzętowymi za pomocą Ansible.",
						5: "Wdrożenie Active Directory na Windows Server do scentralizowanego zarządzania użytkownikami i konfiguracji polityk grupowych.",
						6: "Zapewnienie stabilnej pracy starszego sprzętu i oprogramowania."
					}
				},
				4: {
					name: "Deloitte CE",
					position: "Średni Inżynier DevOps",
					work_time: "Maj 2026 — Sierpień 2026",
					list: {
						1: "Zautomatyzowane lokalne wdrożenia Creatio.",
						2: "Zaplanowanie strategii Git Flow dla projektu.",
						3: "Opracowanie pipeline'ów CI/CD w Azure DevOps i Jenkins.",
						4: "Praca nad wdrożeniem efemeryjnego środowiska testowego AWS z Terraform i Packer.",
						5: "Tworzenie szczegółowej dokumentacji projektów.",
						6: "Przygotowanie przewodników wdrożeniowych dla nowych deweloperów."
					}
				}
			},
			showcase: {
				header: "Portfolio",
				dev: {
					header: "Stack programisty"
				},
				sysadmin: {
					header: "Stack DevOps/SysAdmin"
				}
			}
		},
		footer: {
			title: {
				1: "Źródła",
				2: "Najnowsze projekty",
				3: "Ten projekt",
				4: "Kontakt"
			}
		}
	}
};

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
