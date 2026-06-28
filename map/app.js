const mapConfig = {
  src: "tourist_map_base.svg",
  width: 842,
  height: 595,
  enTitle: "Royal Botanical Garden",
  zhTitle: "皇家植物园",
  enSubtitle: "Interactive tourist map",
  zhSubtitle: "互动式旅游地图",
  enAlt: "Interactive tourist map of Royal Botanical Garden",
  zhAlt: "皇家植物园互动式旅游地图"
};

const categories = [
  { id: "summerhouse", icon: "S", enLabel: "Summer House", zhLabel: "凉亭" },
  { id: "food", icon: "R", enLabel: "Restaurant", zhLabel: "餐厅" },
  { id: "toilet", icon: "T", enLabel: "Toilet", zhLabel: "洗手间" },
  { id: "vehiclepark", icon: "V", enLabel: "Vehicle Park", zhLabel: "停车场" }
];

const places = [
  {
    id: "restaurant-1",
    category: "food",
    x: 56.74,
    y: 39.26,
    enTitle: "Restaurant 1",
    zhTitle: "餐厅 1",
    enBody: "Restaurant location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的餐厅位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "restaurant-2",
    category: "food",
    x: 46.21,
    y: 58.44,
    enTitle: "Restaurant 2",
    zhTitle: "餐厅 2",
    enBody: "Restaurant location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的餐厅位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "restaurant-3",
    category: "food",
    x: 50.21,
    y: 68.4,
    enTitle: "Restaurant 3",
    zhTitle: "餐厅 3",
    enBody: "Restaurant location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的餐厅位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "restaurant-4",
    category: "food",
    x: 52.59,
    y: 67.61,
    enTitle: "Restaurant 4",
    zhTitle: "餐厅 4",
    enBody: "Restaurant location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的餐厅位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-1",
    category: "summerhouse",
    x: 31.73,
    y: 13.76,
    enTitle: "Summer House 1",
    zhTitle: "凉亭 1",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-2",
    category: "summerhouse",
    x: 39.85,
    y: 16.42,
    enTitle: "Summer House 2",
    zhTitle: "凉亭 2",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-3",
    category: "summerhouse",
    x: 37.39,
    y: 23.96,
    enTitle: "Summer House 3",
    zhTitle: "凉亭 3",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-4",
    category: "summerhouse",
    x: 50.77,
    y: 41.03,
    enTitle: "Summer House 4",
    zhTitle: "凉亭 4",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-5",
    category: "summerhouse",
    x: 59.72,
    y: 50.76,
    enTitle: "Summer House 5",
    zhTitle: "凉亭 5",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-6",
    category: "summerhouse",
    x: 61.54,
    y: 52.19,
    enTitle: "Summer House 6",
    zhTitle: "凉亭 6",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-7",
    category: "summerhouse",
    x: 37.7,
    y: 59.95,
    enTitle: "Summer House 7",
    zhTitle: "凉亭 7",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-8",
    category: "summerhouse",
    x: 41.63,
    y: 72.5,
    enTitle: "Summer House 8",
    zhTitle: "凉亭 8",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-9",
    category: "summerhouse",
    x: 45.38,
    y: 70.13,
    enTitle: "Summer House 9",
    zhTitle: "凉亭 9",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-10",
    category: "summerhouse",
    x: 54.6,
    y: 66.88,
    enTitle: "Summer House 10",
    zhTitle: "凉亭 10",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "summerhouse-11",
    category: "summerhouse",
    x: 39.12,
    y: 88.82,
    enTitle: "Summer House 11",
    zhTitle: "凉亭 11",
    enBody: "Summer House location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的凉亭位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-1",
    category: "toilet",
    x: 45.22,
    y: 19.09,
    enTitle: "Toilet 1",
    zhTitle: "洗手间 1",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-2",
    category: "toilet",
    x: 48.3,
    y: 20.07,
    enTitle: "Toilet 2",
    zhTitle: "洗手间 2",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-3",
    category: "toilet",
    x: 34.23,
    y: 30.66,
    enTitle: "Toilet 3",
    zhTitle: "洗手间 3",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-4",
    category: "toilet",
    x: 34.84,
    y: 33.01,
    enTitle: "Toilet 4",
    zhTitle: "洗手间 4",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-5",
    category: "toilet",
    x: 36.91,
    y: 45.3,
    enTitle: "Toilet 5",
    zhTitle: "洗手间 5",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-6",
    category: "toilet",
    x: 49.69,
    y: 39.46,
    enTitle: "Toilet 6",
    zhTitle: "洗手间 6",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-7",
    category: "toilet",
    x: 51.79,
    y: 43.07,
    enTitle: "Toilet 7",
    zhTitle: "洗手间 7",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-8",
    category: "toilet",
    x: 53.3,
    y: 42.76,
    enTitle: "Toilet 8",
    zhTitle: "洗手间 8",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-9",
    category: "toilet",
    x: 58.71,
    y: 52.22,
    enTitle: "Toilet 9",
    zhTitle: "洗手间 9",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-10",
    category: "toilet",
    x: 59.83,
    y: 52.48,
    enTitle: "Toilet 10",
    zhTitle: "洗手间 10",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-11",
    category: "toilet",
    x: 52.6,
    y: 63.97,
    enTitle: "Toilet 11",
    zhTitle: "洗手间 11",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-12",
    category: "toilet",
    x: 38.81,
    y: 82.06,
    enTitle: "Toilet 12",
    zhTitle: "洗手间 12",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "toilet-13",
    category: "toilet",
    x: 39.27,
    y: 83.74,
    enTitle: "Toilet 13",
    zhTitle: "洗手间 13",
    enBody: "Toilet location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的洗手间位置。等最终素材准备好后，可以加入照片和详细说明。"
  },
  {
    id: "vehiclepark-1",
    category: "vehiclepark",
    x: 52.51,
    y: 73.76,
    enTitle: "Vehicle Park 1",
    zhTitle: "停车场 1",
    enBody: "Vehicle Park location marked from the map. Add photos and details when the final materials are ready.",
    zhBody: "根据地图标注的停车场位置。等最终素材准备好后，可以加入照片和详细说明。"
  }
];

const numberedPointCoordinates = [
  { number: 1, x: 50.31, y: 66.62 },
  { number: 2, x: 46.01, y: 63.18 },
  { number: 3, x: 47.83, y: 74.25 },
  { number: 4, x: 44.01, y: 74.22 },
  { number: 5, x: 46.92, y: 85.4 },
  { number: 6, x: 45.54, y: 88.86 },
  { number: 7, x: 41.81, y: 93.19 },
  { number: 8, x: 40.37, y: 94.4 },
  { number: 9, x: 41.67, y: 88.92 },
  { number: 10, x: 38.42, y: 87.21 },
  { number: 11, x: 41.96, y: 86.12 },
  { number: 12, x: 42.59, y: 85.06 },
  { number: 13, x: 42.31, y: 83.33 },
  { number: 14, x: 40.41, y: 82.42 },
  { number: 15, x: 39.87, y: 80.67 },
  { number: 16, x: 41.88, y: 79.74 },
  { number: 17, x: 42.68, y: 71.41 },
  { number: 18, x: 39.74, y: 68.04 },
  { number: 19, x: 38.91, y: 62.21 },
  { number: 20, x: 36.98, y: 50.01 },
  { number: 21, x: 42.48, y: 52.29 },
  { number: 22, x: 37.83, y: 43.48 },
  { number: 23, x: 44.2, y: 48.47 },
  { number: 24, x: 45.18, y: 47.51 },
  { number: 25, x: 37.91, y: 27.89 },
  { number: 26, x: 33.4, y: 19.48 },
  { number: 27, x: 35.42, y: 13.84 },
  { number: 28, x: 37.04, y: 11.73 },
  { number: 29, x: 43.03, y: 32.42 },
  { number: 30, x: 51.76, y: 39.37 },
  { number: 31, x: 48.94, y: 41.84 },
  { number: 32, x: 61.81, y: 37.94 },
  { number: 33, x: 56.34, y: 49.7 },
  { number: 34, x: 57.12, y: 54.11 },
  { number: 35, x: 47.62, y: 51.71 },
  { number: 36, x: 52.54, y: 58.19 },
  { number: 37, x: 54.65, y: 59.8 },
  { number: 38, x: 58.46, y: 56.91 },
  { number: 39, x: 56.59, y: 62.68 },
  { number: 40, x: 54.12, y: 62.1 },
  { number: 41, x: 55.72, y: 64.83 },
  { number: 42, x: 52.11, y: 65.59 },
  { number: 43, x: 53.11, y: 69.75 },
  { number: 44, x: 50.48, y: 71.55 },
  { number: 45, x: 37.66, y: 14.73 },
  { number: 46, x: 59.61, y: 38.7 },
  { number: 47, x: 62.17, y: 57.73 }
];

const numberedLegend = {
  1: { en: "Inquiries", zh: "咨询处" },
  2: { en: "Double Coconuts", zh: "双椰子" },
  3: { en: "Pinetum", zh: "松柏园" },
  4: { en: "Rattan Collection", zh: "藤本植物区" },
  5: { en: "Ebony Collection", zh: "乌木植物区" },
  6: { en: "Agave Collection", zh: "龙舌兰植物区" },
  7: { en: "Wild Banana Collection", zh: "野香蕉植物区" },
  8: { en: "Pandan Collection", zh: "露兜树植物区" },
  9: { en: "Students' Garden", zh: "学生花园" },
  10: { en: "Bamboo Collection", zh: "竹类植物区" },
  11: { en: "Cycad Collection", zh: "苏铁植物区" },
  12: { en: "Water Plant Collection", zh: "水生植物区" },
  13: { en: "Palm Collection", zh: "棕榈植物区" },
  14: { en: "Lawn Cover Collection", zh: "草坪覆盖植物区" },
  15: { en: "Medicinal Garden", zh: "药用植物园" },
  16: { en: "Crop Wild Relative Plants", zh: "作物野生近缘植物区" },
  17: { en: "Giant Bamboo", zh: "巨竹" },
  18: { en: "Rock Border", zh: "岩石边界" },
  19: { en: "Gardener Monument", zh: "园丁纪念碑" },
  20: { en: "Cook's Pine Avenue", zh: "库克松大道" },
  21: { en: "Java Fig Tree", zh: "爪哇榕树" },
  22: { en: "National Herbarium", zh: "国家植物标本馆" },
  23: { en: "Rose Garden", zh: "玫瑰园" },
  24: { en: "Education Centre", zh: "教育中心" },
  25: { en: "Arboretum", zh: "树木园" },
  26: { en: "Ficus Collection", zh: "榕属植物区" },
  27: { en: "Suspension Bridge", zh: "吊桥" },
  28: { en: "Gannoruwa Entrance", zh: "甘诺鲁瓦入口" },
  29: { en: "Royal Palm Avenue", zh: "皇家棕榈大道" },
  30: { en: "Thwaites Monument", zh: "斯韦茨纪念碑" },
  31: { en: "Memorial Trees", zh: "纪念树" },
  32: { en: "Cabbage Palm Avenue", zh: "菜棕大道" },
  33: { en: "Palmyra Palm Avenue", zh: "扇叶棕大道" },
  34: { en: "Conservatory", zh: "温室" },
  35: { en: "Fernery", zh: "蕨类植物区" },
  36: { en: "Flower Garden", zh: "花园" },
  37: { en: "Orchid House", zh: "兰花温室" },
  38: { en: "Canarium Row", zh: "橄榄属树列" },
  39: { en: "Cactus House", zh: "仙人掌温室" },
  40: { en: "Plant House", zh: "植物温室" },
  41: { en: "Administration Building", zh: "行政楼" },
  42: { en: "Spice Garden", zh: "香料园" },
  43: { en: "Exit", zh: "出口" },
  44: { en: "Plant Sales Centre", zh: "植物销售中心" },
  45: { en: "Pollinator Garden", zh: "传粉者花园" },
  46: { en: "Museum", zh: "博物馆" },
  47: { en: "Children's Education Corner", zh: "儿童教育角" }
};

const numberedPhotoMap = {
  20: ["fig/cookspineavenue.jpg"],
  24: ["fig/greatcircle.jpg"],
  29: ["fig/royalpalmavenue.jpg"],
  31: ["fig/memorialtrees.jpg", "fig/memorialtrees2.jpg"],
  35: ["fig/fernery.jpg"],
  36: ["fig/flowergarden.jpg"],
  45: ["fig/pollinatorgarden.jpg"]
};

const numberedDetailMap = {
  1: {
    enStay: "2-3 min",
    zhStay: "2-3 分钟",
    enHighlight: "A practical first stop for orientation: use the inquiries point to confirm routes, facilities, and the best walking order before entering the main garden.",
    zhHighlight: "这是实用的起点，适合先确认路线、设施位置和游览顺序，再进入植物园主体区域。"
  },
  2: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Look for the remarkable double coconut, or coco de mer, a rare palm famous for producing one of the largest seeds in the plant world.",
    zhHighlight: "这里可以观察双椰子，也叫海椰子；它是一种珍稀棕榈，以植物界体量很大的种子而闻名。"
  },
  3: {
    enStay: "6-8 min",
    zhStay: "6-8 分钟",
    enHighlight: "This conifer-focused stop introduces gymnosperms such as pines and their relatives, adding a cooler-textured contrast to the tropical garden.",
    zhHighlight: "这个以松柏类为主题的点位介绍裸子植物，如松树及其近缘类群，为热带植物园增加了不同的质感。"
  },
  4: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Rattans are climbing palms; this collection is a good place to notice flexible stems, spines, and the link between living palms and cane materials.",
    zhHighlight: "藤本植物多为攀援型棕榈，这里适合观察柔韧茎、刺和这类植物与藤材利用之间的关系。"
  },
  5: {
    enStay: "5-7 min",
    zhStay: "5-7 分钟",
    enHighlight: "Use the Ebony Collection to connect plant diversity with timber value: ebony relatives are known for dense, dark wood and slow-growing trees.",
    zhHighlight: "乌木植物区适合把植物多样性与木材价值联系起来；乌木类植物常以深色、致密木材和较慢生长而著称。"
  },
  6: {
    enStay: "5-7 min",
    zhStay: "5-7 分钟",
    enHighlight: "Agaves show dry-zone adaptations in a compact form: rosette leaves, firm textures, and water-saving shapes suited to bright, exposed conditions.",
    zhHighlight: "龙舌兰展示了干旱环境适应特征，如莲座状叶片、坚韧质地和利于节水的形态。"
  },
  7: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Wild bananas help show that familiar crop plants have wild relatives, with large leaves and tropical forms that support studies of plant origins.",
    zhHighlight: "野香蕉区说明常见作物也有野生近缘类群，宽大的叶片和热带形态适合引出作物起源的话题。"
  },
  8: {
    enStay: "5-7 min",
    zhStay: "5-7 分钟",
    enHighlight: "Pandan plants are easy to recognize by their strap-like leaves and architectural forms; this stop works well for comparing leaf shapes and textures.",
    zhHighlight: "露兜树类植物常有带状叶片和很强的结构感，这里适合比较不同植物的叶形和质感。"
  },
  9: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The Students' Garden is a learning-oriented stop, useful for reading plant labels, comparing forms, and slowing the visit into observation.",
    zhHighlight: "学生花园是偏学习型的点位，适合阅读植物标签、比较形态，并把游览节奏放慢到观察。"
  },
  10: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Bamboo Collection highlights one of the most useful grass groups, from upright culms to clustered growth habits and fast tropical growth.",
    zhHighlight: "竹类植物区展示了重要的禾本科植物，从直立竹秆、丛生习性到快速生长特征都很值得观察。"
  },
  11: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Cycads look palm-like but belong to an ancient gymnosperm lineage, making this a useful stop for discussing living plant history.",
    zhHighlight: "苏铁看起来像棕榈，却属于古老的裸子植物类群；这里适合讲植物演化和活化石式的形态。"
  },
  12: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The Water Plant Collection shifts attention to aquatic adaptations such as floating leaves, moisture-loving roots, and plants shaped by wet habitats.",
    zhHighlight: "水生植物区把视线转向水域适应，如漂浮叶、喜湿根系，以及受湿地环境塑造的植物形态。"
  },
  13: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "Peradeniya is known for palms, and this collection is a strong place to compare trunks, crowns, leaf fans, and tropical avenue planting.",
    zhHighlight: "佩拉德尼亚以棕榈景观闻名，这里适合比较树干、树冠、扇状叶以及热带林荫大道式种植。"
  },
  14: {
    enStay: "4-6 min",
    zhStay: "4-6 分钟",
    enHighlight: "This quieter stop focuses on ground-layer plants, showing how low-growing species cover soil, soften paths, and complete the garden composition.",
    zhHighlight: "这个较安静的点位关注地被植物，展示低矮植物如何覆盖土壤、柔化道路并完善园林层次。"
  },
  15: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Medicinal Garden links botany with everyday knowledge, showing plants valued for traditional, educational, and research uses.",
    zhHighlight: "药用植物园把植物学与日常知识连接起来，展示在传统利用、教育和研究中有价值的植物。"
  },
  16: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Crop wild relatives are important for conservation because they preserve genetic diversity that can help future food and farming systems.",
    zhHighlight: "作物野生近缘植物对保护很重要，因为它们保存的遗传多样性可能支持未来粮食和农业发展。"
  },
  17: {
    enStay: "4-6 min",
    zhStay: "4-6 分钟",
    enHighlight: "A quick scale stop: giant bamboo shows how large a grass can become, with tall culms and a dramatic vertical rhythm.",
    zhHighlight: "这是一个很有尺度感的停靠点：巨竹展示了禾本科植物可以长到多高，竹秆形成强烈的竖向节奏。"
  },
  18: {
    enStay: "4-6 min",
    zhStay: "4-6 分钟",
    enHighlight: "The Rock Border is useful for noticing planting design, where stones, edges, and hardy plants create a different texture from the lawns.",
    zhHighlight: "岩石边界适合观察种植设计，石块、边界和耐性植物形成了不同于草坪区的景观质感。"
  },
  19: {
    enStay: "3-5 min",
    zhStay: "3-5 分钟",
    enHighlight: "A small heritage pause: the monument marks the human care behind the garden and the long tradition of horticultural work at Peradeniya.",
    zhHighlight: "这是一个小型历史停靠点，提醒游客植物园背后长期的园艺劳动和维护传统。"
  },
  20: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Part of Peradeniya's avenue landscape, this quieter path is a good place to notice how the garden uses tree-lined walks to shape the visitor route.",
    zhHighlight: "这是佩拉德尼亚植物园林荫大道景观的一部分，适合观察植物园如何用成排树木组织游览动线。"
  },
  21: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Java fig is one of the garden's classic large-tree moments, valued for its broad canopy, spreading roots, and impressive shade.",
    zhHighlight: "爪哇榕树是园内经典的大树景观之一，以宽阔树冠、延展根系和浓密树荫形成强烈印象。"
  },
  22: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The National Herbarium connects the living garden with scientific records, preserving plant specimens used for identification, research, and conservation.",
    zhHighlight: "国家植物标本馆把活体植物园与科学记录连接起来，保存用于鉴定、研究和保护的植物标本。"
  },
  23: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The Rose Garden adds a familiar ornamental stop, useful for comparing flower form, fragrance, color, and formal garden layout.",
    zhHighlight: "玫瑰园是较熟悉的观赏花卉点位，适合比较花形、香气、色彩和规则式花园布局。"
  },
  24: {
    enStay: "8-10 min",
    zhStay: "8-10 分钟",
    enHighlight: "Use this stop as a learning point: Sri Lanka's botanic gardens support plant education, conservation awareness, and public appreciation of plant resources.",
    zhHighlight: "这里适合作为学习型停靠点：斯里兰卡植物园承担植物教育、保护意识推广和公众植物资源欣赏的功能。"
  },
  25: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Arboretum is a tree-focused stop, ideal for comparing bark, canopy shape, leaf texture, and the long-term structure of the garden.",
    zhHighlight: "树木园是以乔木为主的点位，适合比较树皮、树冠形态、叶片质感和植物园的长期空间结构。"
  },
  26: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Ficus species are important tropical trees; this collection is useful for spotting aerial roots, figs, dense shade, and wildlife value.",
    zhHighlight: "榕属植物是重要的热带树木，这里适合观察气生根、榕果、浓荫以及它们对动物的生态价值。"
  },
  27: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The Suspension Bridge adds a change of pace, giving visitors a sense of the Mahaweli River setting around the garden.",
    zhHighlight: "吊桥让游览节奏有所变化，也能帮助游客感受植物园与马哈威利河之间的空间关系。"
  },
  28: {
    enStay: "2-4 min",
    zhStay: "2-4 分钟",
    enHighlight: "Use this entrance as a western orientation point, especially when planning a route from the Gannoruwa side of the garden.",
    zhHighlight: "甘诺鲁瓦入口适合作为西侧方向的定位点，尤其方便从这一侧进入或规划路线。"
  },
  29: {
    enStay: "8-12 min",
    zhStay: "8-12 分钟",
    enHighlight: "The official garden description identifies Royal Palm Avenue as one of Peradeniya's magnificent palm avenues, planted along the main central drive.",
    zhHighlight: "官方介绍将皇家棕榈大道列为植物园壮观的棕榈大道之一，它位于主中央道路，是非常有代表性的景观点。"
  },
  30: {
    enStay: "3-5 min",
    zhStay: "3-5 分钟",
    enHighlight: "This monument recalls G. H. K. Thwaites, an important nineteenth-century superintendent whose work helped build Peradeniya's botanical reputation.",
    zhHighlight: "斯韦茨纪念碑纪念十九世纪重要的植物园负责人 G. H. K. Thwaites，他的工作推动了佩拉德尼亚的植物学声誉。"
  },
  31: {
    enStay: "8-10 min",
    zhStay: "8-10 分钟",
    enHighlight: "This area connects botany with diplomacy: trees in Peradeniya commemorate visits by Chinese leaders, including Premier Zhou Enlai.",
    zhHighlight: "这里把植物与外交记忆联系起来：佩拉德尼亚园内有中国领导人访问时种下的友谊纪念树，其中包括周恩来总理。"
  },
  32: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Cabbage Palm Avenue is part of Peradeniya's palm avenue network, a good stop for reading the garden through rhythm, height, and repetition.",
    zhHighlight: "菜棕大道属于佩拉德尼亚的棕榈大道景观，适合通过节奏、高度和重复种植来阅读园林空间。"
  },
  33: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "Palmyra palms have strong cultural and landscape presence in South Asia; this avenue gives them a clear, processional setting.",
    zhHighlight: "扇叶棕在南亚具有鲜明的文化和景观存在感，这条大道以整齐排列突出其形态。"
  },
  34: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Conservatory protects plants that need controlled growing conditions, making it a useful contrast to the open-air collections.",
    zhHighlight: "温室用于保护需要受控环境的植物，与室外露地植物区形成很好的对比。"
  },
  35: {
    enStay: "8-12 min",
    zhStay: "8-12 分钟",
    enHighlight: "The Fernery sits beside the Flower Garden; official descriptions emphasize its shaded, landscaped walks and collection of about 100 native and exotic fern species.",
    zhHighlight: "蕨类植物区位于花园旁，官方介绍强调这里有阴凉的景观步道，并收集了约100种本地与外来蕨类。"
  },
  36: {
    enStay: "12-15 min",
    zhStay: "12-15 分钟",
    enHighlight: "Near the Orchid House, the Flower Garden is known for annual and perennial beds and a striking ribbon border of coleus leading toward the conservatory.",
    zhHighlight: "花园靠近兰花馆，以一年生和多年生花坛，以及通向温室方向的彩叶草带状花境而闻名。"
  },
  37: {
    enStay: "10-15 min",
    zhStay: "10-15 分钟",
    enHighlight: "The Orchid House highlights one of Peradeniya's best-known collections, with orchids valued for their diversity, forms, and display quality.",
    zhHighlight: "兰花温室展示了佩拉德尼亚最知名的植物类群之一，兰花因多样性、花形和展示效果而备受关注。"
  },
  38: {
    enStay: "4-6 min",
    zhStay: "4-6 分钟",
    enHighlight: "Canarium Row is a tree-comparison stop: use it to observe trunk form, canopy structure, and the way repeated trees define a path.",
    zhHighlight: "橄榄属树列适合做树木比较，观察树干形态、树冠结构，以及重复种植如何限定路径。"
  },
  39: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Cactus House focuses on water-saving plant forms, from spines and fleshy stems to compact shapes adapted to dry conditions.",
    zhHighlight: "仙人掌温室集中展示节水型植物形态，如刺、肉质茎和适应干旱环境的紧凑外形。"
  },
  40: {
    enStay: "6-10 min",
    zhStay: "6-10 分钟",
    enHighlight: "The Plant House is a compact indoor stop for close observation, useful when comparing foliage, textures, and protected display plants.",
    zhHighlight: "植物温室是适合近距离观察的室内点位，可比较叶片、质感和受保护展示植物。"
  },
  41: {
    enStay: "2-4 min",
    zhStay: "2-4 分钟",
    enHighlight: "The Administration Building is mainly a wayfinding landmark, useful for understanding the working side of a managed botanic garden.",
    zhHighlight: "行政楼主要作为定位地标，也能让游客意识到植物园背后的管理与运营工作。"
  },
  42: {
    enStay: "8-12 min",
    zhStay: "8-12 分钟",
    enHighlight: "The Spice Garden connects Peradeniya with Sri Lanka's plant heritage, introducing aromatic and economically important species such as cinnamon and cardamom.",
    zhHighlight: "香料园把佩拉德尼亚与斯里兰卡植物传统联系起来，介绍肉桂、豆蔻等芳香和经济价值较高的植物。"
  },
  43: {
    enStay: "1-2 min",
    zhStay: "1-2 分钟",
    enHighlight: "Use this point as the route endpoint, especially after visiting the central garden, palm avenues, and plant houses.",
    zhHighlight: "这里适合作为游览终点，尤其是在参观中央区域、棕榈大道和温室区之后。"
  },
  44: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "The Plant Sales Centre turns the visit into a practical plant stop, where garden interest can connect with home growing and souvenirs.",
    zhHighlight: "植物销售中心把游览延伸到实际种植兴趣，可与家庭园艺和纪念购买联系起来。"
  },
  45: {
    enStay: "6-8 min",
    zhStay: "6-8 分钟",
    enHighlight: "A compact ecology stop: use it to connect flowering plants with pollination, biodiversity, and the garden's wider conservation message.",
    zhHighlight: "这是一个小型生态停靠点，适合把开花植物、传粉、生物多样性和植物园的保护主题联系起来。"
  },
  46: {
    enStay: "8-12 min",
    zhStay: "8-12 分钟",
    enHighlight: "The Museum works as a context stop, helping visitors connect the living collections with botany, garden history, and plant uses.",
    zhHighlight: "博物馆是补充背景的点位，帮助游客把活体植物收藏与植物学、园史和植物利用联系起来。"
  },
  47: {
    enStay: "5-8 min",
    zhStay: "5-8 分钟",
    enHighlight: "A family-friendly learning stop, designed to make plant observation easier for children through shorter, more approachable interpretation.",
    zhHighlight: "这是面向儿童和家庭的学习点位，通过更短、更易理解的方式帮助孩子观察植物。"
  }
};

const numberedPlaces = numberedPointCoordinates.map((point) => ({
  ...point,
  id: `number-${point.number}`,
  enTitle: `${point.number} · ${numberedLegend[point.number].en}`,
  zhTitle: `${point.number} · ${numberedLegend[point.number].zh}`,
  photos: numberedPhotoMap[point.number] || [],
  detail: numberedDetailMap[point.number] || null,
  enBody: "",
  zhBody: ""
}));

const markerTypes = {
  summerhouse: {
    label: "Summer House",
    shortLabel: "S",
    icon: "house"
  },
  restaurant: {
    label: "Restaurant",
    shortLabel: "R",
    icon: "dining"
  },
  toilet: {
    label: "Toilet",
    shortLabel: "T",
    icon: "toilet"
  },
  vehiclepark: {
    label: "Vehicle Park",
    shortLabel: "V",
    icon: "car"
  }
};

const route = {
  ids: []
};

const tourRoutePoints = [
  { x: 51.62, y: 68.93 },
  { x: 51.32, y: 68.03 },
  { x: 50.74, y: 67.28 },
  { x: 50.2, y: 66.4 },
  { x: 50.09, y: 65.31 },
  { x: 50.44, y: 64.39 },
  { x: 50.11, y: 63.48 },
  { x: 49.92, y: 62.58 },
  { x: 49.67, y: 61.75 },
  { x: 49.03, y: 62.04 },
  { x: 48.2, y: 62.17 },
  { x: 47.28, y: 62.56 },
  { x: 46.35, y: 62.73 },
  { x: 45.24, y: 63.12 },
  { x: 44.09, y: 63.46 },
  { x: 43.06, y: 63.68 },
  { x: 42.05, y: 64.12 },
  { x: 41.12, y: 64.42 },
  { x: 40.35, y: 63.84 },
  { x: 39.6, y: 63.28 },
  { x: 38.79, y: 62.61 },
  { x: 38.07, y: 62.06 },
  { x: 37.69, y: 61.38 },
  { x: 37.87, y: 60.27 },
  { x: 38.11, y: 59 },
  { x: 38.05, y: 57.65 },
  { x: 37.87, y: 56.17 },
  { x: 37.85, y: 54.69 },
  { x: 37.79, y: 53.24 },
  { x: 37.7, y: 51.66 },
  { x: 37.61, y: 50.01 },
  { x: 37.46, y: 48.57 },
  { x: 37.4, y: 47.1 },
  { x: 37.37, y: 45.77 },
  { x: 37.31, y: 44.49 },
  { x: 37.12, y: 43.21 },
  { x: 36.93, y: 41.87 },
  { x: 36.69, y: 40.4 },
  { x: 36.45, y: 38.8 },
  { x: 36.27, y: 37.31 },
  { x: 35.96, y: 35.74 },
  { x: 35.71, y: 34.11 },
  { x: 35.31, y: 32.49 },
  { x: 34.95, y: 30.68 },
  { x: 34.61, y: 29.22 },
  { x: 34.3, y: 27.77 },
  { x: 33.9, y: 26.53 },
  { x: 33.61, y: 25.2 },
  { x: 33.29, y: 23.96 },
  { x: 32.9, y: 22.57 },
  { x: 32.63, y: 21.25 },
  { x: 32.42, y: 19.85 },
  { x: 32.21, y: 18.43 },
  { x: 32.32, y: 17.14 },
  { x: 32.57, y: 15.8 },
  { x: 33.3, y: 14.63 },
  { x: 34.29, y: 14.37 },
  { x: 35.42, y: 14.68 },
  { x: 36.63, y: 15.36 },
  { x: 37.72, y: 16.3 },
  { x: 38.47, y: 17.69 },
  { x: 38.91, y: 19.32 },
  { x: 39.31, y: 21.11 },
  { x: 39.78, y: 22.89 },
  { x: 40.19, y: 24.38 },
  { x: 40.62, y: 26.12 },
  { x: 41.02, y: 27.66 },
  { x: 41.36, y: 29.29 },
  { x: 41.81, y: 30.93 },
  { x: 42.21, y: 32.65 },
  { x: 42.59, y: 34.39 },
  { x: 43.02, y: 36.01 },
  { x: 43.45, y: 37.54 },
  { x: 44.48, y: 37.22 },
  { x: 45.5, y: 37.52 },
  { x: 46.62, y: 38.18 },
  { x: 47.42, y: 39.43 },
  { x: 47.84, y: 40.8 },
  { x: 47.99, y: 42.35 },
  { x: 47.8, y: 43.9 },
  { x: 47.28, y: 45.28 },
  { x: 46.48, y: 46.37 },
  { x: 45.85, y: 46.97 },
  { x: 46.14, y: 48.36 },
  { x: 46.55, y: 49.76 },
  { x: 46.94, y: 51.05 },
  { x: 47.32, y: 52.64 },
  { x: 47.63, y: 54.01 },
  { x: 47.93, y: 55.55 },
  { x: 48.48, y: 54.46 },
  { x: 49.31, y: 53.73 },
  { x: 50.06, y: 53.62 },
  { x: 50.27, y: 55.14 },
  { x: 50.91, y: 56.13 },
  { x: 51.29, y: 57.42 },
  { x: 52.27, y: 57.3 },
  { x: 53.16, y: 57.27 },
  { x: 53.46, y: 56.66 },
  { x: 54.12, y: 55.98 },
  { x: 54.66, y: 55.68 },
  { x: 54.8, y: 56.86 },
  { x: 55.03, y: 58.12 },
  { x: 55.16, y: 59.41 },
  { x: 54.5, y: 59.28 },
  { x: 53.86, y: 59.55 },
  { x: 54.09, y: 60.59 },
  { x: 53.5, y: 61.63 },
  { x: 52.67, y: 62.16 },
  { x: 51.93, y: 62.64 },
  { x: 52.1, y: 63.61 },
  { x: 51.55, y: 64.33 },
  { x: 50.96, y: 64.65 },
  { x: 51.22, y: 65.82 },
  { x: 51.33, y: 66.92 }
];

const i18n = {
  en: {
    route: "Route",
    routeOn: "Route On",
    reset: "Reset",
    routeStep: "Route stop",
    placeholder: "Photo placeholder",
    markingOn: "Marking Mode ON",
    markingOff: "Marking Mode OFF",
    markHintOn: "Click the map to mark Vehicle Park points. Press M again to exit.",
    markHintOff: "Press M to mark Vehicle Park locations.",
    routeMarkingOn: "Route Marking Mode ON",
    routeMarkingOff: "Route Marking Mode OFF",
    routeHintOn: "Click along the path to record route coordinates. Press R again to exit.",
    routeHintOff: "Press R to mark route points.",
    routePointCount: "Route points",
    copyRoute: "Copy Route",
    copyPoints: "Copy Points",
    noPoint: "No point yet",
    copied: "Copied",
    legendTitle: "Map Index",
    facilities: "Show facilities",
    facilitiesOn: "Hide facilities",
    start: "Start",
    end: "End",
    stayLabel: "Recommended stay",
    highlightLabel: "Highlight",
    showList: "Show map index",
    hideList: "Hide map index"
  },
  zh: {
    route: "路线",
    routeOn: "路线开启",
    reset: "重置",
    routeStep: "路线第",
    placeholder: "照片占位",
    markingOn: "标点模式开启",
    markingOff: "标点模式关闭",
    markHintOn: "点击地图标注 Vehicle Park。再次按 M 退出。",
    markHintOff: "按 M 开始标注 Vehicle Park 位置。",
    routeMarkingOn: "路线采点模式开启",
    routeMarkingOff: "路线采点模式关闭",
    routeHintOn: "沿路线点击来记录坐标。再次按 R 退出。",
    routeHintOff: "按 R 开始标注路线点。",
    routePointCount: "路线点数量",
    copyRoute: "复制路线",
    copyPoints: "复制点位",
    noPoint: "还没有点位",
    copied: "已复制",
    legendTitle: "地图索引",
    facilities: "显示设施",
    facilitiesOn: "隐藏设施",
    start: "起点",
    end: "终点",
    stayLabel: "建议停留",
    highlightLabel: "亮点",
    showList: "打开地图索引",
    hideList: "关闭地图索引"
  }
};

const state = {
  lang: "en",
  activeCategory: "all",
  routeOn: false,
  facilitiesOn: true,
  activePlaceId: null,
  legendOpen: false,
  marking: false,
  routeMarking: false,
  markerType: "vehiclepark",
  markedPoints: loadMarkedPoints(),
  routePoints: loadRoutePoints(),
  scale: 1,
  x: 0,
  y: 0,
  dragging: false,
  pendingPoint: false,
  pointerMoved: false,
  dragStartX: 0,
  dragStartY: 0,
  startX: 0,
  startY: 0
};

const els = {
  viewport: document.getElementById("mapViewport"),
  canvas: document.getElementById("mapCanvas"),
  image: document.getElementById("mapImage"),
  hotspots: document.getElementById("hotspotLayer"),
  markers: document.getElementById("markerLayer"),
  routeEndpoints: document.getElementById("routeEndpointLayer"),
  routeLayer: document.getElementById("routeLayer"),
  routeShadowLine: document.getElementById("routeShadowLine"),
  routeLine: document.getElementById("routeLine"),
  routeFlowLine: document.getElementById("routeFlowLine"),
  routeDots: document.getElementById("routeDots"),
  categoryBar: document.getElementById("categoryBar"),
  routeToggle: document.getElementById("routeToggle"),
  facilitiesToggle: document.getElementById("facilitiesToggle"),
  zoomIn: document.getElementById("zoomIn"),
  zoomOut: document.getElementById("zoomOut"),
  resetView: document.getElementById("resetView"),
  langToggle: document.getElementById("langToggle"),
  title: document.getElementById("pageTitle"),
  subtitle: document.getElementById("pageSubtitle"),
  drawer: document.getElementById("placeDrawer"),
  closeDrawer: document.getElementById("closeDrawer"),
  drawerPhoto: document.getElementById("drawerPhoto"),
  drawerKicker: document.getElementById("drawerKicker"),
  drawerTitle: document.getElementById("drawerTitle"),
  drawerBody: document.getElementById("drawerBody"),
  drawerRoute: document.getElementById("drawerRoute"),
  app: document.getElementById("mapApp"),
  markPanel: document.getElementById("markPanel"),
  markStatus: document.getElementById("markStatus"),
  markHint: document.getElementById("markHint"),
  markLatest: document.getElementById("markLatest"),
  copyMarkedPoints: document.getElementById("copyMarkedPoints"),
  undoRoutePoint: document.getElementById("undoRoutePoint"),
  clearRoutePoints: document.getElementById("clearRoutePoints"),
  legendPanel: document.getElementById("legendPanel"),
  legendToggle: document.getElementById("legendToggle"),
  legendTitle: document.getElementById("legendTitle"),
  legendList: document.getElementById("legendList")
};

function localized(item, key) {
  return item[`${state.lang}${key}`];
}

function routePlaces() {
  return route.ids.map((id) => places.find((place) => place.id === id)).filter(Boolean);
}

function routeStep(place) {
  return route.ids.indexOf(place.id) + 1;
}

function visiblePlaces() {
  if (!state.facilitiesOn) return [];
  if (state.activeCategory === "all") return places;
  return places.filter((place) => place.category === state.activeCategory);
}

function loadMarkedPoints() {
  try {
    const storedPoints = JSON.parse(localStorage.getItem("htmlmapMarkedPoints")) || {};
    return {
      summerhouse: storedPoints.summerhouse || [],
      restaurant: storedPoints.restaurant || [],
      toilet: storedPoints.toilet || [],
      vehiclepark: []
    };
  } catch {
    return {
      summerhouse: [],
      restaurant: [],
      toilet: [],
      vehiclepark: []
    };
  }
}

function loadRoutePoints() {
  try {
    return JSON.parse(localStorage.getItem("htmlmapRoutePoints")) || [];
  } catch {
    return [];
  }
}

function saveMarkedPoints() {
  localStorage.setItem("htmlmapMarkedPoints", JSON.stringify(state.markedPoints));
}

function saveRoutePoints() {
  localStorage.setItem("htmlmapRoutePoints", JSON.stringify(state.routePoints));
}

function activeMarkedPoints() {
  if (!state.markedPoints[state.markerType]) {
    state.markedPoints[state.markerType] = [];
  }

  return state.markedPoints[state.markerType];
}

function applyTransform() {
  clampScale();
  clampPan();
  els.canvas.style.setProperty("--marker-scale", String(1 / state.scale));
  els.canvas.style.setProperty("--x", `${state.x}px`);
  els.canvas.style.setProperty("--y", `${state.y}px`);
  els.canvas.style.setProperty("--scale", String(state.scale));
  renderRoute();
}

function viewportScale() {
  const viewport = els.viewport.getBoundingClientRect();
  const widthScale = viewport.width / els.canvas.offsetWidth;
  const heightScale = viewport.height / els.canvas.offsetHeight;

  return {
    contain: Math.min(widthScale, heightScale),
    cover: Math.max(widthScale, heightScale)
  };
}

function minimumCoverScale() {
  return viewportScale().cover;
}

function fitMapScale() {
  return viewportScale().contain;
}

function clampScale() {
  const minScale = state.marking || state.routeMarking ? fitMapScale() : minimumCoverScale();
  state.scale = Math.max(minScale, state.scale);
}

function clampPan() {
  const viewport = els.viewport.getBoundingClientRect();
  const scaledWidth = els.canvas.offsetWidth * state.scale;
  const scaledHeight = els.canvas.offsetHeight * state.scale;
  const maxX = Math.max(0, (scaledWidth - viewport.width) / 2);
  const maxY = Math.max(0, (scaledHeight - viewport.height) / 2);

  state.x = Math.min(maxX, Math.max(-maxX, state.x));
  state.y = Math.min(maxY, Math.max(-maxY, state.y));
}

function setScale(nextScale) {
  const minScale = state.marking || state.routeMarking ? fitMapScale() : minimumCoverScale();
  state.scale = Math.min(Math.max(2.8, minScale), Math.max(minScale, nextScale));
  applyTransform();
}

function resetView() {
  state.scale = state.marking || state.routeMarking ? fitMapScale() : minimumCoverScale();
  state.x = 0;
  state.y = 0;
  applyTransform();
}

function renderCategories() {
  els.categoryBar.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `category-chip${state.activeCategory === category.id ? " active" : ""}`;
    button.dataset.category = category.id;
    button.type = "button";
    button.innerHTML = `<span class="chip-dot">${category.icon}</span><span>${localized(category, "Label")}</span>`;
    button.addEventListener("click", () => {
      state.activeCategory = category.id;
      state.activePlaceId = null;
      closeDrawer();
      render();
    });
    els.categoryBar.appendChild(button);
  });
}

function renderRoute() {
  const routePoints = state.routeMarking ? state.routePoints : state.routeOn ? tourRoutePoints : [];
  const points = routePoints.map((place) => `${place.x},${place.y}`).join(" ");
  els.routeShadowLine.setAttribute("points", state.routeOn && !state.routeMarking ? points : "");
  els.routeLine.setAttribute("points", points);
  els.routeFlowLine.setAttribute("points", state.routeOn && !state.routeMarking ? points : "");
  els.routeLayer.classList.toggle("visible", state.routeOn || state.routeMarking);
  els.routeLayer.classList.toggle("draft", state.routeMarking);
  els.routeDots.innerHTML = "";
  els.routeEndpoints.innerHTML = "";

  if (state.routeOn && !state.routeMarking) {
    const routeDotRadius = 0.3 / state.scale;
    const arrowSize = 1.45 / state.scale;

    tourRoutePoints.forEach((point, index) => {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);
      dot.setAttribute("r", routeDotRadius);
      els.routeDots.appendChild(dot);

      if (index > 0 && index % 12 === 0 && index < tourRoutePoints.length - 1) {
        const nextPoint = tourRoutePoints[index + 1];
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        const arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
        arrow.classList.add("route-arrow");
        arrow.setAttribute("d", `M ${-arrowSize} ${-arrowSize * 0.78} L 0 0 L ${-arrowSize} ${arrowSize * 0.78}`);
        arrow.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);
        els.routeDots.appendChild(arrow);
      }
    });

    renderRouteEndpoint(tourRoutePoints[0], i18n[state.lang].start, "start", {
      labelPoint: { x: 54.05, y: 76.2 }
    });
    renderRouteEndpoint(tourRoutePoints[tourRoutePoints.length - 1], i18n[state.lang].end, "end", {
      labelPoint: { x: 56.1, y: 68.65 }
    });
  }
}

function renderRouteEndpoint(point, label, type, config) {
  const tail = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  const anchor = document.createElement("span");
  const labelEl = document.createElement("span");

  tail.classList.add("route-callout-tail");
  tail.setAttribute("viewBox", "0 0 100 100");
  tail.setAttribute("preserveAspectRatio", "none");
  line.setAttribute("x1", point.x);
  line.setAttribute("y1", point.y);
  line.setAttribute("x2", config.labelPoint.x);
  line.setAttribute("y2", config.labelPoint.y);
  tail.appendChild(line);

  anchor.className = `route-callout-anchor ${type}`;
  anchor.style.left = `${point.x}%`;
  anchor.style.top = `${point.y}%`;

  labelEl.className = `route-callout-label ${type}`;
  labelEl.style.left = `${config.labelPoint.x}%`;
  labelEl.style.top = `${config.labelPoint.y}%`;
  labelEl.textContent = label;

  els.routeEndpoints.append(tail, anchor, labelEl);
}

function renderHotspots() {
  els.hotspots.innerHTML = "";
  const routeIds = new Set(route.ids);

  visiblePlaces().forEach((place) => {
    const button = document.createElement("button");
    const step = routeStep(place);
    button.type = "button";
    button.className = [
      "hotspot",
      state.routeOn && routeIds.has(place.id) ? "route-stop" : ""
    ].filter(Boolean).join(" ");
    button.dataset.category = place.category;
    button.dataset.step = step > 0 ? step : "";
    button.style.left = `${place.x}%`;
    button.style.top = `${place.y}%`;
    button.innerHTML = categoryIcon(place.category);
    button.title = localized(place, "Title");
    button.setAttribute("aria-label", localized(place, "Title"));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openPlace(place.id);
    });
    els.hotspots.appendChild(button);
  });

  numberedPlaces.forEach((place) => {
    const button = document.createElement("button");
    const gateClass = place.number === 1 || place.number === 43 ? " gate-marker" : "";
    button.type = "button";
    button.className = `numbered-marker${gateClass}${state.activePlaceId === place.id ? " active" : ""}`;
    button.style.left = `${place.x}%`;
    button.style.top = `${place.y}%`;
    button.textContent = place.number;
    button.title = localized(place, "Title");
    button.setAttribute("aria-label", localized(place, "Title"));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openNumberedPlace(place.id);
    });
    els.hotspots.appendChild(button);
  });
}

function renderLegendList() {
  els.legendPanel.classList.toggle("open", state.legendOpen);
  els.legendToggle.setAttribute("aria-expanded", String(state.legendOpen));
  els.legendToggle.setAttribute("aria-label", state.legendOpen ? i18n[state.lang].hideList : i18n[state.lang].showList);
  els.legendTitle.textContent = i18n[state.lang].legendTitle;
  els.legendList.innerHTML = "";

  numberedPlaces.forEach((place) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `legend-list-item${state.activePlaceId === place.id ? " active" : ""}`;
    button.innerHTML = `
      <span class="legend-list-number">${place.number}</span>
      <span class="legend-list-name">${numberedLegend[place.number][state.lang]}</span>
    `;
    button.title = localized(place, "Title");
    button.setAttribute("aria-label", localized(place, "Title"));
    button.addEventListener("click", () => openNumberedPlace(place.id));
    els.legendList.appendChild(button);
  });
}

function categoryIcon(categoryId) {
  const markerTypeByCategory = {
    food: "restaurant",
    summerhouse: "summerhouse",
    toilet: "toilet",
    vehiclepark: "vehiclepark"
  };

  return iconForType(markerTypeByCategory[categoryId]) || categories.find((category) => category.id === categoryId)?.icon || "P";
}

function iconForType(type) {
  const icon = markerTypes[type]?.icon;
  const icons = {
    dining: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3v7" />
        <path d="M4.8 3v6.2C4.8 10.8 5.8 12 7 12s2.2-1.2 2.2-2.8V3" />
        <path d="M7 12v9" />
        <path d="M16.5 3v18" />
        <path d="M16.5 3c2.2 1.7 3.1 4.3 2.2 7.8h-2.2" />
      </svg>
    `,
    house: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 11.4 12 5l8 6.4" />
        <path d="M6.2 10.4V20h11.6v-9.6" />
        <path d="M10 20v-5h4v5" />
      </svg>
    `,
    toilet: `
      <svg class="toilet-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7.3" cy="4.4" r="2" />
        <path d="M5.3 7.5h4l1.3 6H8.9V21H5.7v-7.5H4l1.3-6Z" />
        <circle cx="16.7" cy="4.4" r="2" />
        <path d="M14.7 7.5h4l1.9 7.2h-2.2V21h-3.4v-6.3h-2.2l1.9-7.2Z" />
      </svg>
    `,
    car: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 12 6.4 7.8A2 2 0 0 1 8.2 6.6h7.6a2 2 0 0 1 1.8 1.2L19.5 12" />
        <path d="M4 12h16v5.2H4z" />
        <path d="M6.2 17.2v1.6" />
        <path d="M17.8 17.2v1.6" />
        <circle cx="7.5" cy="14.8" r="1" />
        <circle cx="16.5" cy="14.8" r="1" />
      </svg>
    `
  };

  return icons[icon] || "";
}

function safeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setDrawerPhotos(photos, title) {
  const photoList = (Array.isArray(photos) ? photos : photos ? [photos] : []).filter(Boolean);
  els.drawer.classList.toggle("no-photo", !photoList.length);
  els.drawerPhoto.classList.toggle("multi-photo", photoList.length > 1);

  if (!photoList.length) {
    els.drawerPhoto.innerHTML = "";
    return;
  }

  const safeTitle = safeAttr(title);
  els.drawerPhoto.innerHTML = photoList
    .map((src, index) => {
      const suffix = photoList.length > 1 ? ` ${index + 1}` : "";
      return `<img src="${safeAttr(src)}" alt="${safeTitle}${suffix}" />`;
    })
    .join("");
}

function setDrawerDetail(detail) {
  if (!detail) {
    els.drawerBody.textContent = "";
    els.drawerBody.hidden = true;
    return;
  }

  const stay = safeAttr(localized(detail, "Stay"));
  const highlight = safeAttr(localized(detail, "Highlight"));
  els.drawerBody.hidden = false;
  els.drawerBody.innerHTML = `
    <span class="drawer-meta">
      <span>${i18n[state.lang].stayLabel}</span>
      <strong>${stay}</strong>
    </span>
    <span class="drawer-meta">
      <span>${i18n[state.lang].highlightLabel}</span>
      <strong>${highlight}</strong>
    </span>
  `;
}

function openPlace(id) {
  const place = places.find((item) => item.id === id);
  if (!place) return;

  state.activePlaceId = id;
  els.drawerKicker.textContent = localized(categories.find((category) => category.id === place.category), "Label");
  els.drawerTitle.textContent = localized(place, "Title");
  els.drawerBody.textContent = "";
  els.drawerBody.hidden = true;
  setDrawerPhotos(place.photo, localized(place, "Title"));

  const step = routeStep(place);
  els.drawerRoute.textContent = step > 0
    ? `${i18n[state.lang].routeStep} ${step}`
    : "";
  els.drawerRoute.classList.toggle("visible", step > 0 && state.routeOn);
  els.drawer.classList.add("open");
  renderHotspots();
  renderLegendList();
}

function openNumberedPlace(id) {
  const place = numberedPlaces.find((item) => item.id === id);
  if (!place) return;

  state.activePlaceId = id;
  els.drawerKicker.textContent = state.lang === "en" ? "Map Annotation" : "地图编号";
  els.drawerTitle.textContent = localized(place, "Title");
  setDrawerDetail(place.detail);
  setDrawerPhotos(place.photos, localized(place, "Title"));
  els.drawerRoute.textContent = "";
  els.drawerRoute.classList.remove("visible");
  els.drawer.classList.add("open");
  renderHotspots();
  renderLegendList();
}

function openActivePlace() {
  if (!state.activePlaceId) return;
  if (state.activePlaceId.startsWith("number-")) {
    openNumberedPlace(state.activePlaceId);
    return;
  }

  openPlace(state.activePlaceId);
}

function closeDrawer() {
  state.activePlaceId = null;
  els.drawer.classList.remove("open");
  renderLegendList();
}

function applyText() {
  els.title.textContent = localized(mapConfig, "Title");
  els.subtitle.textContent = localized(mapConfig, "Subtitle");
  els.image.alt = localized(mapConfig, "Alt");
  els.langToggle.textContent = state.lang === "en" ? "中" : "EN";
  els.routeToggle.setAttribute("aria-label", state.routeOn ? i18n[state.lang].routeOn : i18n[state.lang].route);
  els.routeToggle.title = state.routeOn ? i18n[state.lang].routeOn : i18n[state.lang].route;
  els.facilitiesToggle.setAttribute("aria-label", state.facilitiesOn ? i18n[state.lang].facilitiesOn : i18n[state.lang].facilities);
  els.facilitiesToggle.title = state.facilitiesOn ? i18n[state.lang].facilitiesOn : i18n[state.lang].facilities;
  els.resetView.setAttribute("aria-label", i18n[state.lang].reset);
  els.resetView.title = i18n[state.lang].reset;
  document.documentElement.lang = state.lang;
  document.documentElement.dataset.lang = state.lang;
}

function render() {
  applyText();
  renderCategories();
  renderRoute();
  renderHotspots();
  renderLegendList();
  renderMarkers();
  updateMarkPanel();
  els.routeToggle.classList.toggle("active", state.routeOn);
  els.routeToggle.setAttribute("aria-pressed", String(state.routeOn));
  els.facilitiesToggle.setAttribute("aria-pressed", String(state.facilitiesOn));
}

function beginDrag(event) {
  if (event.target.closest("button") || event.target.closest(".place-drawer") || event.target.closest(".legend-panel")) return;
  state.pendingPoint = state.marking || state.routeMarking;
  state.pointerMoved = false;
  state.dragging = true;
  state.dragStartX = event.clientX;
  state.dragStartY = event.clientY;
  state.startX = state.x;
  state.startY = state.y;
  els.viewport.classList.add("dragging");
  els.viewport.setPointerCapture(event.pointerId);
}

function moveDrag(event) {
  if (!state.dragging) return;

  const dx = event.clientX - state.dragStartX;
  const dy = event.clientY - state.dragStartY;
  state.pointerMoved = state.pointerMoved || Math.hypot(dx, dy) > 4;
  state.x = state.startX + dx;
  state.y = state.startY + dy;
  applyTransform();
}

function renderMarkers() {
  els.markers.innerHTML = "";

  if (state.facilitiesOn || state.marking) {
    Object.entries(state.markedPoints).forEach(([type, points]) => {
      points.forEach((point) => {
        const marker = document.createElement("div");
        marker.className = `temp-marker ${type}`;
        marker.style.left = `${point.x}%`;
        marker.style.top = `${point.y}%`;
        marker.innerHTML = iconForType(type);
        marker.title = `${markerTypes[type]?.label || type} ${point.number}`;
        els.markers.appendChild(marker);
      });
    });
  }

  if (state.routeMarking) {
    state.routePoints.forEach((point, index) => {
      const marker = document.createElement("div");
      marker.className = "route-point-marker";
      marker.style.left = `${point.x}%`;
      marker.style.top = `${point.y}%`;
      marker.title = `Route point ${index + 1}`;
      els.markers.appendChild(marker);
    });
  }
}

function pointFromPointer(event) {
  const rect = els.canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  return {
    x: Number(Math.min(100, Math.max(0, x)).toFixed(2)),
    y: Number(Math.min(100, Math.max(0, y)).toFixed(2))
  };
}

function addMarkedPoint(event) {
  const point = pointFromPointer(event);
  const points = activeMarkedPoints();
  const markedPoint = {
    number: points.length + 1,
    type: state.markerType,
    x: point.x,
    y: point.y
  };

  points.push(markedPoint);
  saveMarkedPoints();
  renderMarkers();
  updateMarkPanel(markedPoint);
  copyText(formatPoint(markedPoint));
}

function addRoutePoint(event) {
  const point = pointFromPointer(event);

  state.routePoints.push(point);
  saveRoutePoints();
  renderRoute();
  renderMarkers();
  updateMarkPanel(point);
}

function formatPoint(point) {
  return `{ number: ${point.number}, type: "${point.type}", x: ${point.x}, y: ${point.y} }`;
}

function formatRoutePoint(point) {
  return `{ x: ${point.x}, y: ${point.y} }`;
}

function formatPointArray() {
  const points = activeMarkedPoints();
  return `[\n${points.map((point) => `  ${formatPoint(point)}`).join(",\n")}\n]`;
}

function formatRoutePointArray() {
  return `[\n${state.routePoints.map((point) => `  ${formatRoutePoint(point)}`).join(",\n")}\n]`;
}

function toggleMarking() {
  state.marking = !state.marking;
  if (state.marking) state.routeMarking = false;
  if (state.marking) closeDrawer();
  resetView();
  renderRoute();
  renderMarkers();
  updateMarkPanel();
}

function toggleRouteMarking() {
  state.routeMarking = !state.routeMarking;
  if (state.routeMarking) {
    state.marking = false;
    closeDrawer();
  }
  resetView();
  renderRoute();
  renderMarkers();
  updateMarkPanel();
}

function undoRoutePoint() {
  state.routePoints.pop();
  saveRoutePoints();
  renderRoute();
  renderMarkers();
  updateMarkPanel();
}

function clearRoutePoints() {
  state.routePoints = [];
  saveRoutePoints();
  renderRoute();
  renderMarkers();
  updateMarkPanel();
}

function updateMarkPanel(latestPoint = state.routeMarking ? state.routePoints[state.routePoints.length - 1] : activeMarkedPoints()[activeMarkedPoints().length - 1]) {
  els.app.classList.toggle("marking", state.marking);
  els.app.classList.toggle("route-marking", state.routeMarking);

  if (state.routeMarking) {
    els.markStatus.textContent = i18n[state.lang].routeMarkingOn;
    els.markHint.textContent = i18n[state.lang].routeHintOn;
    els.markLatest.textContent = latestPoint
      ? `${i18n[state.lang].routePointCount}: ${state.routePoints.length}\n${formatRoutePoint(latestPoint)}`
      : `${i18n[state.lang].routePointCount}: 0`;
    els.copyMarkedPoints.textContent = i18n[state.lang].copyRoute;
    return;
  }

  els.markStatus.textContent = state.marking ? i18n[state.lang].markingOn : i18n[state.lang].markingOff;
  els.markHint.textContent = state.marking ? i18n[state.lang].markHintOn : i18n[state.lang].markHintOff;
  els.markLatest.textContent = latestPoint ? formatPoint(latestPoint) : i18n[state.lang].noPoint;
  els.copyMarkedPoints.textContent = i18n[state.lang].copyPoints;
}

async function copyText(text, feedback = `${i18n[state.lang].copied}: ${text}`) {
  try {
    await navigator.clipboard.writeText(text);
    els.markHint.textContent = feedback;
  } catch {
    els.markHint.textContent = text;
  }
}

function endDrag(event) {
  if (!state.dragging) return;

  const shouldAddPoint = state.pendingPoint && !state.pointerMoved;
  state.dragging = false;
  state.pendingPoint = false;
  state.pointerMoved = false;
  els.viewport.classList.remove("dragging");
  if (els.viewport.hasPointerCapture(event.pointerId)) {
    els.viewport.releasePointerCapture(event.pointerId);
  }

  if (shouldAddPoint) {
    if (state.marking) addMarkedPoint(event);
    if (state.routeMarking) addRoutePoint(event);
  }
}

function init() {
  els.canvas.style.setProperty("--map-aspect", String(mapConfig.width / mapConfig.height));
  els.image.src = mapConfig.src;
  saveMarkedPoints();
  resetView();
  render();
}

window.addEventListener("resize", applyTransform);

els.viewport.addEventListener("pointerdown", beginDrag);
els.viewport.addEventListener("pointermove", moveDrag);
els.viewport.addEventListener("pointerup", endDrag);
els.viewport.addEventListener("pointercancel", endDrag);

els.zoomIn.addEventListener("click", () => setScale(state.scale + 0.22));
els.zoomOut.addEventListener("click", () => setScale(state.scale - 0.22));
els.resetView.addEventListener("click", resetView);

els.routeToggle.addEventListener("click", () => {
  state.routeOn = !state.routeOn;
  render();
  openActivePlace();
});

els.facilitiesToggle.addEventListener("click", () => {
  state.facilitiesOn = !state.facilitiesOn;
  if (!state.facilitiesOn && state.activePlaceId && !state.activePlaceId.startsWith("number-")) {
    closeDrawer();
  }
  render();
});

els.langToggle.addEventListener("click", () => {
  state.lang = state.lang === "en" ? "zh" : "en";
  render();
  openActivePlace();
});

els.closeDrawer.addEventListener("click", () => {
  closeDrawer();
  renderHotspots();
});

els.copyMarkedPoints.addEventListener("click", () => {
  if (state.routeMarking) {
    copyText(
      formatRoutePointArray(),
      `${i18n[state.lang].copied}: ${i18n[state.lang].routePointCount} ${state.routePoints.length}`
    );
    return;
  }

  copyText(formatPointArray());
});

els.undoRoutePoint.addEventListener("click", undoRoutePoint);

els.clearRoutePoints.addEventListener("click", clearRoutePoints);

els.legendToggle.addEventListener("click", () => {
  state.legendOpen = !state.legendOpen;
  renderLegendList();
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (["input", "textarea"].includes(event.target.tagName?.toLowerCase())) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  if (key === "m") {
    toggleMarking();
    return;
  }

  if (key === "r") {
    toggleRouteMarking();
    return;
  }

  if (event.key === "Escape") {
    if (state.routeMarking) {
      state.routeMarking = false;
      resetView();
      renderRoute();
      renderMarkers();
      updateMarkPanel();
      return;
    }

    if (state.marking) {
      state.marking = false;
      resetView();
      updateMarkPanel();
      return;
    }

    closeDrawer();
    renderHotspots();
  }
});

init();
