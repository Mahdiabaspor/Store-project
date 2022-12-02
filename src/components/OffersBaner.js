import { Link } from "react-router-dom"

import "../Styles/Components/OffersBaner.css"

const OffersBaner = ({Items}) => {

    return (
        <div className="offer-baner container my-4">
            <div className="baner row">

                <div className="head col-4 d-flex">
                    <img src="https://www.digikala.com/statics/img/png/amazing/fresh.png"/>
                    <h5>Best Offers for You</h5>

                </div>

                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/2203180.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">20%</div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/6088810d4fea22d6f0e346bb65f4ba9a1a9e1c82_1618822582.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">10%</div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/b353d99cbafce342bec8fc23ca4e75c21b02fc9c_1644823804.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">13%</div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/bec46a9cd57996bd085a89f576db1ede343613f1_1665837908.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">24%</div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/be65552a8c3e709a7d49d2f1eb35b3882b1fdf18_1662792408.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">23%</div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="item">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/2203180.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"/>
                        <div className="percent">31%</div>
                    </div>
                </div>

                <div className="see-more col-2 d-flex">
                    <Link to="#">See More</Link>
                </div>
            </div>
        </div>
    )
}

export default OffersBaner