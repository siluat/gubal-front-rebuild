import React from 'react';
import { Item } from '../../types/Item';
import styled from '@emotion/styled';
import ItemIcon from '../ItemIcon/ItemIcon';
import ItemName from '../ItemName/ItemName';
import colors from '../../styles/colors';
import { EquippableCategoryList, PhysicalArmList } from '../../utils/codeMap';

const ItemDetailBlock = styled.div`
  display: grid;
  grid-template:
    'icon base-information'
    'item-level item-level'
    'physical-spec physical-spec'
    / 100px 1fr;

  padding-top: 1rem;

  .icon {
    grid-area: icon;
    font-size: 0;
    text-align: center;
  }

  .base-information {
    grid-area: base-information;
    font-size: 16px;
    display: flex;
    flex-direction: column;

    div,
    p {
      margin-bottom: 0.25rem;
    }

    .uniqueness-tradable {
      font-size: 0.75rem;
      color: ${colors.darkText};
      span + span {
        margin-left: 0.5rem;
      }
    }
    .item-name {
      font-weight: bold;
    }
    .category-name {
      font-size: 0.875rem;
    }
    .storage-information {
      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .item-level {
    grid-area: item-level;
    margin-top: 0.5rem;
    padding: 0.6rem 1.2rem;
    background-color: ${colors.darkBackground};
    font-size: 0.875rem;
  }

  .physical-spec {
    grid-area: physical-spec;
    padding: 0 1.2rem;
    div {
      display: flex;
      justify-content: space-between;
      dt,
      dd {
        display: inline-block;
        font-size: 0.875rem;
      }
      dt {
        color: ${colors.highlight};
      }
    }
    div + div {
      margin-top: 0.3rem;
    }
  }
`;

export type ItemDetailProps = {
  item: Item;
};

function ItemDetail({ item }: ItemDetailProps) {
  const {
    icon,
    name,
    rarity,
    isUnique,
    isUntradable,
    isCrestWorthy,
    isGlamourous,
    isCollectable,
    itemLevel,
    physDamage,
    delay,
  } = item;
  const categoryName = item.itemUICategory.name;
  return (
    <ItemDetailBlock>
      <div className="icon">
        <ItemIcon code={`${icon}`} itemName={name} size="medium" />
      </div>
      <div className="base-information">
        <div className="uniqueness-tradable">
          {isUnique && <span>고유</span>}
          {isUntradable && <span>거래 불가</span>}
        </div>
        <ItemName className="item-name" rarity={rarity}>
          {name}
        </ItemName>
        <div className="category-name">{categoryName}</div>
        <div className="storage-information">
          {isCrestWorthy ? (
            <img
              src="/images/crest_worthy.png"
              alt="문장 장식 가능"
              title="문장 장식 가능"
            />
          ) : (
            <img
              src="/images/not_crest_worthy.png"
              alt="문장 장식 불가"
              title="문장 장식 불가"
            />
          )}
          {isGlamourous ? (
            <img
              src="/images/glamourous.png"
              alt="환상의 옷장 보관 가능"
              title="환상의 옷장 보관 가능"
            />
          ) : (
            <img
              src="/images/not_glamourous.png"
              alt="환상의 옷장 보관 불가"
              title="환상의 옷장 보관 불가"
            />
          )}
          {isCollectable ? (
            <img
              src="/images/collectable.png"
              alt="추억의 보관함 보관 가능"
              title="추억의 보관함 보관 가능"
            />
          ) : (
            <img
              src="/images/not_collectable.png"
              alt="추억의 보관함 보관 불가"
              title="추억의 보관함 보관 불가"
            />
          )}
        </div>
      </div>
      {EquippableCategoryList.includes(categoryName) && (
        <div className="item-level">아이템 레벨 {itemLevel}</div>
      )}
      {PhysicalArmList.includes(categoryName) && (
        <div className="physical-spec">
          <dl>
            <div>
              <dt>물리 기본 성능</dt>
              <dd>{physDamage}</dd>
            </div>
            <div>
              <dt>물리 자동 공격</dt>
              <dd>{Math.floor((delay / 10 / 3) * physDamage) / 100}</dd>
            </div>
            <div>
              <dt>공격 주기</dt>
              <dd>{delay / 1000}</dd>
            </div>
          </dl>
        </div>
      )}
    </ItemDetailBlock>
  );
}

export default ItemDetail;
