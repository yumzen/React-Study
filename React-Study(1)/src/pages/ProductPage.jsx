import React from 'react'
import Product from '../components/Product';

export default function ProductPage() {

    const data = [
        {
            id: 1,
            name: "당도선별 수박 6Kg 이상",
            price: 15900,
            url: "	https://product-image.kurly.com/product/image/5c036991-10a2-4fff-9824-7530154e2658.jpg",
            alt: "수박 이미지"
        },
        {
            id: 2,
            name: "인기 면요리 13종 균일가 골라담기",
            price: 8950,
            url: "https://product-image.kurly.com/product/image/70e212fb-44b1-47e2-9064-456c93cd5684.jpg",
            alt: "면요리 이미지"
        },
        {
            id: 3,
            name: "오리지널 바베큐폭립",
            price: 15990,
            url: "https://product-image.kurly.com/product/image/b8c4673a-8e39-4dfc-9e3c-d2fd013e8cfa.jpg",
            alt: "바베큐폭립 이미지"
        },
    ];

    return (
        <div>
            {
                /*1. data배열의 각 항목을 순회하며 Product 컴포넌트를 생성
                2. map 함수는 data 배열의 각 요소에 대해 주어진 콜백 함수를 호출하고, 콜백 함수의 반환값들로 새로운 배열 생성
                3. d는 data 배열의 요소를 나타냄
                */
                data.map((d) =>
                    <Product
                        // 자식들이 unique한 속성을 가져야 함
                        key={d.id}
                        name={d.name}
                        price={d.price}
                        url={d.url}
                        alt={d.alt}
                    />
                )}
        </div>

    )
}
