/* ==========================================================================
   Cardápio Data Structure - Pizzaria Drill
   ========================================================================== */
let MENU_ITEMS = {
    "pizzas": [
        {
            "id": "mussarela",
            "name": "Mussarela",
            "description": "Molhodetomate,mussarela e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "2_queijos",
            "name": "2 Queijos",
            "description": "Molho de tomate, mussarela,cheddar e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "3_queijos",
            "name": "3 Queijos",
            "description": "Molho de tomate, mussarela,catupiry,cheddar e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "marguerita",
            "name": "Marguerita",
            "description": "Molho de tomate,mussarela, parmessão,tomate em rodelas, manjericão e orégano.",
            "image": "assets/pizza_margherita.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "alho_e_oleo",
            "name": "Alho e Óleo",
            "description": "Molho de tomate,mussarela,salsa, alho frito e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 145
            }
        },
        {
            "id": "portuguesa",
            "name": "Portuguesa",
            "description": "Molho de tomate,mussarela,presunto,ervilha,tomate picado,azeitona,ovo,pimentão,cebola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 90,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "4_queijos",
            "name": "4 Queijos",
            "description": "Molho de tomate, mussarela,parmessão,provolone,catupiry e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 152
            }
        },
        {
            "id": "5_queijos",
            "name": "5 Queijos",
            "description": "Molho de tomate, mussarela,parmessão,provolone,catupiry, cheddar e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "6_queijos",
            "name": "6 Queijos",
            "description": "Molho de tomate, mussarela,parmessão,provolone,catupiry, cheddar,gorgonzola e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "napolitana",
            "name": "Napolitana",
            "description": "Molho de tomate,mussarela,tomate em rodelas,alho frito e orégano.",
            "image": "assets/pizza_margherita.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "acebolada",
            "name": "Acebolada",
            "description": "Molho de tomate,mussarela,cebola frita,alho poró,gorgonzola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 150
            }
        },
        {
            "id": "tomate_seco_com_rucula",
            "name": "Tomate Seco com Rucúla",
            "description": "Molho de tomate,mussarela,tomate seco,rucúla eorégano.",
            "image": "assets/pizza_margherita.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "atum",
            "name": "Atum",
            "description": "Molho de tomate, mussarela, atum e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "sardinha",
            "name": "Sardinha",
            "description": "Molho de tomate, mussarela,sardinha e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "camarao",
            "name": "Camarão",
            "description": "Molho de tomate, mussarela,camarão e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 140,
                "F": 165
            }
        },
        {
            "id": "camarao_alho_e_oleo",
            "name": "Camarão Alho e Óleo",
            "description": "Molho de tomate, mussarela,camarão, alho frito,salsa e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 140,
                "F": 165
            }
        },
        {
            "id": "strogonoff_de_frango",
            "name": "Strogonoff de Frango",
            "description": "Molho de tomate,mussarela,frango em cubos,creme de leite,molho vermelho,champignon,batata palha e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "strogonoff_de_carne",
            "name": "Strogonoff de Carne",
            "description": "Molho de tomate,mussarela,iscas de carne,creme de leite,molho vermelho,champignon,batata palha e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 90,
                "G": 125,
                "F": 160
            }
        },
        {
            "id": "frango_e_catupiry",
            "name": "Frango e Catupiry",
            "description": "Molho de tomate,mussarela,frango desfiado,creme de leite,catupiry e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "camarao_ao_molho_rose",
            "name": "Camarão ao Molho Rose",
            "description": "Molho de tomate, mussarela,camarão,creme de leite,molho vermelho e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 140,
                "F": 165
            }
        },
        {
            "id": "quintana",
            "name": "Quintana",
            "description": "Molho de tomate, mussarela,sardinha,cebola,azeitona,gorgonzola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 135,
                "F": 150
            }
        },
        {
            "id": "maresia",
            "name": "Maresia",
            "description": "Molho de tomate,mussarela,atum,presunto,tomate picado, cream cheese e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 135,
                "F": 150
            }
        },
        {
            "id": "strogonoff_de_camarao",
            "name": "Strogonoff de Camarão",
            "description": "Molho de tomate,mussarela,camarão,creme de leite,molho vermelho,champignon e orégano",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 140,
                "F": 165
            }
        },
        {
            "id": "fricasse",
            "name": "Fricasse",
            "description": "Molho de tomate,mussarela,frango em cubos,molho vermelho,catupiry e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "costela_uruguaia",
            "name": "Costela Uruguaia",
            "description": "Molho de tomate,mussarela,cubos de costela,cerveja preta,chumichurri,cebola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 125,
                "F": 160
            }
        },
        {
            "id": "file_com_mostarda",
            "name": "Filé com Mostarda",
            "description": "Molho de tomate,mussarela,isca de filé,molho vermelho,mostarda e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "file_ao_molho",
            "name": "Filé ao Molho",
            "description": "Molho detomate,mussarela,iscas de filé ao molho vermelho,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "file_com_fritas",
            "name": "Filé com Fritas",
            "description": "Molho de tomate, mussarela,iscas de filé ao molho vermelho, batata frita,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 95,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "primazia",
            "name": "Primazia",
            "description": "Molho de tomate, mussarela,iscas de filé ao molho vermelho, cheddar,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "coracao_ao_molho",
            "name": "Coração ao Molho",
            "description": "Molho de tomate, mussarela,coração em rodelas,molho vermelho,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "coracao_gratinado",
            "name": "Coração Gratinado",
            "description": "Molho de tomate,mussarela,coração ao meio,bacom em cubos, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 92,
                "G": 125,
                "F": 152
            }
        },
        {
            "id": "emporio",
            "name": "Empório",
            "description": "Molho de tomate,mussarela,iscas de filé,manjericão,cheddar, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 92,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "medalhao",
            "name": "Medalhão",
            "description": "Molho de tomate,mussarela,medalhão de filé, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 130,
                "F": 165
            }
        },
        {
            "id": "mista",
            "name": "Mista",
            "description": "Molho de tomate,mussera,peito de peru,cebola,brócolis,catupiry,cat chup,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "magestosa",
            "name": "Magestosa",
            "description": "Molho de tomate, mussarela,iscas de filé,catupiry, cheddar, parmesão, cebola ,provolone, gorgonzola, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 95,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "frango_com_mostarda",
            "name": "Frango com Mostarda",
            "description": "Molho detomate,mussarela,frango em cubos, mostarda,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "frango_com_barbecue",
            "name": "Frango com Barbecue",
            "description": "Molho de tomate, mussarela,frango em cubos, barbecue, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "frango_com_legumes",
            "name": "Frango com Legumes",
            "description": "Molho de tomate,mussarela,frango, milho, ervilha,tomate picado,catupiry,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "alcatra_em_cubos",
            "name": "Alcatra em Cubos",
            "description": "Molho de tomate,mussarela,alcatra em cubos,pimentão colorido em cubos,manjericão, orégano",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 95,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "bacon",
            "name": "Bacon",
            "description": "Molho de tomate,mussarela,bacon frito,catupiry, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "bacon_milho",
            "name": "Bacon Milho",
            "description": "Molho de tomate, mussarela, bacon, catupiry,milho,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 157
            }
        },
        {
            "id": "paulista",
            "name": "Paulista",
            "description": "Molho de tomate, mussarela,presunto, bacon palmito,alho frito,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "do_gaucho",
            "name": "do Gaúcho",
            "description": "Molho detomate, mussarela,calabresa ,bacon em cubos,orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "da_casa",
            "name": "da Casa",
            "description": "Molho mussarela,calabresa,presunto,bacon, pimentão,cebola,manjericão,orégano",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 122,
                "F": 155
            }
        },
        {
            "id": "tropeira",
            "name": "Tropeira",
            "description": "Molho de tomate,mussarela,alcatra em cubos, frango em cubos, carne de porco, corção, chumichurri, pimenta, cheiro verde e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "entreveiro",
            "name": "Entreveiro",
            "description": "Molho de tomate,mussarela, alcatra em cubos, frango em cubos, coração, carne de porco, calabresinha, pimentão colorido, cebola, mostarda, alho frito, salsa e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 90,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "da_pinheira",
            "name": "da Pinheira",
            "description": "Molho de tomate,mussarela, bacon, tomate picado, azeitona, manjericão e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "peperoni",
            "name": "Peperoni",
            "description": "Molho de tomate,mussera, peperoni, tomate picado, azeitona e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "parma",
            "name": "Parma",
            "description": "Molho de tomate,mussarela, medalhão de filé, presunto, queijo, cat chup e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "picanha_barbecue",
            "name": "Picanha Barbecue",
            "description": "Molho de tomate,mussarela, medalhão de picanha, molho Barbacue, pimenta de bico e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "calabresa",
            "name": "Calabresa",
            "description": "Molho de tomate,mussarela, calabresa e orégano.",
            "image": "assets/pizza_calabresa.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "calabresa_com_cebola",
            "name": "Calabresa com Cebola",
            "description": "Molho de tomate,mussarela, calabresa, rodelas de cebola e orégano.",
            "image": "assets/pizza_calabresa.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 117,
                "F": 135
            }
        },
        {
            "id": "lombo_catupiry",
            "name": "Lombo Catupiry",
            "description": "Molho de tomate,mussarela, lombo canadense, catupiry e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "lombo_com_abacaxi",
            "name": "Lombo com Abacaxi",
            "description": "Molho de tomate,mussarela, lombo canadense, abacaxi, catupiry, manjericão e orégano.",
            "image": "assets/pizza_chocolate.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 140
            }
        },
        {
            "id": "canadense",
            "name": "Canadense",
            "description": "Molho de tomate,mussarela, lombo canadense, bacon, tomate picado, cebola, manjericão e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "calabresa_com_pessego",
            "name": "Calabresa com Pessêgo",
            "description": "Molho de tomate, mussarela, calabresa, pessêgo em tiras e orégano.",
            "image": "assets/pizza_chocolate.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "italiana",
            "name": "Italiana",
            "description": "Molhodetomate, mussarela, salame italiano, figo ao meio e ore ǵ ano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "chilena",
            "name": "Chilena",
            "description": "Molho de tomate, mussarela, salame italiano, catupiry e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "colonial",
            "name": "Colonial",
            "description": "Molho de tomate, mussarela, carne desfiada, cebola roxa, pimentão vermelho, azeitona preta, catupiry e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 125,
                "F": 165
            }
        },
        {
            "id": "doritos",
            "name": "Doritos",
            "description": "Molho de tomate,mussarela, iscas de filé ao molho vermelho, Doritos e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 135,
                "F": 160
            }
        },
        {
            "id": "ruffles_com_cheddar",
            "name": "Ruffles com Cheddar",
            "description": "Molho de tomate,mussarela, iscas de filé ao molho vermelho, batata Chips, gotas de cheddar e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 135,
                "F": 160
            }
        },
        {
            "id": "soberana",
            "name": "Soberana",
            "description": "Molho de tomate,mussera, carne de panela desfiada, catupiry e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 125,
                "F": 160
            }
        },
        {
            "id": "baronessa",
            "name": "Baronessa",
            "description": "Molho de tomate,mussarela, carne desfiada, rodelas de cebola, pimenta de bico, creem chesse e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "4_queijos_com_bacon",
            "name": "4 Queijos com Bacon",
            "description": "Molho de tomate,mussarela, parmesão, provolone, catupiry, bacon e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "suprema",
            "name": "Suprema",
            "description": "Molho de tomate,mussarela, bacon, palmito, alho frito, orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "brocolis_e_bacon",
            "name": "Brocólis e Bacon",
            "description": "Molho de tomate,mussarela, brocólis, bacon, catupiry e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "toscana",
            "name": "Toscana",
            "description": "Molho de tomate,mussarela, tomate em rodelas, bacon, azeitona , alho frito e orégano.",
            "image": "assets/pizza_calabresa.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "calabresa_chilena",
            "name": "Calabresa Chilena",
            "description": "Molho de tomate,mussarela, calabresa moída, cheddar, orégano.",
            "image": "assets/pizza_calabresa.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 115,
                "F": 135
            }
        },
        {
            "id": "carbonara",
            "name": "Carbonara",
            "description": "Molho de tomate, mussarela, bacon, ovo,creme de leite e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "palestina",
            "name": "Palestina",
            "description": "Molho detomate, mussarela, rúcula, iscas de filé e ore",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 82,
                "G": 120,
                "F": 155
            }
        },
        {
            "id": "frango_mel_e_mostarda",
            "name": "Frango Mel e Mostarda",
            "description": "Molho de tomate, mussarela, frango desfiado, mel, mostarda e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "siciliana",
            "name": "Siciliana",
            "description": "Molho de tomate, mussarela, bacon, champignons , azeitona e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 157
            }
        },
        {
            "id": "turquesa",
            "name": "Turquesa",
            "description": "Molho de tomate,mussarela, picanha, palmito, alho frito e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "rustica",
            "name": "Rústica",
            "description": "Molho de tomate,mussarela, lombo canadense, champignon, tomate seco, cebola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 120,
                "F": 137
            }
        },
        {
            "id": "havaiana",
            "name": "Havaiana",
            "description": "Molho de tomate,mussarela, salame italiano, figo, pêssego, abacaxi e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 52,
                "M": 85,
                "G": 120,
                "F": 140
            }
        },
        {
            "id": "alpesto",
            "name": "Alpesto",
            "description": "Molho de tomate,mussarela, peito de peru, tomate cereja, manjericão, molho pesto e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "chicana",
            "name": "Chicana",
            "description": "Molho de tomate,mussarela, linguiça Toscana, cebola roxa, azeitona, pimenta e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "baiana",
            "name": "Baiana",
            "description": "Molho de tomate,mussarela, calabresa moída, ovo, cebola,pimenta e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 120,
                "F": 145
            }
        },
        {
            "id": "americana",
            "name": "Americana",
            "description": "Molho de tomate,mussarela, presunto, bacon, champignons, cebola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 47,
                "M": 80,
                "G": 115,
                "F": 145
            }
        },
        {
            "id": "roma",
            "name": "Roma",
            "description": "Molho de tomate,mussarela, frango em cubos,cheddar, bacon e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "francesa",
            "name": "Francesa",
            "description": "Molho de tomate,mussarela, carne desfiada, gorgonzola, Catupiry, cebola e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "cremosa",
            "name": "Cremosa",
            "description": "Molho de tomate, mussarela, carne desfiada, molho grego e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 88,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "galderio",
            "name": "Galderio",
            "description": "Molhode tomate, mussarela, linguiça, pimentão verde, cebola, catupiry e ore ǵ ano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "frango_com_cheddar",
            "name": "Frango com Cheddar",
            "description": "Molho de tomate, mussarela, frango em cubos, cheddar e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "divina",
            "name": "Divina",
            "description": "Molho de tomate, mussarela, bacon, cebola caramelizada, queijo bri, pimenta de bico e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 88,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "prisioneira",
            "name": "Prisioneira",
            "description": "Molho de tomate,mussarela, provolone, carne desfiada, Catupiry, bacon, azeitona e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "gaucha",
            "name": "Gaucha",
            "description": "Molho de tomate,mussarela, costela desfiada, barbecue, cebolinha e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 87,
                "G": 127,
                "F": 155
            }
        },
        {
            "id": "alcatra_mel_e_mostarda",
            "name": "Alcatra Mel e Mostarda",
            "description": "Molho de tomate,mussarela, alcatra, mel, mostarda e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "frango_xadrez",
            "name": "Frango Xadrez",
            "description": "Molho de tomate,mussarela, frango em cubos, pimentão colorido, gergelim e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "basca",
            "name": "Basca",
            "description": "Molho de tomate,mussarela, lombo canadense, Catupiry, tomate picado, azeitona, manjericão e orégano.",
            "image": "assets/pizza_hero.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "file_ao_molho_4_queijos",
            "name": "Filé ao Molho 4 Queijos",
            "description": "Molho de tomate,mussarela, iscas de filé, pimentão, catupiry, cheddar, gorgonzola, alho poró e orégano.",
            "image": "assets/pizza_quatro_queijos.png",
            "category": "salgadas",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 87,
                "G": 130,
                "F": 155
            }
        },
        {
            "id": "classica",
            "name": "Clássica",
            "description": "Leite condensado, abacaxi picado, chocolate branco e gemada.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 145
            }
        },
        {
            "id": "mm_s",
            "name": "MM's",
            "description": "Leite condensado, chocolate preto e MM's.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "prestigio",
            "name": "Prestigio",
            "description": "Leite condensado, chocolate preto, prestigio e coco ralado.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "stikadinho",
            "name": "Stikadinho",
            "description": "Leite condensado, morango em rodelas, chocolate branco e stikadinho.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "banoff",
            "name": "Banoff",
            "description": "Doce de leite, banana, Negresco e leite condensado.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 120,
                "F": 151
            }
        },
        {
            "id": "nutella_com_morango",
            "name": "Nutella com Morango",
            "description": "Leite condensado, nutella e morango ao meio.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 92,
                "G": 130,
                "F": 170
            }
        },
        {
            "id": "banana_nevada",
            "name": "Banana Nevada",
            "description": "Doce de leite, banana, canela e chocolate branco.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 120,
                "F": 151
            }
        },
        {
            "id": "pistache",
            "name": "Pistache",
            "description": "Doce de leite, chocolate branco ou preto e creme de pistache.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 90,
                "G": 130,
                "F": 170
            }
        },
        {
            "id": "romeu_e_julieta",
            "name": "Romeu e Julieta",
            "description": "Leitecondensado,goiabada e queijo. Nostalgia Leite condensado, chocolate preto e branco, kit Kat preto e branco.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 125,
                "F": 160
            }
        },
        {
            "id": "paixao",
            "name": "Paixão",
            "description": "Leite condensado, morango, bombom ouro branco e chocolate branco.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "dois_amores",
            "name": "Dois Amores",
            "description": "Leite condensado, morango, chocolate preto e bombom ouro branco.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 85,
                "G": 125,
                "F": 158
            }
        },
        {
            "id": "banana_gemada",
            "name": "Banana Gemada",
            "description": "Leite condensado, banana, chocolate branco e gemada.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 55,
                "M": 80,
                "G": 115,
                "F": 145
            }
        },
        {
            "id": "chocodelicia",
            "name": "Chocodelícia",
            "description": "Leite condensado, uva verde, figo, pessêgo e ganache.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 85,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "nutella",
            "name": "Nutella",
            "description": "Doce de leite e Nutella.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 95,
                "G": 130,
                "F": 170
            }
        },
        {
            "id": "choco_branco_com_nozes",
            "name": "Choco Branco com Nozes",
            "description": "Leite condensado, chocolate branco e nozes.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "stikadinho_cremoso",
            "name": "Stikadinho Cremoso",
            "description": "Leite condensado, creme de choco preto e creme de morango.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 57,
                "M": 87,
                "G": 125,
                "F": 150
            }
        },
        {
            "id": "charge",
            "name": "Charge",
            "description": "Leite condensado, chocolate preto, charge e amendoim.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 120,
                "F": 150
            }
        },
        {
            "id": "chocolate_com_pimenta",
            "name": "Chocolate com Pimenta",
            "description": "Leite condensado, chocolate preto, cereja e pimenta.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 57,
                "M": 85,
                "G": 125,
                "F": 155
            }
        },
        {
            "id": "dona_bela",
            "name": "Dona Bela",
            "description": "Leitecondensado, Nutella, uva verde e creme de leite ninho",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 60,
                "M": 90,
                "G": 130,
                "F": 160
            }
        },
        {
            "id": "nevada",
            "name": "Nevada",
            "description": "Doce de leite, banana, choco branco cremoso.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 80,
                "G": 120,
                "F": 0
            }
        },
        {
            "id": "morango_moreno",
            "name": "Morango Moreno",
            "description": "leite condensado, chocolate preto ralado, morango e creme de leite.",
            "image": "assets/pizza_chocolate.png",
            "category": "doces",
            "categoryType": "tradicional",
            "prices": {
                "B": 50,
                "M": 82,
                "G": 110,
                "F": 145
            }
        }
    ],

    "bebidas": [
        {
            "id": "coca_2l",
            "name": "Coca Cola 2l",
            "price": 16,
            "image": "assets/coca_cola.png"
        },
        {
            "id": "guarana_2l",
            "name": "Guarana 2l",
            "price": 15,
            "image": "assets/guarana.png"
        },
        {
            "id": "coca_600",
            "name": "Coca Cola 600ml",
            "price": 10,
            "image": "assets/coca_cola.png"
        },
        {
            "id": "coca_zero_600",
            "name": "Coca Cola Zero 600ml",
            "price": 10,
            "image": "assets/coca_cola.png"
        },
        {
            "id": "guarana_600",
            "name": "Guarana 600ml",
            "price": 9,
            "image": "assets/guarana.png"
        },
        {
            "id": "coca_lata",
            "name": "Coca Cola lata",
            "price": 6,
            "image": "assets/coca_cola.png"
        },
        {
            "id": "coca_zero_lata",
            "name": "Coca Cola Zero lata",
            "price": 6,
            "image": "assets/coca_cola.png"
        },
        {
            "id": "guarana_lata",
            "name": "Guarana lata",
            "price": 6,
            "image": "assets/guarana.png"
        },
        {
            "id": "agua",
            "name": "Agua com ou s/ gás",
            "price": 4,
            "image": "assets/agua.png"
        },
        {
            "id": "vinho_seco",
            "name": "Vinho Seco",
            "price": 35,
            "image": "assets/vinho.png"
        },
        {
            "id": "vinho_suave",
            "name": "Vinho Suave",
            "price": 35,
            "image": "assets/vinho.png"
        }
    ],
    "lanches": [
        {
            "id": "xis_salada",
            "name": "Xis Salada",
            "description": "Maionese, ketchup, milho, ervilha, alface, tomate, ovo, hambúrguer, queijo e presunto.",
            "price": 25,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_frango",
            "name": "Xis Frango",
            "description": "Maionese, ketchup, milho, ervilha, alface, tomate, queijo, presunto, ovo, hambúrguer, frango desfiado.",
            "price": 28,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_calabresa",
            "name": "Xis Calabresa",
            "description": "Maionese, ketchup, milho, ervilha, alface, tomate, queijo, presunto, ovo, hambúrguer, calabresa.",
            "price": 30,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_frango_bacon",
            "name": "Xis Frango com Bacon",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo, frango desfiado e bacon.",
            "price": 30,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_frango_acebolado",
            "name": "Xis Frango Acebolado",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo e frango em cubos acebolado.",
            "price": 31,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_bacon",
            "name": "Xis Bacon",
            "description": "Maionese, ketchup, milho, ervilha, alface, tomate, queijo, presunto, ovo, hambúrguer e bacon.",
            "price": 32,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_bacon_cebola",
            "name": "Xis Bacon com Cebola Caramelizada",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, ovo, cebola caramelizada, bacon, hambúrguer, presunto e queijo cheddar.",
            "price": 32,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_portuguesa",
            "name": "Xis Portuguesa",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, azeitona, presunto, ovo e queijos.",
            "price": 32,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_file_acebolado",
            "name": "Xis Filé Acebolado",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo e filé acebolado.",
            "price": 34,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_strogonoff_carne",
            "name": "Xis Strogonoff de Carne",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, strogonoff de carne, batata palha e ovo.",
            "price": 35,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_costela",
            "name": "Xis Costela",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo e costela desfiada.",
            "price": 35,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_carne_panela",
            "name": "Xis Carne de Panela",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo, carne desfiada e molho de gorgonzola.",
            "price": 36,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_coracao",
            "name": "Xis Coração",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo e coração.",
            "price": 38,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_picanha",
            "name": "Xis Picanha",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, picanha e ovo.",
            "price": 38,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_entrevero",
            "name": "Xis Entrevero",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, frango, coração, calabresa, alcatra, porco, hambúrguer, ovo, queijo e presunto.",
            "price": 38,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "xis_file_fritas",
            "name": "Xis Filé com Fritas",
            "description": "Maionese, ketchup, milho, ervilha, tomate, alface, queijo, presunto, ovo, filé e fritas.",
            "price": 43,
            "image": "assets/lanche_xis.png",
            "category": "xis"
        },
        {
            "id": "hamb_tradicional",
            "name": "Hambúrguer Tradicional",
            "description": "Pão, carne, queijo cheddar e batata de rostinho.",
            "price": 25,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "hamb_bacon",
            "name": "Hambúrguer Bacon",
            "description": "Pão, creme de gorgonzola, carne, queijo cheddar, bacon e fritas.",
            "price": 30,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "hamb_classico",
            "name": "Hambúrguer Clássico",
            "description": "Pão, molho americano, carne, queijo cheddar, alface, tomate e fritas.",
            "price": 30,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "hamb_kids",
            "name": "Hambúrguer Kids",
            "description": "Pão, molho americano, carne, queijo cheddar e fritas.",
            "price": 32,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "hamb_cheddar_duplo",
            "name": "Hambúrguer Cheddar Duplo",
            "description": "Pão, molho americano, duas carnes, queijo cheddar, cebola caramelizada e fritas.",
            "price": 40,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "hamb_costela_desfiada",
            "name": "Hambúrguer Costela Desfiada",
            "description": "Pão, maionese verde, carne, queijo mussarela, carne desfiada, cebola caramelizada e fritas.",
            "price": 40,
            "image": "assets/lanche_hamburguer.png",
            "category": "hamburgueres"
        },
        {
            "id": "barca_1",
            "name": "Barca Nº 1",
            "description": "2 hambúrgueres, fritas, anéis de cebola e mini tichens.",
            "price": 65,
            "image": "assets/lanche_barca.png",
            "category": "barcas"
        },
        {
            "id": "barca_2",
            "name": "Barca Nº 2",
            "description": "2 hambúrgueres, fritas com cheddar e bacon e calabresa gratinada.",
            "price": 70,
            "image": "assets/lanche_barca.png",
            "category": "barcas"
        },
        {
            "id": "barca_3",
            "name": "Barca Nº 3",
            "description": "2 hambúrgueres, fritas com cheddar e bacon, calabresa gratinada, frango em cubos e iscas de carne.",
            "price": 80,
            "image": "assets/lanche_barca.png",
            "category": "barcas"
        },
        {
            "id": "fritas_trad_p",
            "name": "Fritas Tradicional P (250g)",
            "description": "Porção de batata frita tradicional tamanho P.",
            "price": 16,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_trad_m",
            "name": "Fritas Tradicional M (350g)",
            "description": "Porção de batata frita tradicional tamanho M.",
            "price": 20,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_trad_g",
            "name": "Fritas Tradicional G (450g)",
            "description": "Porção de batata frita tradicional tamanho G.",
            "price": 24,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_cheddar_bacon_p",
            "name": "Fritas com Cheddar e Bacon P (250g)",
            "description": "Batata frita com cobertura de queijo cheddar e bacon tamanho P.",
            "price": 20,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_cheddar_bacon_m",
            "name": "Fritas com Cheddar e Bacon M (350g)",
            "description": "Batata frita com cobertura de queijo cheddar e bacon tamanho M.",
            "price": 26,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_cheddar_bacon_g",
            "name": "Fritas com Cheddar e Bacon G (450g)",
            "description": "Batata frita com cobertura de queijo cheddar e bacon tamanho G.",
            "price": 30,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_verde_p",
            "name": "Fritas com Maionese Verde P (250g)",
            "description": "Batata frita acompanhada de maionese verde tamanho P.",
            "price": 20,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_verde_m",
            "name": "Fritas com Maionese Verde M (350g)",
            "description": "Batata frita acompanhada de maionese verde tamanho M.",
            "price": 26,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_verde_g",
            "name": "Fritas com Maionese Verde G (450g)",
            "description": "Batata frita acompanhada de maionese verde tamanho G.",
            "price": 30,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_4queijos_p",
            "name": "Fritas 4 Queijos e Carne Desfiada P (250g)",
            "description": "Batata frita com molho quatro queijos e carne desfiada tamanho P.",
            "price": 24,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_4queijos_m",
            "name": "Fritas 4 Queijos e Carne Desfiada M (350g)",
            "description": "Batata frita com molho quatro queijos e carne desfiada tamanho M.",
            "price": 30,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "fritas_4queijos_g",
            "name": "Fritas 4 Queijos e Carne Desfiada G (450g)",
            "description": "Batata frita com molho quatro queijos e carne desfiada tamanho G.",
            "price": 34,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_cebola_p",
            "name": "Porção de Anéis de Cebola P",
            "description": "Anéis de cebola empanados e fritos tamanho P.",
            "price": 16,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_cebola_m",
            "name": "Porção de Anéis de Cebola M",
            "description": "Anéis de cebola empanados e fritos tamanho M.",
            "price": 26,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_cebola_g",
            "name": "Porção de Anéis de Cebola G",
            "description": "Anéis de cebola empanados e fritos tamanho G.",
            "price": 32,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_frango_p",
            "name": "Porção de Frango Empanado P",
            "description": "Iscas de frango empanadas e fritas crocantes tamanho P.",
            "price": 35,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_frango_m",
            "name": "Porção de Frango Empanado M",
            "description": "Iscas de frango empanadas e fritas crocantes tamanho M.",
            "price": 55,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "porcao_frango_g",
            "name": "Porção de Frango Empanado G",
            "description": "Iscas de frango empanadas e fritas crocantes tamanho G.",
            "price": 70,
            "image": "assets/lanche_fritas.png",
            "category": "porcoes"
        },
        {
            "id": "extra_maionese_trad",
            "name": "Maionese Tradicional (Pote Extra)",
            "description": "Pote adicional de maionese caseira tradicional.",
            "price": 2,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        },
        {
            "id": "extra_maionese_verde",
            "name": "Maionese Verde (Pote Extra)",
            "description": "Pote adicional de maionese caseira temperada verde.",
            "price": 2,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        },
        {
            "id": "extra_barbecue",
            "name": "Molho Barbecue (Pote Extra)",
            "description": "Pote adicional de molho barbecue defumado.",
            "price": 2.5,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        },
        {
            "id": "extra_molho_americano",
            "name": "Molho Americano (Pote Extra)",
            "description": "Pote adicional de molho especial americano.",
            "price": 4,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        },
        {
            "id": "extra_ketchup",
            "name": "Sachê de Ketchup Extra",
            "description": "Sachês adicionais de ketchup de alta qualidade.",
            "price": 1.5,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        },
        {
            "id": "extra_mostarda",
            "name": "Sachê de Mostarda Extra",
            "description": "Sachês adicionais de mostarda de alta qualidade.",
            "price": 1.5,
            "image": "assets/lanche_fritas.png",
            "category": "adicionais"
        }
    ],
    "acais": [
        {
            "id": "acai_300ml",
            "name": "Açaí 300ml",
            "description": "Escolha até 3 adicionais grátis inclusos no copo.",
            "price": 17.00,
            "image": "assets/acai_hero.png",
            "size": "300ml",
            "maxFree": 3
        },
        {
            "id": "acai_500ml",
            "name": "Açaí 500ml",
            "description": "Escolha até 4 adicionais grátis inclusos no copo.",
            "price": 24.00,
            "image": "assets/acai_hero.png",
            "size": "500ml",
            "maxFree": 4
        },
        {
            "id": "acai_700ml",
            "name": "Açaí 700ml",
            "description": "Escolha até 5 adicionais grátis inclusos no copo.",
            "price": 30.00,
            "image": "assets/acai_hero.png",
            "size": "700ml",
            "maxFree": 5
        }
    ]
};
let PIZZA_PRICES = {}; // No longer used, but kept for compatibility

const SIZE_MAP = {
    'brotinho': 'B',
    'media': 'M',
    'grande': 'G',
    'familia': 'F'
};

const TAMANHO_NOMES = {
    'brotinho': 'Brotinho (20cm)',
    'media': 'Média (25cm)',
    'grande': 'Grande (35cm)',
    'familia': 'Família (40cm)'
};

const TAMANHO_REGRAS = {
    'brotinho': { maxFlavors: 1, slices: 4, name: 'Brotinho' },
    'media': { maxFlavors: 2, slices: 6, name: 'Média' },
    'grande': { maxFlavors: 3, slices: 12, name: 'Grande' },
    'familia': { maxFlavors: 4, slices: 16, name: 'Família' }
};

let BORDAS = {
    'sem-borda': { name: 'Sem Borda', price: 0.00, category: 'ambas' },
    'catupiry': { name: 'Borda de Catupiry', price: 5.00, category: 'salgadas' },
    'cheddar': { name: 'Borda de Cheddar', price: 5.00, category: 'salgadas' },
    'quatro-queijos': { name: 'Borda 4 Queijos', price: 5.00, category: 'salgadas' },
    'calabresa': { name: 'Borda de Calabresa', price: 5.00, category: 'salgadas' },
    'doce-de-leite': { name: 'Borda de Doce de Leite', price: 5.00, category: 'doces' },
'choco-branco': { name: 'Borda de Chocolate Branco', price: 5.00, category: 'doces' },
    'choco-preto': { name: 'Borda de Chocolate Preto', price: 5.00, category: 'doces' },
    'gergelim': { name: 'Borda com Gergelim Branco', price: 5.00, category: 'ambas' }
};

/* ==========================================================================
   Firebase Initialization
   ========================================================================== */
if (typeof firebase !== 'undefined' && typeof firebaseConfig !== 'undefined' && firebaseConfig.apiKey !== 'SUA_API_KEY') {
    firebase.initializeApp(firebaseConfig);
}

/* ==========================================================================
   State Variables
   ========================================================================== */
let cart = [];
let currentPizza = null;
let checkoutType = 'delivery'; // 'delivery' or 'pickup'
let isShopOpen = true; // Sincronizado do Firebase
const DELIVERY_FEE = 10.00;

let CONFIG_SETTINGS = {
    whatsapp: '5554996704189',
    whatsappFormatted: '(54) 99670-4189'
};

let TAXAS_ENTREGA = {
    'centro': { name: 'Centro', fee: 10.00 },
    'logradouro': { name: 'Logradouro', fee: 10.00 },
    'juriti': { name: 'Juriti', fee: 10.00 },
    'pousada': { name: 'Pousada', fee: 15.00 },
    'bavaria': { name: 'Bavária', fee: 15.00 },
    'pia': { name: 'Pia', fee: 15.00 },
    'vila-rica': { name: 'Vila Rica', fee: 18.00 },
    'vale-verde': { name: 'Vale Verde', fee: 18.00 },
    'vila-germania': { name: 'Vila Germânia', fee: 18.00 },
    'linha-imperial': { name: 'Linha Imperial', fee: 22.00 },
    'vila-olinda': { name: 'Vila Olinda', fee: 25.00 },
    'linha-olinda': { name: 'Linha Olinda', fee: 30.00 },
    'pinhal': { name: 'Pinhal', fee: 40.00 }
};

function getDeliveryFeeForBairro(bairroName) {
    if (!bairroName) return 10.00;
    const key = bairroName.toLowerCase().trim().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return TAXAS_ENTREGA[key] !== undefined ? TAXAS_ENTREGA[key].fee : 10.00;
}

function populateNeighborhoodDropdown() {
    const select = document.getElementById('addressBairro');
    if (!select) return;
    
    const currentVal = select.value;
    select.innerHTML = '<option value="" disabled selected>Selecione seu bairro...</option>';
    
    Object.keys(TAXAS_ENTREGA).forEach(key => {
        const item = TAXAS_ENTREGA[key];
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `${item.name} - R$ ${item.fee.toFixed(2).replace('.', ',')}`;
        select.appendChild(opt);
    });
    
    if (currentVal && TAXAS_ENTREGA[currentVal]) {
        select.value = currentVal;
    }
}

function updateContactInfoUI() {
    const footerPhone = document.getElementById('footerCompanyPhone');
    if (footerPhone) {
        footerPhone.innerHTML = `<span class="material-symbols-rounded">phone</span> ${CONFIG_SETTINGS.whatsappFormatted || CONFIG_SETTINGS.whatsapp}`;
    }
}

/* ==========================================================================
   Açaí Customizer & State Operations
   ========================================================================== */
let currentAcai = {
    size: '300ml',
    freeAdditions: [],
    paidAdditions: [],
    notes: '',
    quantity: 1,
    totalPrice: 17
};

const ACAI_FREE_ADDITIONS = [
    "Chocoboll", "Leite condensado", "Paçoca", "Disket", "Negresco", 
    "Banana", "Morango", "Uva", "Abacaxi", "Pêssego", "Kiwi", 
    "Leite em pó", "Calda de morango", "Calda de chocolate", 
    "Chocolate branco", "Chocolate preto", "Chocolate meio amargo", 
    "Marshmallow", "Granola", "Granola caseira", "Calda de caramelo"
];

const ACAI_PAID_5 = [
    "MM's", "Ouro Branco", "Creme de Choco Preto", "Creme de Choco Branco", 
    "Nutella", "Pistache", "Kit Kat", "Creme de Kinder Bueno", 
    "Creme Leite Ninho", "Creme Capuccino", "Creme Coco Cremoso"
];

const ACAI_PAID_2_5 = [
    "Stikadinho", "Prestigio", "Doce de Leite"
];

function renderAcais() {
    const acaisGrid = document.getElementById('acaisGrid');
    if (!acaisGrid) return;
    acaisGrid.innerHTML = '';
    
    const acais = MENU_ITEMS.acais || [
        { id: "acai_300ml", name: "Açaí 300ml", description: "Escolha até 3 adicionais grátis inclusos no copo.", price: 17.00, image: "assets/acai_hero.png", size: "300ml", maxFree: 3 },
        { id: "acai_500ml", name: "Açaí 500ml", description: "Escolha até 4 adicionais grátis inclusos no copo.", price: 24.00, image: "assets/acai_hero.png", size: "500ml", maxFree: 4 },
        { id: "acai_700ml", name: "Açaí 700ml", description: "Escolha até 5 adicionais grátis inclusos no copo.", price: 30.00, image: "assets/acai_hero.png", size: "700ml", maxFree: 5 }
    ];
    
    acais.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        const imagePath = item.image || 'assets/acai_hero.png';
        const descHTML = item.description ? `<p class="item-card-desc">${item.description}</p>` : '';
        
        card.innerHTML = `
            <div class="item-card-image-wrapper">
                <img src="${imagePath}" alt="${item.name}" loading="lazy">
            </div>
            <div class="item-card-content">
                <h3 class="item-card-title">${item.name}</h3>
                ${descHTML}
                <div class="item-card-footer">
                    <div class="item-card-price">
                        <span class="price-value">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button class="btn-add" onclick="openAcaiCustomizer('${item.size}')" title="Personalizar Açaí" style="background: linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%);">
                        <span class="material-symbols-rounded">edit_note</span>
                    </button>
                </div>
            </div>
        `;
        acaisGrid.appendChild(card);
    });
}

function openAcaiCustomizer(sizeId) {
    const modal = document.getElementById('acaiCustomizerModal');
    if (!modal) return;
    
    currentAcai = {
        size: sizeId || '300ml',
        freeAdditions: [],
        paidAdditions: [],
        notes: '',
        quantity: 1,
        totalPrice: 0
    };
    
    const radio = document.querySelector(`input[name="acai-size"][value="${currentAcai.size}"]`);
    if (radio) radio.checked = true;
    
    document.getElementById('acaiNotes').value = '';
    document.getElementById('acaiCustomizerQty').innerText = '1';
    
    renderAcaiAdditionsLists();
    onAcaiSizeChange();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAcaiCustomizer() {
    const modal = document.getElementById('acaiCustomizerModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function onAcaiSizeChange() {
    const checkedRadio = document.querySelector('input[name="acai-size"]:checked');
    if (!checkedRadio) return;
    
    const size = checkedRadio.value;
    const maxFree = parseInt(checkedRadio.getAttribute('data-max-free'));
    
    currentAcai.size = size;
    
    const badge = document.getElementById('acaiCustomizerHeaderBadge');
    if (badge) badge.innerText = size;
    
    const helperText = document.getElementById('acaiFreeLimitText');
    if (helperText) {
        helperText.innerText = `Selecione até ${maxFree} adicionais grátis`;
    }
    
    if (currentAcai.freeAdditions.length > maxFree) {
        currentAcai.freeAdditions = currentAcai.freeAdditions.slice(0, maxFree);
    }
    
    updateAcaiCheckboxesState();
    calculateAcaiPrice();
}

function renderAcaiAdditionsLists() {
    const freeContainer = document.getElementById('acaiFreeAdditionsContainer');
    const paid5Container = document.getElementById('acaiPaid5AdditionsContainer');
    const paid25Container = document.getElementById('acaiPaid25AdditionsContainer');
    
    if (!freeContainer || !paid5Container || !paid25Container) return;
    
    freeContainer.innerHTML = '';
    ACAI_FREE_ADDITIONS.forEach(name => {
        const checked = currentAcai.freeAdditions.includes(name) ? 'checked' : '';
        const label = document.createElement('label');
        label.className = 'border-card';
        label.innerHTML = `
            <input type="checkbox" name="acai-free-add" value="${name}" onchange="handleAcaiFreeClick(this)" ${checked}>
            <div class="border-card-content">
                <span>${name}</span>
                <span class="border-price">Grátis</span>
            </div>
        `;
        freeContainer.appendChild(label);
    });
    
    paid5Container.innerHTML = '';
    ACAI_PAID_5.forEach(name => {
        const checked = currentAcai.paidAdditions.some(a => a.name === name) ? 'checked' : '';
        const label = document.createElement('label');
        label.className = 'border-card';
        label.innerHTML = `
            <input type="checkbox" name="acai-paid-add" value="${name}" data-price="5" onchange="handleAcaiPaidClick(this)" ${checked}>
            <div class="border-card-content">
                <span>${name}</span>
                <span class="border-price">+ R$ 5,00</span>
            </div>
        `;
        paid5Container.appendChild(label);
    });
    
    paid25Container.innerHTML = '';
    ACAI_PAID_2_5.forEach(name => {
        const checked = currentAcai.paidAdditions.some(a => a.name === name) ? 'checked' : '';
        const label = document.createElement('label');
        label.className = 'border-card';
        label.innerHTML = `
            <input type="checkbox" name="acai-paid-add" value="${name}" data-price="2.5" onchange="handleAcaiPaidClick(this)" ${checked}>
            <div class="border-card-content">
                <span>${name}</span>
                <span class="border-price">+ R$ 2,50</span>
            </div>
        `;
        paid25Container.appendChild(label);
    });
}

function handleAcaiFreeClick(checkbox) {
    const value = checkbox.value;
    const checkedRadio = document.querySelector('input[name="acai-size"]:checked');
    const maxFree = checkedRadio ? parseInt(checkedRadio.getAttribute('data-max-free')) : 3;
    
    if (checkbox.checked) {
        if (currentAcai.freeAdditions.length >= maxFree) {
            checkbox.checked = false;
            alert(`Você pode escolher no máximo ${maxFree} adicionais grátis para este tamanho.`);
            return;
        }
        currentAcai.freeAdditions.push(value);
    } else {
        const idx = currentAcai.freeAdditions.indexOf(value);
        if (idx !== -1) currentAcai.freeAdditions.splice(idx, 1);
    }
    
    updateAcaiVisualPills();
    calculateAcaiPrice();
}

function handleAcaiPaidClick(checkbox) {
    const value = checkbox.value;
    const price = parseFloat(checkbox.getAttribute('data-price'));
    
    if (checkbox.checked) {
        if (!currentAcai.paidAdditions.some(a => a.name === value)) {
            currentAcai.paidAdditions.push({ name: value, price: price });
        }
    } else {
        const idx = currentAcai.paidAdditions.findIndex(a => a.name === value);
        if (idx !== -1) currentAcai.paidAdditions.splice(idx, 1);
    }
    
    updateAcaiVisualPills();
    calculateAcaiPrice();
}

function updateAcaiCheckboxesState() {
    const checkboxes = document.querySelectorAll('input[name="acai-free-add"]');
    checkboxes.forEach(cb => {
        cb.checked = currentAcai.freeAdditions.includes(cb.value);
    });
    
    const paidCbs = document.querySelectorAll('input[name="acai-paid-add"]');
    paidCbs.forEach(cb => {
        cb.checked = currentAcai.paidAdditions.some(a => a.name === cb.value);
    });
    
    updateAcaiVisualPills();
}

function updateAcaiVisualPills() {
    const container = document.getElementById('activeAcaiAdditionsPills');
    if (!container) return;
    container.innerHTML = '';
    
    currentAcai.freeAdditions.forEach(name => {
        const pill = document.createElement('span');
        pill.className = 'flavor-pill';
        pill.style.background = 'rgba(74, 20, 140, 0.08)';
        pill.style.color = '#4a148c';
        pill.style.border = '1px solid rgba(74, 20, 140, 0.2)';
        pill.innerHTML = `${name} <span class="pill-remove" onclick="removeAcaiPill('free', '${name}')">×</span>`;
        container.appendChild(pill);
    });
    
    currentAcai.paidAdditions.forEach(item => {
        const pill = document.createElement('span');
        pill.className = 'flavor-pill';
        pill.style.background = '#e1bee7';
        pill.style.color = '#4a148c';
        pill.style.border = '1px solid #4a148c';
        pill.innerHTML = `${item.name} (+R$ ${item.price.toFixed(2)}) <span class="pill-remove" onclick="removeAcaiPill('paid', '${item.name}')">×</span>`;
        container.appendChild(pill);
    });
}

function removeAcaiPill(type, name) {
    if (type === 'free') {
        const idx = currentAcai.freeAdditions.indexOf(name);
        if (idx !== -1) currentAcai.freeAdditions.splice(idx, 1);
    } else {
        const idx = currentAcai.paidAdditions.findIndex(a => a.name === name);
        if (idx !== -1) currentAcai.paidAdditions.splice(idx, 1);
    }
    
    updateAcaiCheckboxesState();
    calculateAcaiPrice();
}

function adjustAcaiQty(delta) {
    let newQty = currentAcai.quantity + delta;
    if (newQty < 1) newQty = 1;
    currentAcai.quantity = newQty;
    document.getElementById('acaiCustomizerQty').innerText = newQty;
    calculateAcaiPrice();
}

function calculateAcaiPrice() {
    const checkedRadio = document.querySelector('input[name="acai-size"]:checked');
    if (!checkedRadio) return;
    
    const basePrice = parseFloat(checkedRadio.getAttribute('data-price'));
    const paidSum = currentAcai.paidAdditions.reduce((sum, item) => sum + item.price, 0);
    
    const singlePrice = basePrice + paidSum;
    currentAcai.totalPrice = singlePrice * currentAcai.quantity;
    
    const btn = document.getElementById('btnAddToOrderAcai');
    if (btn) {
        btn.innerText = `Adicionar ao Pedido — R$ ${currentAcai.totalPrice.toFixed(2).replace('.', ',')}`;
    }
}

function addAcaiToOrder() {
    currentAcai.notes = document.getElementById('acaiNotes').value.trim();
    
    const cartItem = {
        type: 'acai',
        id: 'acai_' + currentAcai.size,
        name: `Açaí ${currentAcai.size}`,
        size: currentAcai.size,
        freeAdditions: [...currentAcai.freeAdditions],
        paidAdditions: currentAcai.paidAdditions.map(a => ({ name: a.name, price: a.price })),
        notes: currentAcai.notes,
        quantity: currentAcai.quantity,
        singlePrice: currentAcai.totalPrice / currentAcai.quantity,
        totalPrice: currentAcai.totalPrice
    };
    
    cart.push(cartItem);
    saveCartToLocalStorage();
    updateCartUI();
    closeAcaiCustomizer();
    toggleCart(true);
    
    const badge = document.getElementById('cartCountBadge');
    if (badge) {
        badge.classList.remove('animate-bounce');
        void badge.offsetWidth;
        badge.classList.add('animate-bounce');
    }
}

/* ==========================================================================
   Cart State Operations & Layout Rendering
   ========================================================================== */
let PIZZA_TYPES = [];

/* ==========================================================================
   Initialization / DOM Loading
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    populateNeighborhoodDropdown();
    updateContactInfoUI();
    
    // Render default menu immediately as a fallback
    PIZZA_TYPES = getPizzaTypesDynamic();
    renderMenu();

    initMenuData();
    initShopStatusListener();
    setupPizzaCustomizerEvents();
    setupNavigationTabs();
    setupSubcategoryTabs();
    loadCartFromLocalStorage();
    initGSAPAnimations();
});

function initGSAPAnimations() {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Header animations
        gsap.from('.pizzeria-brand-wrapper', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
        gsap.from('.pizzeria-subtitle, .hero-slogan', { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' });
        gsap.from('.hero-pizza-image', { opacity: 0, scale: 0.8, duration: 1.2, delay: 0.5, ease: 'back.out(1.7)' });

        // Category Cards Scroll Animation
        gsap.from('.size-intro-card', {
            scrollTrigger: {
                trigger: '.pizza-size-selector-intro',
                start: 'top 90%',
                once: true
            },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out'
        });
    }
}

/* ==========================================================================
   Tab Navigation & Category Switching
   ========================================================================== */
function setupNavigationTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const targetId = tab.getAttribute('data-target');
            const sections = document.querySelectorAll('.menu-category-section');
            sections.forEach(sec => sec.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            // Trigger scroll trigger refresh to adjust animations
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        });
    });
}

function setupSubcategoryTabs() {
    // Pizza Subcategory Tabs
    const pizzaSubtabs = document.querySelectorAll('.pizza-subtabs .sub-tab');
    if (pizzaSubtabs.length > 0) {
        pizzaSubtabs.forEach(tab => {
            tab.addEventListener('click', () => {
                pizzaSubtabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const sub = tab.getAttribute('data-sub');
                renderPizzas(sub);
            });
        });
    } else {
        // Fallback para caso não tenha a classe pizza-subtabs
        const subtabs = document.querySelectorAll('.sub-tab:not(.lanches-subtabs .sub-tab)');
        subtabs.forEach(tab => {
            tab.addEventListener('click', () => {
                subtabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const sub = tab.getAttribute('data-sub');
                renderPizzas(sub);
            });
        });
    }
    
    // Lanches Subcategory Tabs
    const lanchesSubtabs = document.querySelectorAll('.lanches-subtabs .sub-tab');
    lanchesSubtabs.forEach(tab => {
        tab.addEventListener('click', () => {
            lanchesSubtabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const sub = tab.getAttribute('data-sub');
            renderLanches(sub);
        });
    });
}

/* ==========================================================================
   Render Catalog Functions
   ========================================================================== */
function renderMenu() {
    renderPizzas('salgadas');
    renderLanches('xis');
    renderBebidas();
    renderAcais();
}

function renderPizzas(subcategory = 'salgadas') {
    const pizzasGrid = document.getElementById('pizzasGrid');
    if (!pizzasGrid) return;
    pizzasGrid.innerHTML = '';
    
    const pizzas = MENU_ITEMS.pizzas || [];
    const filtered = pizzas.filter(p => p.category === subcategory && p.available !== false);
    
    filtered.forEach(pizza => {
        pizzasGrid.appendChild(createPizzaFlavorCard(pizza));
    });
}

function createPizzaFlavorCard(pizza) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    const pB = pizza.prices?.B || 0;
    const pM = pizza.prices?.M || 0;
    const pG = pizza.prices?.G || 0;
    const pF = pizza.prices?.F || 0;
    
    const nonZeroPrices = [pB, pM, pG, pF].filter(p => p > 0);
    const priceMin = nonZeroPrices.length > 0 ? Math.min(...nonZeroPrices) : 0;
    const priceMax = nonZeroPrices.length > 0 ? Math.max(...nonZeroPrices) : 0;
    
    const badgeHTML = pizza.badge ? `<span class="item-card-badge">${pizza.badge}</span>` : '';
    const categoryTag = '';
    
    card.innerHTML = `
        <div class="item-card-image-wrapper">
            ${badgeHTML}
            <img src="${pizza.image}" alt="${pizza.name}" loading="lazy">
        </div>
        <div class="item-card-content">
            <div class="item-card-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h3 class="item-card-title" style="margin: 0; font-size: 18px; font-weight: 600;">${pizza.name}</h3>
                ${categoryTag}
            </div>
            <p class="item-card-desc" style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px; flex-grow: 1;">${pizza.description}</p>
            <div class="item-card-footer">
                <div class="item-card-price">
                    <span class="from-text">Valores (B / M / G / F)</span>
                    <span class="price-value" style="font-size: 16px; font-weight: 700; color: #ffffff;">R$ ${priceMin.toFixed(2).replace('.', ',')} a R$ ${priceMax.toFixed(2).replace('.', ',')}</span>
                </div>
                <button class="btn-add" onclick="openPizzaCustomizerWithFlavor('${pizza.id}')" title="Escolher este sabor">
                    <span class="material-symbols-rounded">local_pizza</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function openPizzaCustomizerWithFlavor(flavorId) {
    openPizzaCustomizer('grande');
    handleFlavorSelection(flavorId);
}

function renderBebidas() {
    const bebidasGrid = document.getElementById('bebidasGrid');
    if (!bebidasGrid) return;
    bebidasGrid.innerHTML = '';
    
    MENU_ITEMS.bebidas.forEach(item => {
        bebidasGrid.appendChild(createSimpleItemCard(item, 'bebidas'));
    });
}

function renderLanches(subcategory = 'xis') {
    const lanchesGrid = document.getElementById('lanchesGrid');
    if (!lanchesGrid) return;
    lanchesGrid.innerHTML = '';
    
    const lanches = MENU_ITEMS.lanches || [];
    const filtered = lanches.filter(l => l.category === subcategory && l.available !== false);
    
    filtered.forEach(lanche => {
        lanchesGrid.appendChild(createSimpleItemCard(lanche, 'lanches'));
    });
}

function createSimpleItemCard(item, category) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    const imagePath = item.image || (category === 'bebidas' ? 'assets/pizza_hero.png' : 'assets/pizza_hero.png');
    const descHTML = item.description ? `<p class="item-card-desc">${item.description}</p>` : '';
    
    card.innerHTML = `
        <div class="item-card-image-wrapper">
            <img src="${imagePath}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-card-content">
            <h3 class="item-card-title">${item.name}</h3>
            ${descHTML}
            <div class="item-card-footer">
                <div class="item-card-price">
                    <span class="price-value">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <button class="btn-add" onclick="addSimpleItemToCart('${item.id}', '${category}')" title="Adicionar ao carrinho">
                    <span class="material-symbols-rounded">add_shopping_cart</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function setupPizzaCustomizerEvents() {
    const form = document.getElementById('pizzaCustomizerForm');
    if (!form) return;
    
    // Listen for size changes to adjust rules/flavors
    form.addEventListener('change', (e) => {
        if (e.target.name === 'pizza-size') {
            onSizeChange();
        } else if (e.target.name === 'pizza-flavor' || e.target.name === 'pizza-border') {
            calculateCustomizerPrice();
        }
    });
}

function openPizzaCustomizer(sizeId) {
    const modal = document.getElementById('customizerModal');
    
    // Set customizer initial pizza state
    currentPizza = {
        size: sizeId,
        selectedFlavors: [],
        border: 'sem-borda',
        notes: '',
        quantity: 1,
        totalPrice: 0
    };
    
    // Update radio select size
    const radio = document.querySelector(`input[name="pizza-size"][value="${sizeId}"]`);
    if (radio) radio.checked = true;
    
    // Reset inputs
    document.getElementById('pizzaNotes').value = '';
    document.getElementById('customizerQty').innerText = '1';
    
    // Reset carousel filter
    currentFlavorsFilter = 'todas';
    
    onSizeChange();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePizzaCustomizer() {
    const modal = document.getElementById('customizerModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function onSizeChange() {
    const size = document.querySelector('input[name="pizza-size"]:checked').value;
    currentPizza.size = size;
    
    // Clear selected flavors when size changes
    currentPizza.selectedFlavors = [];
    
    // Update header size badge
    const headerBadge = document.getElementById('customizerHeaderBadge');
    if (headerBadge) {
        headerBadge.innerText = TAMANHO_REGRAS[size].name;
    }
    
    // Set flavor rules
    const rules = TAMANHO_REGRAS[size];
    document.getElementById('flavorSelectionLimitText').innerText = `Selecione até ${rules.maxFlavors} sabores (Cobrado pelo maior valor)`;
    
    // Re-render carousel and borders
    renderCustomizerFlavors();
    renderCustomizerBorders();
    calculateCustomizerPrice();
    updateVisualPizza();
}

let currentFlavorsFilter = 'todas';

function filterFlavorsCarousel(category) {
    currentFlavorsFilter = category;
    
    // Update active tab styling
    const tabs = document.querySelectorAll('#carouselFilterTabs .filter-tab');
    tabs.forEach(tab => {
        const action = tab.getAttribute('onclick');
        if (action && action.includes(`'${category}'`)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    renderCustomizerFlavors();
}

function updateCarouselFilterTabs(hasSalty, hasSweet) {
    const tabs = document.querySelectorAll('#carouselFilterTabs .filter-tab');
    tabs.forEach(tab => {
        const action = tab.getAttribute('onclick');
        if (!action) return;
        const match = action.match(/'([^']+)'/);
        if (!match) return;
        const category = match[1];
        if (hasSweet && category === 'salgadas') {
            tab.style.opacity = '0.3';
            tab.style.pointerEvents = 'none';
        } else if (hasSalty && category === 'doces') {
            tab.style.opacity = '0.3';
            tab.style.pointerEvents = 'none';
        } else {
            tab.style.opacity = '1';
            tab.style.pointerEvents = 'auto';
        }
    });
}

function renderCustomizerFlavors() {
    const container = document.getElementById('customizerFlavorsList');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Check if the current selection contains sweet or salty flavors
    let hasSalty = false;
    let hasSweet = false;
    
    if (currentPizza && currentPizza.selectedFlavors) {
        currentPizza.selectedFlavors.forEach(flavorId => {
            const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
            if (flavorData) {
                if (flavorData.category === 'doces') {
                    hasSweet = true;
                } else {
                    hasSalty = true;
                }
            }
        });
    }
    
    // Update tabs compatibility
    updateCarouselFilterTabs(hasSalty, hasSweet);
    
    // Filter flavors based on category selection AND sweet/salty restrictions
    let items = MENU_ITEMS.pizzas.filter(p => p.available !== false);
    
    if (hasSweet) {
        items = items.filter(p => p.category === 'doces');
    } else if (hasSalty) {
        items = items.filter(p => p.category === 'salgadas');
    } else {
        // Apply tab filter
        if (currentFlavorsFilter === 'salgadas') {
            items = items.filter(p => p.category === 'salgadas');
        } else if (currentFlavorsFilter === 'doces') {
            items = items.filter(p => p.category === 'doces');
        }
    }
    
    if (items.length === 0) {
        container.innerHTML = '<p class="text-muted" style="padding: 20px; font-size: 13px;">Nenhum sabor disponível.</p>';
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        const isActive = currentPizza.selectedFlavors.includes(item.id);
        const flavorIndex = currentPizza.selectedFlavors.indexOf(item.id);
        
        card.className = `flavor-carousel-card ${isActive ? 'active' : ''}`;
        card.onclick = () => handleFlavorSelection(item.id);
        
        let selectNumberHTML = '';
        if (isActive) {
            selectNumberHTML = `<span class="flavor-selection-number">${flavorIndex + 1}º</span>`;
        }
        
        const catLabel = item.category === 'doces' ? 'Doce' : 'Salgada';
        const sizeKey = SIZE_MAP[currentPizza.size] || 'M';
        const isEligiblePromo = CONFIG_SETTINGS && CONFIG_SETTINGS.promoActive && sizeKey === (CONFIG_SETTINGS.promoSize || 'G') && item.isPromo;
        
        const priceVal = isEligiblePromo 
            ? (parseFloat(CONFIG_SETTINGS.promoPrice) || 95.00) 
            : ((item.prices && item.prices[sizeKey]) || 0);
            
        const priceLabel = `R$ ${priceVal.toFixed(0)}`;
        const promoLabel = isEligiblePromo ? ' <span style="color:#ffc107; font-weight:bold;">(Promo)</span>' : '';
        
        card.innerHTML = `
            ${selectNumberHTML}
            <div class="flavor-circle-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/pizza_hero.png'">
            </div>
            <span class="flavor-name">${item.name}</span>
            <span class="flavor-category-badge">${catLabel} • ${priceLabel}${promoLabel}</span>
        `;
        container.appendChild(card);
    });
}

function handleFlavorSelection(flavorId) {
    const size = currentPizza.size;
    const rules = TAMANHO_REGRAS[size];
    const index = currentPizza.selectedFlavors.indexOf(flavorId);
    
    if (index > -1) {
        // Remove flavor
        currentPizza.selectedFlavors.splice(index, 1);
    } else {
        // Add flavor
        if (currentPizza.selectedFlavors.length >= rules.maxFlavors) {
            alert(`Para pizza ${TAMANHO_NOMES[size]}, o limite é de no máximo ${rules.maxFlavors} sabores.`);
            return;
        }
        currentPizza.selectedFlavors.push(flavorId);
        
        // Trigger entrance animation for this flavor slice
        animateSliceAddition(flavorId);
    }
    
    renderCustomizerFlavors();
    renderCustomizerBorders();
    calculateCustomizerPrice();
    updateVisualPizza();
}

function animateSliceAddition(flavorId) {
    if (typeof gsap !== 'undefined') {
        setTimeout(() => {
            const sliceEl = document.querySelector(`.pizza-slice-overlay[data-flavor-id="${flavorId}"]`);
            if (sliceEl) {
                gsap.fromTo(sliceEl, 
                    { scale: 1.5, rotation: -20, opacity: 0, y: -50 },
                    { scale: 1, rotation: 0, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.2)' }
                );
            }
        }, 50);
    }
}

function updateVisualPizza() {
    const display = document.getElementById('visualPizzaDisplay');
    const activePills = document.getElementById('activeFlavorsPills');
    if (!display) return;
    
    display.innerHTML = '';
    if (activePills) activePills.innerHTML = '';
    
    const size = currentPizza.size;
    const selected = currentPizza.selectedFlavors;
    
    // 1. Render Base Crust Background
    const baseImg = document.createElement('div');
    baseImg.className = 'pizza-crust-base';
    const sizeBaseImage = size === 'media' ? 'assets/pizza_media.jpg' : 'assets/pizza_grande.jpg';
    baseImg.style.backgroundImage = `url('${sizeBaseImage}')`;
    display.appendChild(baseImg);
    
    // 2. Render Overlay Slices
    if (selected.length === 0) {
        const slice = document.createElement('img');
        slice.className = 'pizza-slice-overlay';
        slice.src = 'assets/pizza_hero.png';
        slice.style.filter = 'saturate(0.7) brightness(0.95)';
        display.appendChild(slice);
        
        if (activePills) {
            activePills.innerHTML = `<span style="color: var(--text-muted); font-size: 11px; font-style: italic;">Toque nos sabores abaixo para montar</span>`;
        }
        return;
    }
    
    let clips = [];
    if (selected.length === 1) {
        clips = ['none'];
    } else if (selected.length === 2) {
        clips = [
            'polygon(0 0, 50% 0, 50% 100%, 0 100%)', // Left half
            'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' // Right half
        ];
    } else if (selected.length === 3) {
        clips = [
            'polygon(50% 50%, 50% 0%, 100% 0%, 100% 75%, 93.3% 75%)',
            'polygon(50% 50%, 93.3% 75%, 100% 75%, 100% 100%, 0% 100%, 0% 75%, 6.7% 75%)',
            'polygon(50% 50%, 6.7% 75%, 0% 75%, 0% 0%, 50% 0%)'
        ];
    }
    
    selected.forEach((flavorId, index) => {
        const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
        if (!flavorData) return;
        const flavorImage = flavorData.image || 'assets/pizza_hero.png';
        
        const slice = document.createElement('img');
        slice.className = 'pizza-slice-overlay';
        slice.src = flavorImage;
        slice.style.clipPath = clips[index];
        slice.setAttribute('data-flavor-id', flavorId);
        display.appendChild(slice);
        
        // Add visual lines for dividers
        if (selected.length > 1) {
            if (selected.length === 2 && index === 0) {
                const divider = document.createElement('div');
                divider.className = 'pizza-slice-divider';
                divider.style.position = 'absolute';
                divider.style.left = '50%';
                divider.style.top = '0';
                divider.style.width = '2px';
                divider.style.height = '100%';
                divider.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
                divider.style.boxShadow = '0 0 8px var(--primary)';
                divider.style.transform = 'translateX(-50%)';
                divider.style.zIndex = '3';
                display.appendChild(divider);
            } else if (selected.length === 3 && index === 0) {
                // Line 1: Top vertical
                const d1 = document.createElement('div');
                d1.className = 'pizza-slice-divider';
                d1.style.position = 'absolute';
                d1.style.left = '50%';
                d1.style.top = '0';
                d1.style.width = '2px';
                d1.style.height = '50%';
                d1.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
                d1.style.boxShadow = '0 0 8px var(--primary)';
                d1.style.transform = 'translateX(-50%)';
                d1.style.zIndex = '3';
                display.appendChild(d1);
                
                // Line 2: Down-right at 120deg
                const d2 = document.createElement('div');
                d2.className = 'pizza-slice-divider';
                d2.style.position = 'absolute';
                d2.style.left = '50%';
                d2.style.top = '50%';
                d2.style.width = '2px';
                d2.style.height = '50%';
                d2.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
                d2.style.boxShadow = '0 0 8px var(--primary)';
                d2.style.transformOrigin = 'top center';
                d2.style.transform = 'translateX(-50%) rotate(120deg)';
                d2.style.zIndex = '3';
                display.appendChild(d2);
                
                // Line 3: Down-left at 240deg
                const d3 = document.createElement('div');
                d3.className = 'pizza-slice-divider';
                d3.style.position = 'absolute';
                d3.style.left = '50%';
                d3.style.top = '50%';
                d3.style.width = '2px';
                d3.style.height = '50%';
                d3.style.backgroundColor = 'rgba(212, 175, 55, 0.4)';
                d3.style.boxShadow = '0 0 8px var(--primary)';
                d3.style.transformOrigin = 'top center';
                d3.style.transform = 'translateX(-50%) rotate(240deg)';
                d3.style.zIndex = '3';
                display.appendChild(d3);
            }
        }
        
        // Pills
        if (activePills) {
            const pill = document.createElement('div');
            pill.className = 'flavor-pill';
            
            let label = '';
            if (selected.length === 1) label = 'Inteira';
            else if (selected.length === 2) label = `Metade ${index + 1}`;
            else label = `1/3 Fatia ${index + 1}`;
            
            pill.innerHTML = `
                <span class="slice-num">${index + 1}</span>
                <span><strong>${label}:</strong> ${flavorData.name}</span>
                <button type="button" class="btn-remove-pill" onclick="handleFlavorSelection('${flavorId}')" title="Remover sabor">
                    <span class="material-symbols-rounded">close</span>
                </button>
            `;
            activePills.appendChild(pill);
        }
    });
}

function adjustCustomizerQty(delta) {
    let qty = currentPizza.quantity + delta;
    if (qty < 1) qty = 1;
    currentPizza.quantity = qty;
    document.getElementById('customizerQty').innerText = qty;
    calculateCustomizerPrice();
}

function calculateCustomizerPrice() {
    if (currentPizza.selectedFlavors.length === 0) {
        document.getElementById('btnAddToOrder').disabled = true;
        document.getElementById('btnAddToOrder').innerText = 'Escolha pelo menos 1 sabor';
        return;
    }
    
    document.getElementById('btnAddToOrder').disabled = false;
    
    // Calcula o preço cobrado pelo maior valor entre os sabores selecionados para o tamanho atual
    let maxFlavorPrice = 0;
    const sizeKey = SIZE_MAP[currentPizza.size] || 'M'; // 'B', 'M', 'G', 'F'
    
    // Verifica se todos os sabores selecionados são promocionais
    let allFlavorsArePromo = currentPizza.selectedFlavors.length > 0;
    currentPizza.selectedFlavors.forEach(flavorId => {
        const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
        if (!flavorData || !flavorData.isPromo) {
            allFlavorsArePromo = false;
        }
    });
    
    // Se a promoção estiver ativa para o tamanho atual e todos os sabores forem promocionais
    if (CONFIG_SETTINGS && CONFIG_SETTINGS.promoActive && sizeKey === (CONFIG_SETTINGS.promoSize || 'G') && allFlavorsArePromo) {
        maxFlavorPrice = parseFloat(CONFIG_SETTINGS.promoPrice) || 95.00;
    } else {
        currentPizza.selectedFlavors.forEach(flavorId => {
            const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
            if (flavorData && flavorData.prices) {
                const price = parseFloat(flavorData.prices[sizeKey]) || 0;
                if (price > maxFlavorPrice) {
                    maxFlavorPrice = price;
                }
            }
        });
    }
    
    // Se por algum motivo o preço não puder ser calculado individualmente, usa o fallback da matriz anterior
    if (maxFlavorPrice === 0 && PIZZA_PRICES && PIZZA_PRICES[currentPizza.size]) {
        const CATEGORY_VALUES = {
            'tradicional': 1,
            'especial': 2
        };
        let maxCategory = 'tradicional';
        let maxVal = 0;
        currentPizza.selectedFlavors.forEach(flavorId => {
            const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
            if (flavorData) {
                const catType = flavorData.categoryType || 'tradicional';
                const val = CATEGORY_VALUES[catType] || 1;
                if (val > maxVal) {
                    maxVal = val;
                    maxCategory = catType;
                }
            }
        });
        maxFlavorPrice = PIZZA_PRICES[currentPizza.size][maxCategory] || 0;
    }
    
    const borderRadio = document.querySelector('input[name="pizza-border"]:checked');
    const borderPrice = borderRadio ? parseFloat(borderRadio.getAttribute('data-price')) : 0;
    
    currentPizza.border = borderRadio ? borderRadio.value : 'sem-borda';
    
    const singlePrice = maxFlavorPrice + borderPrice;
    currentPizza.totalPrice = singlePrice * currentPizza.quantity;
    
    document.getElementById('btnAddToOrder').innerText = `Adicionar ao Pedido — R$ ${currentPizza.totalPrice.toFixed(2).replace('.', ',')}`;
}

function addPizzaToOrder() {
    if (currentPizza.selectedFlavors.length === 0) return;
    
    currentPizza.notes = document.getElementById('pizzaNotes').value.trim();
    
    const cartItem = {
        type: 'pizza',
        size: currentPizza.size,
        sizeName: TAMANHO_NOMES[currentPizza.size],
        border: currentPizza.border,
        borderName: BORDAS[currentPizza.border] ? (BORDAS[currentPizza.border].price === 0 ? BORDAS[currentPizza.border].name : `${BORDAS[currentPizza.border].name} (+ R$ ${BORDAS[currentPizza.border].price.toFixed(2).replace('.', ',')})`) : 'Sem Borda',
        flavors: [...currentPizza.selectedFlavors],
        flavorNames: currentPizza.selectedFlavors.map(fId => {
            return MENU_ITEMS.pizzas.find(p => p.id === fId).name;
        }),
        notes: currentPizza.notes,
        quantity: currentPizza.quantity,
        singlePrice: currentPizza.totalPrice / currentPizza.quantity,
        totalPrice: currentPizza.totalPrice
    };
    
    cart.push(cartItem);
    saveCartToLocalStorage();
    updateCartUI();
    closePizzaCustomizer();
    toggleCart(true);
    
    const badge = document.getElementById('cartCountBadge');
    badge.classList.remove('animate-bounce');
    void badge.offsetWidth;
    badge.classList.add('animate-bounce');
}

/* ==========================================================================
   Add Simple Items (Drinks)
   ========================================================================== */
function addSimpleItemToCart(itemId, category) {
    let list = [];
    if (category === 'bebidas') {
        list = MENU_ITEMS.bebidas;
    } else if (category === 'lanches') {
        list = MENU_ITEMS.lanches;
    }
    const itemData = list.find(item => item.id === itemId);
    
    if (!itemData) return;
    
    // Check if item already exists in cart to increment qty
    const existingIndex = cart.findIndex(cItem => cItem.type === 'simple' && cItem.id === itemId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
        cart[existingIndex].totalPrice = cart[existingIndex].quantity * cart[existingIndex].singlePrice;
    } else {
        cart.push({
            type: 'simple',
            id: itemId,
            name: itemData.name,
            category: category,
            quantity: 1,
            singlePrice: itemData.price,
            totalPrice: itemData.price
        });
    }
    
    saveCartToLocalStorage();
    updateCartUI();
    toggleCart(true);
}

/* ==========================================================================
   Cart State Operations & Layout Rendering
   ========================================================================== */
function toggleCart(isOpen) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    
    if (isOpen) {
        drawer.classList.add('active');
        overlay.classList.add('active');
    } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function updateCartQty(index, delta) {
    if (index >= cart.length) return;
    
    cart[index].quantity += delta;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // remove
    } else {
        cart[index].totalPrice = cart[index].quantity * cart[index].singlePrice;
    }
    
    saveCartToLocalStorage();
    updateCartUI();
}

function updateCartUI() {
    const emptyState = document.getElementById('cartEmptyState');
    const content = document.getElementById('cartContent');
    const itemsList = document.getElementById('cartItemsList');
    
    let totalItems = 0;
    let subtotal = 0;
    
    itemsList.innerHTML = '';
    
    if (cart.length === 0) {
        emptyState.classList.remove('display-none');
        content.classList.add('display-none');
        document.getElementById('cartCountBadge').innerText = '0';
        return;
    }
    
    emptyState.classList.add('display-none');
    content.classList.remove('display-none');
    
    cart.forEach((item, index) => {
        totalItems += item.quantity;
        subtotal += item.totalPrice;
        
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        
        let detailsHTML = '';
        let titleHTML = '';
        
        if (item.type === 'pizza') {
            titleHTML = `Pizza ${item.sizeName}`;
            detailsHTML = `
                <div class="cart-item-subtitle">
                    <strong>Sabores:</strong> ${item.flavorNames.join(' / ')}<br>
                    <strong>Borda:</strong> ${item.borderName}
                </div>
            `;
            if (item.notes) {
                detailsHTML += `<div class="cart-item-notes">Obs: ${item.notes}</div>`;
            }
        } else if (item.type === 'acai') {
            titleHTML = `Açaí ${item.size}`;
            let adds = [];
            if (item.freeAdditions && item.freeAdditions.length > 0) {
                adds.push(`Grátis: ${item.freeAdditions.join(', ')}`);
            }
            if (item.paidAdditions && item.paidAdditions.length > 0) {
                adds.push(`Pagos: ${item.paidAdditions.map(a => a.name).join(', ')}`);
            }
            detailsHTML = `
                <div class="cart-item-subtitle">
                    ${adds.length > 0 ? `<strong>Adicionais:</strong> ${adds.join('<br>')}` : 'Sem adicionais'}
                </div>
            `;
            if (item.notes) {
                detailsHTML += `<div class="cart-item-notes">Obs: ${item.notes}</div>`;
            }
        } else {
            titleHTML = item.name;
        }
        
        itemRow.innerHTML = `
            <div class="cart-item-details">
                <h4 class="cart-item-title">${titleHTML}</h4>
                ${detailsHTML}
                <div class="cart-item-action">
                    <span class="cart-item-price">R$ ${item.totalPrice.toFixed(2).replace('.', ',')}</span>
                    <div class="item-qty-adjuster">
                        <button onclick="updateCartQty(${index}, -1)"><span class="material-symbols-rounded">remove</span></button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQty(${index}, 1)"><span class="material-symbols-rounded">add</span></button>
                    </div>
                </div>
            </div>
        `;
        
        itemsList.appendChild(itemRow);
    });
    
    // Values Summary
    let deliveryFee = 0;
    if (checkoutType === 'delivery') {
        const bairroSelect = document.getElementById('addressBairro');
        const selectedBairro = bairroSelect ? bairroSelect.value : '';
        deliveryFee = selectedBairro ? getDeliveryFeeForBairro(selectedBairro) : DELIVERY_FEE;
    }
    const finalTotal = subtotal + deliveryFee;
    
    document.getElementById('cartSubtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('cartDeliveryFee').innerText = deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
    document.getElementById('cartTotal').innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('cartCountBadge').innerText = totalItems;
    
    // Desabilitar botão de checkout se a pizzaria estiver fechada
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        if (!isShopOpen) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            checkoutBtn.style.cursor = 'not-allowed';
            checkoutBtn.style.pointerEvents = 'none';
            const spanText = checkoutBtn.querySelector('span');
            if (spanText) spanText.innerText = 'Pizzaria Fechada';
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '';
            checkoutBtn.style.cursor = '';
            checkoutBtn.style.pointerEvents = '';
            const spanText = checkoutBtn.querySelector('span');
            if (spanText) spanText.innerText = 'Finalizar Pedido';
        }
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('fina_massa_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const stored = localStorage.getItem('fina_massa_cart');
    if (stored) {
        try {
            cart = JSON.parse(stored);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

/* ==========================================================================
   Checkout Modal Handlers
   ========================================================================== */
function openCheckoutModal() {
    if (!isShopOpen) {
        alert("A Pizzaria Drill está fechada para pedidos no momento. Agradecemos a compreensão!");
        return;
    }
    toggleCart(false); // Close cart sidebar
    const modal = document.getElementById('checkoutModal');
    
    let subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let fee = 0;
    if (checkoutType === 'delivery') {
        const bairroSelect = document.getElementById('addressBairro');
        const selectedBairro = bairroSelect ? bairroSelect.value : '';
        fee = selectedBairro ? getDeliveryFeeForBairro(selectedBairro) : DELIVERY_FEE;
    }
    
    // Handle Cash 5% discount
    const isCash = document.querySelector('input[name="payment-method"]:checked').value === 'cash';
    let total = subtotal + fee;
    if (isCash) {
        total = (subtotal * 0.95) + fee;
    }
    
    document.getElementById('checkoutTotalValue').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Subcategory Switcher inside Customizer (visual sub-tabs)
function renderPizzasFlavorsGrid(subcategory) {
    // In this premium site, we render all categories stacked, so sub-tab filters can scroll to the subcategory
    const container = document.getElementById('customizerFlavorsList');
    if (!container) return;
    
    // Encontrar todos os títulos de categorias e rolar para eles ou ocultar
    const headers = container.querySelectorAll('.customizer-flavor-category-title');
    const blocks = [];
    let currentBlock = null;
    
    container.childNodes.forEach(node => {
        if (node.className === 'customizer-flavor-category-title') {
            currentBlock = { header: node, items: [] };
            blocks.push(currentBlock);
        } else if (currentBlock) {
            currentBlock.items.push(node);
        }
    });
    
    blocks.forEach(block => {
        const text = block.header.innerText.toLowerCase();
        let show = false;
        
        if (subcategory === 'salgadas' && text.includes('salgadas')) {
            show = true;
        } else if (subcategory === 'doces' && text.includes('doces')) {
            show = true;
        }
        
        block.header.style.display = show ? 'block' : 'none';
        block.items.forEach(item => item.style.display = show ? 'flex' : 'none');
    });
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function setCheckoutType(type) {
    checkoutType = type;
    const deliveryTab = document.getElementById('deliveryTab');
    const pickupTab = document.getElementById('pickupTab');
    const addressSection = document.getElementById('addressSection');
    
    const street = document.getElementById('addressStreet');
    const number = document.getElementById('addressNumber');
    const neighborhood = document.getElementById('addressBairro');
    
    if (type === 'delivery') {
        deliveryTab.classList.add('active');
        pickupTab.classList.remove('active');
        addressSection.classList.remove('display-none');
        
        street.required = true;
        number.required = true;
        neighborhood.required = true;
    } else {
        deliveryTab.classList.remove('active');
        pickupTab.classList.add('active');
        addressSection.classList.add('display-none');
        
        street.required = false;
        number.required = false;
        neighborhood.required = false;
    }
    
    // Update summary price
    updateCheckoutPrice();
}

function togglePaymentFields() {
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const cashChangeGroup = document.getElementById('cashChangeGroup');
    const pixInstructions = document.getElementById('pixInstructions');
    
    if (selectedMethod === 'cash') {
        cashChangeGroup.classList.remove('display-none');
        pixInstructions.classList.add('display-none');
    } else if (selectedMethod === 'pix') {
        cashChangeGroup.classList.add('display-none');
        pixInstructions.classList.remove('display-none');
    } else {
        cashChangeGroup.classList.add('display-none');
        pixInstructions.classList.add('display-none');
    }
    
    updateCheckoutPrice();
}

function updateCheckoutPrice() {
    let subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let fee = 0;
    if (checkoutType === 'delivery') {
        const bairroSelect = document.getElementById('addressBairro');
        const selectedBairro = bairroSelect ? bairroSelect.value : '';
        fee = selectedBairro ? getDeliveryFeeForBairro(selectedBairro) : DELIVERY_FEE;
    }
    
    // 5% discount on subtotal if payment is Cash
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
    let total = subtotal + fee;
    if (selectedMethod === 'cash') {
        total = (subtotal * 0.95) + fee;
    }
    
    document.getElementById('checkoutTotalValue').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function submitOrder() {
    const form = document.getElementById('checkoutForm');
    
    // Check validation manually to avoid full page reload
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const clientName = document.getElementById('clientName').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    let subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let fee = 0;
    if (checkoutType === 'delivery') {
        const bairroSelect = document.getElementById('addressBairro');
        const selectedBairro = bairroSelect ? bairroSelect.value : '';
        fee = selectedBairro ? getDeliveryFeeForBairro(selectedBairro) : DELIVERY_FEE;
    }
    
    let total = subtotal + fee;
    let discountMsg = '';
    
    if (paymentMethod === 'cash') {
        total = (subtotal * 0.95) + fee;
        discountMsg = `\n*(Desconto Dinheiro de 5% aplicado no subtotal!)*`;
    }
    
    // Building WhatsApp Message
    let msg = `🍕 *NOVO PEDIDO - PIZZARIA DRILL* 🍕\n`;
    msg += `----------------------------------------\n\n`;
    msg += `👤 *Cliente:* ${clientName}\n`;
    msg += `📞 *WhatsApp:* ${clientPhone}\n`;
    msg += `📦 *Tipo:* ${checkoutType === 'delivery' ? '🚗 Entrega (Delivery)' : '🏪 Retirada no Balcão'}\n\n`;
    
    if (checkoutType === 'delivery') {
        const street = document.getElementById('addressStreet').value.trim();
        const number = document.getElementById('addressNumber').value.trim();
        const neighborhood = document.getElementById('addressBairro').value.trim();
        const ref = document.getElementById('addressRef').value.trim();
        
        msg += `📍 *Endereço de Entrega:*\n`;
        msg += `${street}, nº ${number}\n`;
        msg += `Bairro: ${neighborhood}\n`;
        if (ref) msg += `Ref/Complemento: ${ref}\n`;
        msg += `\n`;
    } else {
        msg += `📍 *Retirada em:* Rua das Quaresmeiras, Nº 30 - Vale Verde, Nova Petrópolis\n\n`;
    }
    
    msg += `🛒 *Itens do Pedido:*\n`;
    msg += `----------------------------------------\n`;
    
    cart.forEach(item => {
        if (item.type === 'pizza') {
            msg += `• *1x Pizza ${item.sizeName}*\n`;
            msg += `  Sabores: ${item.flavorNames.join(' e ')}\n`;
            msg += `  Borda: ${item.borderName}\n`;
            if (item.notes) msg += `  Observação: _"${item.notes}"_\n`;
            msg += `  *Subtotal:* R$ ${item.totalPrice.toFixed(2)}\n\n`;
        } else if (item.type === 'acai') {
            msg += `• *${item.quantity}x Açaí ${item.size}*\n`;
            if (item.freeAdditions && item.freeAdditions.length > 0) {
                msg += `  Adicionais Grátis: ${item.freeAdditions.join(', ')}\n`;
            }
            if (item.paidAdditions && item.paidAdditions.length > 0) {
                msg += `  Adicionais Pagos: ${item.paidAdditions.map(a => `${a.name} (+R$ ${a.price.toFixed(2)})`).join(', ')}\n`;
            }
            if (item.notes) msg += `  Observação: _"${item.notes}"_\n`;
            msg += `  *Subtotal:* R$ ${item.totalPrice.toFixed(2)}\n\n`;
        } else {
            msg += `• *${item.quantity}x ${item.name}*\n`;
            msg += `  *Subtotal:* R$ ${item.totalPrice.toFixed(2)}\n\n`;
        }
    });
    
    msg += `----------------------------------------\n`;
    msg += `💵 *Subtotal:* R$ ${subtotal.toFixed(2)}\n`;
    msg += `🚗 *Taxa de Entrega:* ${fee === 0 ? 'Grátis' : `R$ ${fee.toFixed(2)}`}\n`;
    msg += `💰 *Total a pagar:* R$ ${total.toFixed(2)}${discountMsg}\n\n`;
    
    msg += `💳 *Forma de Pagamento:* `;
    if (paymentMethod === 'pix') {
        msg += `Pix\n*(Chave Pix: 658101070000140)*`;
    } else if (paymentMethod === 'card') {
        msg += `Cartão (Levar Maquininha)`;
    } else {
        const change = document.getElementById('cashChange').value.trim();
        msg += `Dinheiro`;
        if (change) msg += ` (Troco para R$ ${change})`;
    }
    
    // Format URL
    const whatsappNumber = CONFIG_SETTINGS.whatsapp;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMsg}`;
    
    // Envia o pedido para o painel da revenda (Firebase ou Servidor Local)
    const orderData = {
        clientName: clientName,
        clientPhone: clientPhone,
        checkoutType: checkoutType,
        address: checkoutType === 'delivery' ? {
            street: document.getElementById('addressStreet').value.trim(),
            number: document.getElementById('addressNumber').value.trim(),
            neighborhood: document.getElementById('addressBairro').value.trim(),
            reference: document.getElementById('addressRef').value.trim()
        } : null,
        paymentMethod: paymentMethod,
        cashChange: paymentMethod === 'cash' ? document.getElementById('cashChange').value.trim() : null,
        cart: cart,
        subtotal: subtotal,
        deliveryFee: fee,
        total: total
    };

    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        const orderId = Date.now();
        const timeFormatted = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const dateFormatted = new Date().toLocaleDateString('pt-BR');
        
        const firebaseOrder = {
            ...orderData,
            id: orderId,
            status: 'Pendente',
            timestamp: orderId,
            time: timeFormatted,
            date: dateFormatted
        };

        firebase.database().ref('fina_massa_orders/' + orderId).set(firebaseOrder)
        .catch(err => {
            console.error("Erro ao enviar para o Firebase, enviando para o servidor local:", err);
            fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })
            .catch(localErr => console.error("Erro ao enviar pedido para o painel local:", localErr));
        });
    } else {
        fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
        .catch(err => console.error("Erro ao enviar pedido para o painel local:", err));
    }

    // Clear cart and close modals
    cart = [];
    saveCartToLocalStorage();
    updateCartUI();
    closeCheckoutModal();
    
    // Open WhatsApp link in new tab
    window.open(whatsappLink, '_blank');
    
    // Show success dialog
    alert('Pedido enviado com sucesso! Você será redirecionado para o WhatsApp para confirmar.');
}
/* ==========================================================================
   Dynamic Menu Synchronization (Firebase)
   ========================================================================== */
function initMenuData() {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        const menuRef = firebase.database().ref('pizzaria_drill_menu');
        menuRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                let updated = false;
                if (data.menu_items && data.menu_items.bebidas) {
                    const hasZero600 = data.menu_items.bebidas.some(b => b.id === 'coca_zero_600');
                    if (!hasZero600) {
                        const idx = data.menu_items.bebidas.findIndex(b => b.id === 'coca_600');
                        const newItem = { id: 'coca_zero_600', name: 'Coca Cola Zero 600ml', price: 10.00, image: 'assets/coca_cola.png', available: true };
                        if (idx !== -1) {
                            data.menu_items.bebidas.splice(idx + 1, 0, newItem);
                        } else {
                            data.menu_items.bebidas.push(newItem);
                        }
                        updated = true;
                    }
                    const hasZeroLata = data.menu_items.bebidas.some(b => b.id === 'coca_zero_lata');
                    if (!hasZeroLata) {
                        const idx = data.menu_items.bebidas.findIndex(b => b.id === 'coca_lata');
                        const newItem = { id: 'coca_zero_lata', name: 'Coca Cola Zero lata', price: 6.00, image: 'assets/coca_cola.png', available: true };
                        if (idx !== -1) {
                            data.menu_items.bebidas.splice(idx + 1, 0, newItem);
                        } else {
                            data.menu_items.bebidas.push(newItem);
                        }
                        updated = true;
                    }
                }
                
                if (updated) {
                    firebase.database().ref('pizzaria_drill_menu').set(data)
                    .then(() => console.log("Cardápio atualizado com as opções de Coca Zero."))
                    .catch(err => console.error("Erro ao atualizar Coca Zero:", err));
                    return; // The database update will trigger this on('value') again
                }

                if (data.menu_items) {
                    MENU_ITEMS = data.menu_items;
                    if (!MENU_ITEMS.acais) {
                        MENU_ITEMS.acais = [
                            { id: "acai_300ml", name: "Açaí 300ml", description: "Escolha até 3 adicionais grátis inclusos no copo.", price: 17.00, image: "assets/acai_hero.png", size: "300ml", maxFree: 3 },
                            { id: "acai_500ml", name: "Açaí 500ml", description: "Escolha até 4 adicionais grátis inclusos no copo.", price: 24.00, image: "assets/acai_hero.png", size: "500ml", maxFree: 4 },
                            { id: "acai_700ml", name: "Açaí 700ml", description: "Escolha até 5 adicionais grátis inclusos no copo.", price: 30.00, image: "assets/acai_hero.png", size: "700ml", maxFree: 5 }
                        ];
                    }
                }
                if (data.pizza_prices) PIZZA_PRICES = data.pizza_prices;
                if (data.borders) BORDAS = data.borders;
                if (data.settings) {
                    CONFIG_SETTINGS = { ...CONFIG_SETTINGS, ...data.settings };
                    if (data.settings.deliveryFees) TAXAS_ENTREGA = data.settings.deliveryFees;
                    populateNeighborhoodDropdown();
                    updateContactInfoUI();
                }
                
                // Rebuild dynamic parts
                PIZZA_TYPES = getPizzaTypesDynamic();
                renderMenu();
                
                // If customizer is open, update it
                if (document.getElementById('customizerModal').classList.contains('active')) {
                    renderCustomizerFlavors();
                    renderCustomizerBorders();
                    calculateCustomizerPrice();
                }
            } else {
                seedFirebaseMenu();
            }
        }, (error) => {
            console.error("Erro ao carregar o cardápio do Firebase:", error);
            // Fallback para dev server local / padrões
            PIZZA_TYPES = getPizzaTypesDynamic();
            renderMenu();
        });
    } else {
        // Fallback for local dev server
        PIZZA_TYPES = getPizzaTypesDynamic();
        renderMenu();
    }
}

function initShopStatusListener() {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        firebase.database().ref('pizzaria_drill_status/isOpen').on('value', (snapshot) => {
            const isOpen = snapshot.val();
            if (isOpen !== null) {
                isShopOpen = isOpen;
                updateShopStatusUI();
            }
        }, (error) => {
            console.error("Erro ao obter status de funcionamento do Firebase:", error);
            isShopOpen = true;
            updateShopStatusUI();
        });
    } else {
        // Fallback for local dev server
        isShopOpen = true;
        updateShopStatusUI();
    }
}

function updateShopStatusUI() {
    const statusBadge = document.getElementById('statusBadge');
    if (statusBadge) {
        if (isShopOpen) {
            statusBadge.className = 'status-badge open';
            statusBadge.innerHTML = '<span class="dot animate-pulse"></span> Aberto agora para pedidos';
        } else {
            statusBadge.className = 'status-badge closed';
            statusBadge.innerHTML = '<span class="dot"></span> Fechado no momento';
        }
    }
    
    // Disable/enable checkout button and update text in cart UI
    updateCartUI();
}

function seedFirebaseMenu() {
    if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        firebase.database().ref('pizzaria_drill_menu').set({
            menu_items: MENU_ITEMS,
            pizza_prices: PIZZA_PRICES,
            borders: BORDAS
        })
        .then(() => console.log("Cardápio semeado no Firebase com sucesso."))
        .catch(err => console.error("Erro ao semear o cardápio no Firebase:", err));
    }
}

function getMinPriceForSize(sizeKey) {
    let min = Infinity;
    const pizzas = MENU_ITEMS.pizzas || [];
    pizzas.forEach(p => {
        if (p.prices && p.prices[sizeKey] && p.prices[sizeKey] > 0) {
            if (p.prices[sizeKey] < min) min = p.prices[sizeKey];
        }
    });
    return min === Infinity ? 0 : min;
}

function getPizzaTypesDynamic() {
    const minB = getMinPriceForSize('B');
    const minM = getMinPriceForSize('M');
    const minG = getMinPriceForSize('G');
    const minF = getMinPriceForSize('F');
    
    return [
        {
            id: 'brotinho',
            name: 'Pizza Brotinho',
            description: `Brotinho (20cm) • 4 fatias • 1 sabor • A partir de R$ ${minB.toFixed(2).replace('.', ',')}`,
            image: 'assets/pizza_media.jpg',
            priceMin: minB,
            priceMax: minB
        },
        {
            id: 'media',
            name: 'Pizza Média',
            description: `Média (25cm) • 6 fatias • Até 2 sabores • A partir de R$ ${minM.toFixed(2).replace('.', ',')}`,
            image: 'assets/pizza_media.jpg',
            priceMin: minM,
            priceMax: minM
        },
        {
            id: 'grande',
            name: 'Pizza Grande',
            description: `Grande (35cm) • 12 fatias • Até 3 sabores • A partir de R$ ${minG.toFixed(2).replace('.', ',')}`,
            image: 'assets/pizza_grande.jpg',
            priceMin: minG,
            priceMax: minG
        },
        {
            id: 'familia',
            name: 'Pizza Família',
            description: `Família (40cm) • 16 fatias • Até 4 sabores • A partir de R$ ${minF.toFixed(2).replace('.', ',')}`,
            image: 'assets/pizza_grande.jpg',
            priceMin: minF,
            priceMax: minF
        }
    ];
}

function renderCustomizerBorders() {
    const container = document.getElementById('bordersContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Check if the current selection contains only sweet flavors
    let hasSalty = false;
    let hasSweet = false;
    
    currentPizza.selectedFlavors.forEach(flavorId => {
        const flavorData = MENU_ITEMS.pizzas.find(p => p.id === flavorId);
        if (flavorData) {
            if (flavorData.category === 'doces') {
                hasSweet = true;
            } else {
                hasSalty = true;
            }
        }
    });
    
    // Determine target category
    const targetCategory = hasSweet ? 'doces' : 'salgadas';
    
    // Render borders based on category
    Object.keys(BORDAS).forEach(key => {
        const border = BORDAS[key];
        
        // Determinar se a borda pertence à categoria desejada
        let borderCat = border.category;
        if (!borderCat) {
            // Fallback para dados legados no Firebase
            if (key === 'sem-borda') {
                borderCat = 'ambas';
            } else {
                const cleanKey = key.toLowerCase();
                if (cleanKey.includes('choco') || cleanKey.includes('doce') || cleanKey.includes('leite') || cleanKey.includes('misto')) {
                    borderCat = 'doces';
                } else {
                    borderCat = 'salgadas';
                }
            }
        }
        
        // Se a pizza é doce (hasSweet = true), mostramos apenas as doces e 'ambas'
        // Se a pizza é salgada (targetCategory === 'salgadas'), mostramos salgadas, doces e 'ambas' (todas)
        if (targetCategory === 'doces' && borderCat !== 'ambas' && borderCat !== 'doces') {
            return;
        }
        
        const isChecked = currentPizza.border === key ? 'checked' : '';
        const priceLabel = border.price === 0 ? 'Grátis' : `+ R$ ${border.price.toFixed(2).replace('.', ',')}`;
        
        const label = document.createElement('label');
        label.className = 'border-card';
        label.innerHTML = `
            <input type="radio" name="pizza-border" value="${key}" data-price="${border.price}" ${isChecked}>
            <div class="border-card-content">
                <span>${border.name}</span>
                <span class="border-price">${priceLabel}</span>
            </div>
        `;
        container.appendChild(label);
    });
    
    // Ensure one radio is checked if selection was reset
    const checkedRadio = container.querySelector('input[name="pizza-border"]:checked');
    if (!checkedRadio) {
        const defaultRadio = container.querySelector('input[name="pizza-border"][value="sem-borda"]');
        if (defaultRadio) {
            defaultRadio.checked = true;
            currentPizza.border = 'sem-borda';
        }
    }
}
