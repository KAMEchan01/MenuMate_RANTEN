// 担々麺とサラダの店らんてん専用 MenuMateアプリケーション用メニューデータベース
const menuDatabase = {
  // 担々麺メニュー
  tantanmen: [
    {
      id: 'tantanmen_basic',
      name: '担々麺',
      price: 800,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: 'らんてんの基本の担々麺。バランスの良い辛さと胡麻の風味'
    },
    {
      id: 'tantanmen_white_sesame',
      name: '白ごま担々麺',
      price: 1000,
      category: 'tantanmen',
      spicyLevel: 2,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '白ごまのまろやかさが特徴。辛さ控えめで初心者にもおすすめ'
    },
    {
      id: 'tantanmen_black_sesame',
      name: '黒ごま担々麺',
      price: 1000,
      category: 'tantanmen',
      spicyLevel: 4,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '黒ごまの濃厚な風味と強めの辛さが魅力'
    },
    {
      id: 'tantanmen_tomato',
      name: 'トマト担々麺',
      price: 1100,
      category: 'tantanmen',
      spicyLevel: 2,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: 'トマトの酸味がアクセント。さっぱりとした新感覚担々麺'
    },
    {
      id: 'tantanmen_mala_spicy',
      name: 'シビれる辛口 麻辣担々麺',
      price: 1080,
      category: 'tantanmen',
      spicyLevel: 5,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '本格四川の麻辣。シビれる辛さが癖になる激辛メニュー'
    },
    {
      id: 'tantanmen_mala_egg',
      name: '温玉・麻辣担々麺',
      price: 1220,
      category: 'tantanmen',
      spicyLevel: 5,
      allergens: ['小麦', '大豆', 'ごま', '豚肉', '卵'],
      description: '激辛麻辣に温玉がマイルドさをプラス'
    },
    {
      id: 'bangbanji_cold',
      name: 'バンバンジー冷麺',
      price: 1100,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '鶏肉'],
      description: '冷たい麺でさっぱり。バンバンジーソースが絶品'
    },
    {
      id: 'bangbanji_cold_egg',
      name: '温玉・バンバンジー冷麺',
      price: 1240,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '鶏肉', '卵'],
      description: 'バンバンジー冷麺に温玉をトッピング'
    },
    {
      id: 'ranten_signature_set',
      name: 'らんてん坦々和え麺セット',
      price: 1360,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '豚肉', '卵'],
      description: 'ミシュランガイド掲載・中華20年のシェフが作る日替わりスープ・９種類の具材を堪能',
      isSignature: true,
      features: ['ミシュランガイド掲載', '中華20年シェフ', '日替わりスープ', '９種類の具材']
    }
  ],

  // 湯麺メニュー
  yunmen: [
    {
      id: 'sanratan',
      name: '酸辣湯麺',
      price: 1000,
      category: 'yunmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '酸っぱ辛いスープが特徴の中華麺'
    },
    {
      id: 'sanratan_large',
      name: '酸辣湯麺 麺大盛り',
      price: 1120,
      category: 'yunmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '酸辣湯麺の麺大盛りバージョン'
    },
    {
      id: 'sanratan_vinegar',
      name: '酸辣湯麺 黒酢添え',
      price: 1030,
      category: 'yunmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '黒酢でさらに酸味をプラス'
    },
    {
      id: 'sanratan_egg',
      name: '温たま酸辣湯麺',
      price: 1140,
      category: 'yunmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '温玉入りでまろやかな酸辣湯麺'
    },
    {
      id: 'shoyu_yunmen',
      name: '醤油湯麺',
      price: 990,
      category: 'yunmen',
      spicyLevel: 1,
      allergens: ['小麦', '大豆', '豚肉'],
      description: 'あっさり醤油味の優しい湯麺'
    },
    {
      id: 'shoyu_yunmen_large',
      name: '醤油湯麺 麺大盛り',
      price: 1110,
      category: 'yunmen',
      spicyLevel: 1,
      allergens: ['小麦', '大豆', '豚肉'],
      description: '醤油湯麺の麺大盛りバージョン'
    },
    {
      id: 'shoyu_yunmen_garlic',
      name: '醤油湯麺 生にんにく添え',
      price: 1030,
      category: 'yunmen',
      spicyLevel: 2,
      allergens: ['小麦', '大豆', '豚肉'],
      description: '生にんにくでパンチを効かせた醤油湯麺'
    },
    {
      id: 'shoyu_yunmen_egg',
      name: '温たま醤油湯麺',
      price: 1130,
      category: 'yunmen',
      spicyLevel: 1,
      allergens: ['小麦', '大豆', '豚肉', '卵'],
      description: '温玉入りでマイルドな醤油湯麺'
    }
  ],

  // サラダメニュー
  salads: [
    {
      id: 'green_salad',
      name: 'グリーンサラダ',
      price: 600,
      category: 'salad',
      spicyLevel: 0,
      allergens: [],
      description: '新鮮野菜のシンプルサラダ'
    },
    {
      id: 'caesar_salad',
      name: 'シーザーサラダ',
      price: 650,
      category: 'salad',
      spicyLevel: 0,
      allergens: ['乳製品', '卵'],
      description: 'クリーミーなシーザードレッシングのサラダ'
    },
    {
      id: 'avocado_salad',
      name: 'アボカドサラダ',
      price: 750,
      category: 'salad',
      spicyLevel: 0,
      allergens: [],
      description: 'アボカドたっぷりのヘルシーサラダ'
    },
    {
      id: 'chicken_salad',
      name: 'チキンサラダ',
      price: 800,
      category: 'salad',
      spicyLevel: 0,
      allergens: ['鶏肉'],
      description: 'ジューシーなチキン入りサラダ'
    },
    {
      id: 'tofu_salad',
      name: 'もちもち豆腐サラダ',
      price: 400,
      category: 'salad',
      spicyLevel: 0,
      allergens: ['大豆'],
      description: 'もちもち食感の豆腐がメインのサラダ'
    },
    {
      id: 'fish_salad',
      name: 'うおせいサラダ',
      price: 500,
      category: 'salad',
      spicyLevel: 0,
      allergens: [],
      description: '魚介が入った海の恵みサラダ'
    }
  ],

  // サラダセットメニュー用ミニサラダ
  miniSalads: [
    {
      id: 'mini_green_salad',
      name: 'ミニグリーンサラダ',
      price: 200,
      category: 'mini_salad',
      spicyLevel: 0,
      allergens: [],
      description: 'グリーンサラダのミニサイズ'
    },
    {
      id: 'mini_tofu_salad',
      name: 'ミニもちもち豆腐サラダ',
      price: 250,
      category: 'mini_salad',
      spicyLevel: 0,
      allergens: ['大豆'],
      description: 'もちもち豆腐サラダのミニサイズ'
    },
    {
      id: 'mini_bangbanji_salad',
      name: 'ミニバンバンジーサラダ',
      price: 250,
      category: 'mini_salad',
      spicyLevel: 2,
      allergens: ['鶏肉', 'ごま'],
      description: 'バンバンジーサラダのミニサイズ'
    },
    {
      id: 'mini_fish_salad',
      name: 'ミニ魚せいサラダ',
      price: 300,
      category: 'mini_salad',
      spicyLevel: 0,
      allergens: [],
      description: '魚せいサラダのミニサイズ'
    }
  ],

  // サイドメニュー
  sides: [
    {
      id: 'meat_soboro_don',
      name: '肉そぼろ丼',
      price: 390,
      category: 'side',
      spicyLevel: 1,
      allergens: ['豚肉', '大豆'],
      description: '甘辛い肉そぼろのミニ丼'
    },
    {
      id: 'karaage_2',
      name: '鶏のから揚げ2個',
      price: 300,
      category: 'side',
      spicyLevel: 0,
      allergens: ['鶏肉', '小麦'],
      description: 'ジューシーなから揚げ2個'
    },
    {
      id: 'karaage_4',
      name: '鶏のから揚げ4個',
      price: 550,
      category: 'side',
      spicyLevel: 0,
      allergens: ['鶏肉', '小麦'],
      description: 'ジューシーなから揚げ4個'
    }
  ],

  // 辛さレベル説明
  spicyLevels: {
    0: { name: 'なし', description: '辛さなし' },
    1: { name: 'マイルド', description: 'お子様でも安心、ほんのり胡麻の香り' },
    2: { name: '弱辛', description: 'ピリッと程よい刺激、初心者におすすめ' },
    3: { name: '中辛', description: 'らんてんスタンダード、バランスの良い辛さ' },
    4: { name: '辛口', description: 'しっかりとした辛さ、汗をかく美味しさ' },
    5: { name: '激辛', description: '本格四川の辛さ、辛党も満足' }
  },

  // アレルゲン情報
  allergens: ['小麦', '大豆', '卵', '乳製品', 'ごま', 'えび', '鶏肉', '豚肉'],

  // メニュー取得メソッド
  getAllMenus() {
    return [...this.tantanmen, ...this.yunmen, ...this.salads, ...this.sides];
  },

  // カテゴリ別メニュー取得
  getMenusByCategory(category) {
    return this.getAllMenus().filter(menu => menu.category === category);
  },

  // アレルギー対応メニュー取得
  getMenusWithoutAllergens(excludeAllergens) {
    return this.getAllMenus().filter(menu => 
      !menu.allergens.some(allergen => excludeAllergens.includes(allergen))
    );
  },

  // 辛さレベル別メニュー取得
  getMenusBySpicyLevel(level) {
    return this.getAllMenus().filter(menu => menu.spicyLevel === level);
  },

  // 価格帯別メニュー取得
  getMenusByPriceRange(min, max) {
    return this.getAllMenus().filter(menu => menu.price >= min && menu.price <= max);
  }
};

export default menuDatabase;
