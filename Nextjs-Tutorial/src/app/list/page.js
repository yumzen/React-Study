import Image from "next/image"
import food0 from '/public/food0.png'
import food1 from '/public/food1.png'
import food2 from '/public/food2.png'

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return(
        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((a, i)=>{
                    return(
                        <div className="food" key={i}>
                            <Image src={`/food${i}.png`} className="food-img" width={100} height={100}/>
                            <h4>{a} $40</h4>
                        </div>
                        )
                })
            }
        </div>
    )
}