$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    const rerender = () => {
        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        $('body').localize();

        $('title').text($.t('head.title'));
        $('meta[name=description]').attr('content', $.t('head.description'));
        $('meta[name=keywords]').attr('content', $.t('head.keywords'));
    };

    i18next
            // detect user language
            // learn more: https://github.com/i18next/i18next-browser-languageDetector
            .use(i18nextBrowserLanguageDetector)
            // init i18next
            // for all options read: https://www.i18next.com/overview/configuration-options
            .init({
                debug: true,
                fallbackLng: 'fr',
                resources: {
                    en: {
                        translation: {
                            head: {
                                title: 'Joseci',
                                description: 'Josei - Building Materials & tropical products',
                                keywords: 'Joseci, Building Materials, tropical products'
                            },
                            menu: {
                                home: 'Home',
                                about: 'About',
                                services: 'Services',
                                contact: 'Contact'
                            },
                            home: {
                                h0: 'Sale of ',
                                h1: 'coconut shell charcoal',
                                h2: 'cocoa products',
                                h3: 'building materials',
                                info: 'Our customer service is at your disposal for any information.',
                                contactUs: 'Contact us',
                                discover: 'Discover'
                            },
                            about: {
                                t1: "About",
                                t2: ' Us',
                                t3: '?',
                                h1: 'Our',
                                h2: 'activity',
                                p1: "JOSECI is an SARL created in Côte d'Ivoire in 2018 specialized in the sale of building materials.",
                                p2: "With a view to diversifying its activities, in 2020, it is expanding into the saling of tropical products " +
                                        "both locally and internationally such as coconut shell charcoal, wood charcoal, coconut charcoal in cubes, organic charcoal in cylinders and cocoa products."
                            },
                            dg: {
                                words: "Because we have a lot to offer you in saling of our products.",
                                title: 'General Director'
                            },
                            service: {
                                title: 'Our services',
                                subtitle: 'We are saling the following products :',
                                h1: 'The',
                                h2: 'charcoal',
                                a: {
                                    a1: 'Wood charcoal',
                                    a2: 'Coconut shell charcoal in chips',
                                    a3: 'Coconut shell charcoal in cubes',
                                    a4: 'Organic charcoal in cylinders',
                                    b: {
                                        b1: 'Coconut shell',
                                        c: {
                                            c1: 'Drying',
                                            c2: 'Putting in the bags',
                                            c3: 'Loading of container',
                                            c4: 'Loading for delivery',
                                            c5: 'Sorting',
                                            c6: 'Sampling'
                                        }
                                    }
                                },
                                h3: 'Cocoa',
                                h4: 'products',
                                b: {
                                    b1: 'Bio cocoa beans',
                                    b2: 'Cocoa mass/Liquor',
                                    b3: 'Expeller cocoa cake & Mass',
                                    b4: 'Cocoa cake',
                                    b5: 'Cocoa powder',
                                    b6: 'Cocoa butter',
                                    b7: 'Loading container',
                                    c: {
                                        c1: "Filling a 25 kg box",
                                        c2: "Potting",
                                        c3: "Decomposition",
                                        c4: "Sampling"
                                    }
                                },
                                h5: 'Building',
                                h6: 'Materials',
                                c: {
                                    c1: {
                                        title: 'Steel',
                                        a: 'Concrete iron',
                                        b: 'Sheets (BAC, tuiles, ridges, corrugated, lag bolts, ...)',
                                        c: 'Annealed wire',
                                        d: 'Spikes',
                                        e: 'Profiles (Angles, IPE, IPN, Tubes, ...)'
                                    },
                                    c2: {
                                        title: 'Cement',
                                        a: 'Cement',
                                        b: "Ready-mixed concrete",
                                        c: 'Hourdies',
                                        d: 'Agglos',
                                        e: 'Prefabs'
                                    },
                                    c3: {
                                        title: 'Wood',
                                        a: 'Boards',
                                        b: "Herringbone",
                                        c: "Planks"
                                    },
                                    c4: {
                                        title: 'Sand',
                                        a: 'Sand',
                                        b: "Grit"
                                    },
                                    c5: {
                                        title: 'Cobblestone'
                                    },
                                    c6: {
                                        title: 'Gully',
                                        a: 'Cubic form',
                                        b: "Circular form"
                                    }
                                }
                            },
                            stats: {
                                a: 'Satisfied customers',
                                b: 'Achived projects',
                                c: "Partners",
                                d: 'Requests'
                            },
                            contact: {
                                h1: 'Contact',
                                h2: 'Us',
                                t1: "We thank you for your visit and we expect to meet you at our office following the Map.",
                                t2: "You can also contact us by filling and submitting the below form or sending us a mail or calling us.",
                                t3: "Our customer service will be greatfull to exchange with you.",
                                form: {
                                    a: 'Name',
                                    b: 'Email',
                                    c: 'Object',
                                    d: 'Message',
                                    submit: 'Send your message'
                                }
                            },
                            footer: {
                                tel: 'Phone',
                                address: {
                                    t: 'Address :',
                                    t1: "Boulevard de France, Cocody, Abidjan, Côte d'Ivoire"
                                }
                            },
                            copyright: "All Rights Reserved | Design by"
                        }
                    },
                    fr: {
                        translation: {
                            head: {
                                title: 'Joseci',
                                description: 'Josei - Matériaux de construction & produits tropicaux',
                                keywords: 'Joseci, Matériaux de construction, produits tropicaux'
                            },
                            menu: {
                                home: 'Accueil',
                                about: 'A propos',
                                services: 'Services',
                                contact: 'Contact'
                            },
                            home: {
                                h0: 'Commercialisation de ',
                                h1: 'Charbon de coque de coco',
                                h2: 'Produits dérivés du cacao',
                                h3: 'Matériaux de construction',
                                info: 'Notre service clientèle est à votre disposition pour tout renseignement.',
                                contactUs: 'Nous contacter',
                                discover: 'Découvrir'
                            },
                            about: {
                                t1: 'Qui sommes-',
                                t2: 'Nous ?',
                                t3: '?',
                                h1: 'Notre',
                                h2: 'activité',
                                p1: "La société JOSECI est une SARL créée en Côte d'Ivoire en 2018 spécialisée dans la commercialisation des matériaux de construction.",
                                p2: "Dans l'optique de diversifier ses activités, en 2020, elle s'étend dans la commercialisation des produits tropicaux, localement et à l'international, tels que le charbon de noix de coco brut, charbon de bois brut, charbon de noix de coco en cube, charbon de noix de coco organique et les dérivés du cacao."
                            },
                            dg: {
                                words: "Parce que nous avons beaucoup à vous apporter dans le domaine de la commercialisation de nos produits.",
                                title: 'Directeur Général'
                            },
                            service: {
                                title: 'Nos services',
                                subtitle: 'Nous commercialisons les produits suivants :',
                                h1: 'Le',
                                h2: 'charbon',
                                a: {
                                    a1: 'Charbon de bois',
                                    a2: 'Charbon de coque de coco en chips',
                                    a3: 'Charbon cube de coque de coco',
                                    a4: 'Charbon cylindre organique',
                                    b: {
                                        b1: 'Noix de coco',
                                        c: {
                                            c1: 'Séchage',
                                            c2: 'Mise en sac',
                                            c3: 'Empotage',
                                            c4: 'Chargement/Déchargement',
                                            c5: 'Triage',
                                            c6: 'Echantillonnage'
                                        }
                                    }
                                },
                                h3: 'Les produits',
                                h4: 'dérivés du cacao',
                                b: {
                                    b1: 'Fève de cacao bio',
                                    b2: 'Masse de cacao',
                                    b3: 'Masse & Tourteau de cacao expeller',
                                    b4: 'Tourteau de cacao',
                                    b5: 'Poudre de cacao',
                                    b6: 'Beurre de cacao',
                                    b7: 'Empotage conteneur',
                                    c: {
                                        c1: "Remplissage d'un carton de 25 kg",
                                        c2: "Empotage",
                                        c3: "Décomposition",
                                        c4: "Echantillonnage"
                                    }
                                },
                                h5: 'Les matériaux',
                                h6: 'de construction',
                                c: {
                                    c1: {
                                        title: 'Acier',
                                        a: 'Fer à béton',
                                        b: 'Tôles (BAC, tuiles, faitières, ondulées, tirefonds, ...)',
                                        c: 'Fil de fer recuit',
                                        d: 'Pointes',
                                        e: 'Profilés (Cornières, IPE, IPN, Tubes, ...)'
                                    },
                                    c2: {
                                        title: 'Ciment',
                                        a: 'Ciment',
                                        b: "Béton prêt à l'emploi",
                                        c: 'Hourdies',
                                        d: 'Agglos',
                                        e: 'Préfabiqués'
                                    },
                                    c3: {
                                        title: 'Bois',
                                        a: 'Planches',
                                        b: "Chevrons",
                                        c: "Madriers"
                                    },
                                    c4: {
                                        title: 'Sable',
                                        a: 'Sable',
                                        b: "Gravier"
                                    },
                                    c5: {
                                        title: 'Pavés'
                                    },
                                    c6: {
                                        title: 'Caniveaux',
                                        a: 'Cubique',
                                        b: "Circulaire"
                                    }
                                }
                            },
                            stats: {
                                a: 'Clients satisfaits',
                                b: 'Projets réalisés',
                                c: "Partenaires d'affaires",
                                d: 'Demandes'
                            },
                            contact: {
                                h1: 'Nous',
                                h2: 'Contacter',
                                t1: "Nous vous remercions pour votre visite et espérons vous rencontrer à notre adresse sur la Map.",
                                t2: "Aussi, vous pouvez nous contacter via le formulaire ou notre adresse email et contact téléphonique.",
                                t3: "Notre service clientèle sera heureux de vous recevoir.",
                                form: {
                                    a: 'Nom',
                                    b: 'Email',
                                    c: 'Objet',
                                    d: 'Message',
                                    submit: 'Envoyer votre message'
                                }
                            },
                            footer: {
                                tel: 'Téléphone',
                                address: {
                                    t: 'Adresse :',
                                    t1: "Boulevard de France, Cocody, Abidjan, Côte d'Ivoire"
                                }
                            },
                            copyright: "Tous droits réservés | Designé par"
                        }
                    }
                }
            }, (err, t) => {
                if (err)
                    return console.error(err);

                // for options see
                // https://github.com/i18next/jquery-i18next#initialize-the-plugin
                jqueryI18next.init(i18next, $, {useOptionsAttr: true});

                rerender();

            });

    $('.lang').click(function (e) {
        e.preventDefault();
        const chosenLng = $(this).data('lang');
        i18next.changeLanguage(chosenLng, () => {
            rerender();
        });
    });
});