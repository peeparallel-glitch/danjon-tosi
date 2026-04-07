export const INITIAL_GENERALS = [
    { id: 1, name: "織田信長", power: 95, intel: 92, soldiers: 1000 },
    { id: 2, name: "徳川家康", power: 88, intel: 94, soldiers: 900 },
    { id: 3, name: "武田信玄", power: 98, intel: 96, soldiers: 1200 },
    { id: 4, name: "上杉謙信", power: 99, intel: 85, soldiers: 1200 },
    { id: 5, name: "伊達政宗", power: 92, intel: 88, soldiers: 800 },
    { id: 6, name: "豊臣秀吉", power: 85, intel: 98, soldiers: 1100 },
    { id: 7, name: "毛利元就", power: 80, intel: 99, soldiers: 1000 },
    { id: 8, name: "島津義弘", power: 96, intel: 82, soldiers: 950 },
    { id: 9, name: "真田幸村", power: 97, intel: 84, soldiers: 700 },
    { id: 10, name: "北条氏康", power: 89, intel: 93, soldiers: 1100 },
    { id: 11, name: "今川義元", power: 82, intel: 90, soldiers: 1300 },
    { id: 12, name: "浅井長政", power: 90, intel: 82, soldiers: 850 },
    { id: 13, name: "朝倉義景", power: 75, intel: 78, soldiers: 900 },
    { id: 14, name: "足利義輝", power: 94, intel: 80, soldiers: 600 },
    { id: 15, name: "松永久秀", power: 78, intel: 95, soldiers: 750 },
    { id: 16, name: "三好長慶", power: 84, intel: 92, soldiers: 1000 },
    { id: 17, name: "長宗我部元親", power: 88, intel: 90, soldiers: 850 },
    { id: 18, name: "大友宗麟", power: 80, intel: 88, soldiers: 1000 },
    { id: 19, name: "龍造寺隆信", power: 91, intel: 72, soldiers: 900 },
    { id: 20, name: "鍋島直茂", power: 86, intel: 94, soldiers: 800 },
    { id: 21, name: "立花宗茂", power: 96, intel: 86, soldiers: 700 },
    { id: 22, name: "黒田官兵衛", power: 72, intel: 99, soldiers: 750 },
    { id: 23, name: "竹中半兵衛", power: 70, intel: 99, soldiers: 600 },
    { id: 24, name: "斎藤道三", power: 83, intel: 96, soldiers: 950 },
    { id: 25, name: "柴田勝家", power: 94, intel: 75, soldiers: 1000 },
    { id: 26, name: "前田利家", power: 88, intel: 84, soldiers: 900 },
    { id: 27, name: "明智光秀", power: 86, intel: 94, soldiers: 850 },
    { id: 28, name: "石田三成", power: 65, intel: 93, soldiers: 800 },
    { id: 29, name: "直江兼続", power: 85, intel: 95, soldiers: 850 },
    { id: 30, name: "真田昌幸", power: 82, intel: 98, soldiers: 700 },
    { id: 31, name: "本多忠勝", power: 99, intel: 78, soldiers: 800 },
    { id: 32, name: "井伊直政", power: 93, intel: 86, soldiers: 750 },
    { id: 33, name: "榊原康政", power: 88, intel: 85, soldiers: 750 },
    { id: 34, name: "酒井忠次", power: 85, intel: 90, soldiers: 800 },
    { id: 35, name: "山県昌景", power: 95, intel: 88, soldiers: 900 },
    { id: 36, name: "馬場信春", power: 92, intel: 90, soldiers: 900 },
    { id: 37, name: "高坂昌信", power: 84, intel: 94, soldiers: 850 },
    { id: 38, name: "柿崎景家", power: 96, intel: 65, soldiers: 800 },
    { id: 39, name: "片倉小十郎", power: 83, intel: 93, soldiers: 800 },
    { id: 40, name: "最上義光", power: 88, intel: 92, soldiers: 900 },
    { id: 41, name: "佐竹義重", power: 91, intel: 88, soldiers: 950 },
    { id: 42, name: "宇喜多直家", power: 74, intel: 97, soldiers: 800 },
    { id: 43, name: "尼子経久", power: 81, intel: 98, soldiers: 900 },
    { id: 44, name: "山中鹿介", power: 93, intel: 82, soldiers: 600 },
    { id: 45, name: "吉川元春", power: 94, intel: 85, soldiers: 900 },
    { id: 46, name: "小早川隆景", power: 82, intel: 96, soldiers: 850 },
    { id: 47, name: "秋山信友", power: 87, intel: 84, soldiers: 800 },
    { id: 48, name: "真田信之", power: 84, intel: 91, soldiers: 800 },
    { id: 49, name: "前田慶次", power: 97, intel: 82, soldiers: 600 },
    { id: 50, name: "後藤又兵衛", power: 94, intel: 80, soldiers: 700 }
];

const PROVINCE_NAMES = [
    "尾張", "三河", "甲斐", "越後", "陸奥", "山城", "安芸", "薩摩", "信濃", "相模",
    "駿河", "近江", "越前", "出羽", "大和", "摂津", "土佐", "豊後", "肥前", "肥後",
    "筑後", "播磨", "美濃", "飛騨", "能登", "加賀", "丹波", "丹後", "但馬", "因幡",
    "伯耆", "出雲", "石見", "隠岐", "備前", "備中", "備後", "周防", "長門", "紀伊",
    "伊勢", "伊賀", "志摩", "近江北", "若狭", "佐渡", "常陸", "下野", "上野", "武蔵"
];

export const createTerritories = () => {
    const territories = [];
    for (let i = 0; i < 50; i++) {
        // Simple 10x5 grid for demo, in reality we'd map these to a Japan layout
        const x = i % 10;
        const y = Math.floor(i / 10);
        
        // Assign each general to one unique territory
        const ownerId = INITIAL_GENERALS[i].id;
        
        territories.push({
            id: i,
            name: PROVINCE_NAMES[i],
            ownerId: ownerId,
            soldiers: 500 + Math.floor(Math.random() * 500),
            rice: 1000 + Math.floor(Math.random() * 1000),
            gold: 1000 + Math.floor(Math.random() * 1000),
            gridX: x,
            gridY: y
        });
    }
    return territories;
};
