import { Item } from '../../types/Item';

export const testItem: Item = {
  id: 28292,
  description: '',
  name: '절 롱고미안트',
  icon: '31993',
  itemLevel: 475,
  rarity: 3,
  itemUICategory: {
    id: 5,
    name: '양손창',
    icon: '60104',
    majorOrder: 4,
    minorOrder: 1,
  },
  stackSize: 1,
  isUnique: true,
  isUntradable: true,
  isIndisposable: false,
  lot: true,
  midPrice: 2,
  lowPrice: 0,
  canBeHq: false,
  isDyeable: false,
  isCrestWorthy: false,
  cooldown: 0,
  repairClassJob: '대장장이',
  repairItem: '7등급 암흑물질',
  glamourItem: '환상의 프리즘',
  salvage: null,
  isCollectable: false,
  alwaysCollectable: false,
  aetherialReduce: 0,
  equipLevel: 80,
  equipRestriction: 1,
  classJobCategory: '창술사 용기사',
  grandCompany: '총사령부 없음',
  itemSeries: '',
  baseParamModifier: 2,
  useClassJob: '창술사',
  physDamage: 122,
  magDamage: 82,
  delay: 2800,
  blockRate: 0,
  block: 0,
  physDefense: 0,
  magDefense: 0,
  baseParam0: { name: '힘', value: 544 },
  baseParam1: { name: '활력', value: 585 },
  baseParam2: { name: '직격', value: 467 },
  baseParam3: { name: '극대화', value: 327 },
  itemSpecialBonus: '',
  itemSpecialBonusParam: 0,
  materializeType: 0,
  materiaSlotCount: 3,
  isAdvancedMeldingPermitted: false,
  isPvP: false,
  isGlamourous: true,
};

export const uniqueItem: Item = {
  ...testItem,
  isUnique: true,
};

export const notUniqueItem: Item = {
  ...testItem,
  isUnique: false,
};

export const tradableItem: Item = {
  ...testItem,
  isUntradable: false,
};

export const untradableItem: Item = {
  ...testItem,
  isUntradable: true,
};

export const potion: Item = {
  id: 4551,
  description: '체력을 회복하는 효과가 있는 물약.',
  name: '포션',
  icon: '20601',
  itemLevel: 10,
  rarity: 1,
  itemUICategory: {
    id: 44,
    name: '약품',
    icon: '60136',
    majorOrder: 0,
    minorOrder: 5,
  },
  stackSize: 999,
  isUnique: false,
  isUntradable: false,
  isIndisposable: false,
  lot: false,
  midPrice: 28,
  lowPrice: 1,
  canBeHq: true,
  isDyeable: false,
  isCrestWorthy: false,
  cooldown: 25,
  repairClassJob: null,
  repairItem: null,
  glamourItem: null,
  salvage: null,
  isCollectable: false,
  alwaysCollectable: false,
  aetherialReduce: 0,
  equipLevel: 1,
  equipRestriction: 0,
  classJobCategory: '',
  grandCompany: '총사령부 없음',
  itemSeries: '',
  baseParamModifier: 0,
  useClassJob: '모험가',
  physDamage: 0,
  magDamage: 0,
  delay: 0,
  blockRate: 0,
  block: 0,
  physDefense: 0,
  magDefense: 0,
  itemSpecialBonus: '',
  itemSpecialBonusParam: 0,
  materializeType: 0,
  materiaSlotCount: 0,
  isAdvancedMeldingPermitted: false,
  isPvP: false,
  isGlamourous: false,
};

export const pugilistArm: Item = {
  id: 23567,
  description: '',
  name: '오메가 너클',
  icon: '31157',
  itemLevel: 405,
  rarity: 3,
  itemUICategory: {
    id: 1,
    name: '격투무기',
    icon: '60101',
    majorOrder: 5,
    minorOrder: 1,
  },
  stackSize: 1,
  isUnique: true,
  isUntradable: true,
  isIndisposable: false,
  lot: true,
  midPrice: 108691,
  lowPrice: 2752,
  canBeHq: false,
  isDyeable: true,
  isCrestWorthy: false,
  cooldown: 0,
  repairClassJob: '대장장이',
  repairItem: '7등급 암흑물질',
  glamourItem: '환상의 프리즘',
  salvage: 405,
  isCollectable: false,
  alwaysCollectable: false,
  aetherialReduce: 0,
  equipLevel: 70,
  equipRestriction: 1,
  classJobCategory: '격투사 몽크',
  grandCompany: '총사령부 없음',
  itemSeries: '',
  baseParamModifier: 3,
  useClassJob: '격투사',
  physDamage: 109,
  magDamage: 74,
  delay: 2560,
  blockRate: 0,
  block: 0,
  physDefense: 0,
  magDefense: 0,
  baseParam0: { name: '힘', value: 403 },
  baseParam1: { name: '활력', value: 455 },
  baseParam2: { name: '의지력', value: 356 },
  baseParam3: { name: '직격', value: 249 },
  itemSpecialBonus: '',
  itemSpecialBonusParam: 0,
  materializeType: 5,
  materiaSlotCount: 2,
  isAdvancedMeldingPermitted: false,
  isPvP: false,
  isGlamourous: true,
};
