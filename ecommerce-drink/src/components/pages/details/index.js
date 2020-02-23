import React, { useEffect, useState } from "react";
import ImageDetail from './ImageDetail';
import InfoDetail from './InfoDetail';
import MoreInfo from './MoreInfo';
import { fetchData } from '../../../mixins/fetchData';
import Breadcrumb from '../../Breadcrumb';

export default function Detail({ match }) {
    const [product, setProduct] = useState(Array);
    const id = +match.params.id;

    useEffect(() => {
        setProduct(fetchData("products", { id: id }));
    }, [id]);

    if (typeof product !== "object") {
        return null;
    }

    return (
        <section className="main-detail">
            <div className="detail container">
                <Breadcrumb breadcrumbItem={product.title} />
                <div className="detail__pro">
                  <ImageDetail photos={product.images} />
                  <InfoDetail product={product} proId={id} />
                </div>
                <MoreInfo rate={product.rating} proId={id} />
            </div>
        </section>
    )
}
