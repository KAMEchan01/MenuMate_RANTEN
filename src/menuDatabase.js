// 担々麺とサラダの店らんてん専用 MenuMateアプリケーション用メニューデータベース
const menuDatabase = {
  // 担々麺メニュー
  tantanmen: [
    {
      id: 'tantanmen_no_spice',
      name: '担々麺 辛さなし',
      price: 980,
      category: 'tantanmen',
      spicyLevel: 0,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: 'らんてんの基本の担々麺。胡麻の風味をお楽しみください'
    },
    {
      id: 'tantanmen_mild',
      name: '担々麺 辛さひかえめ',
      price: 980,
      category: 'tantanmen',
      spicyLevel: 2,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '辛さが得意じゃない方でも大丈夫な「小辛」程度'
    },
    {
      id: 'tantanmen_normal',
      name: '担々麺 辛さふつう',
      price: 980,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: 'らんてんの基本の担々麺。バランスの良い辛さと胡麻の風味。一般的な「中辛」'
    },

     {
      id: 'tantanmen_karamasi1',
      name: '担々麺 辛味増し＋1辛',
      price: 1020,
      category: 'tantanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '特製ブレンド辛み。'
    },
   {
      id: 'tantanmen_mala1',
      name: '担々麺 麻辣増し＋1辛',
      price: 1080,
      category: 'tantanmen',
      spicyLevel: 4,
      allergens: ['小麦', '大豆', 'ごま', '豚肉'],
      description: '自家製シビカラ　麻辣増し＋1辛'
    },
  
    {
      id: 'tantanmen_mala_spicy',
      name: 'シビれる辛口 麻辣担々麺　麺大盛り',
      price: 1230,
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
      spicyLevel: 2,
      allergens: ['小麦', '大豆', 'ごま', '豚肉', '卵'],
      description: 'ミシュランガイド掲載・中華20年のシェフが作る日替わりスープ・９種類の具材を堪能',
      isSignature: true,
      features: ['ミシュランガイド掲載', '中華20年シェフ', '日替わりスープ', '９種類の具材']
    }
  ],

  // 湯麺メニュー
  tanmen: [
    {
      id: 'sanratan',
      name: '酸辣湯麺',
      price: 1000,
      category: 'tanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '酸っぱ辛いスープが特徴の中華麺'
    },
    {
      id: 'sanratan_large',
      name: '酸辣湯麺 麺大盛り',
      price: 1120,
      category: 'tanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '酸辣湯麺の麺大盛りバージョン'
    },
    {
      id: 'sanratan_vinegar',
      name: '酸辣湯麺 黒酢添え',
      price: 1030,
      category: 'tanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '黒酢でさらに酸味をプラス'
    },
    {
      id: 'sanratan_egg',
      name: '温たま酸辣湯麺',
      price: 1140,
      category: 'tanmen',
      spicyLevel: 3,
      allergens: ['小麦', '大豆', '卵', '豚肉'],
      description: '温玉入りでまろやかな酸辣湯麺'
    },
    {
      id: 'shoyu_yunmen',
      name: '醤油湯麺',
      price: 990,
      category: 'tanmen',
      spicyLevel: 1,
      allergens: ['小麦', '大豆', '豚肉'],
      description: 'あっさり醤油味の優しい湯麺'
    },
    {
      id: 'shoyu_yunmen_large',
      name: '醤油湯麺 麺大盛り',
      price: 1110,
      category: 'tanmen',
      spicyLevel: 1,
      allergens: ['小麦', '大豆', '豚肉'],
      description: '醤油湯麺の麺大盛りバージョン'
    },
    {
      id: 'shoyu_yunmen_garlic',
      name: '醤油湯麺 生にんにく添え',
      price: 1030,
      category: 'tanmen',
      spicyLevel: 2,
      allergens: ['小麦', '大豆', '豚肉'],
      description: '生にんにくでパンチを効かせた醤油湯麺'
    },
    {
      id: 'shoyu_yunmen_egg',
      name: '温たま醤油湯麺',
      price: 1130,
      category: 'tanmen',
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
      price: 450,
      category: 'side',
      spicyLevel: 1,
      allergens: ['豚肉', '大豆'],
      description: '甘辛い肉そぼろ丼'
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
    },
    {
      id: 'gomadango_2',
      name: 'ごま団子2個',
      price: 350,
      category: 'side',
      spicyLevel: 0,
      allergens: ['小麦'],
      description: '中は黒ごまあん、外は白ごま'
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
    return [...this.tantanmen, ...this.tanmen, ...this.salads, ...this.sides];
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
