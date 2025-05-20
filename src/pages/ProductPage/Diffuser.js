import React, {useState} from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Diffuser = () => {
    const products=[
        {
            id: 1,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_1.png",
            isNew: true,

        },
        {
            id: 2,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_2.png",
            isNew: false,
            
        },
        {
            id: 3,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_3.png",
            isNew: false,
            
        },
        {
            id: 4,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_4.png",
            isNew: true,
            
        },
        {
            id: 5,
            name: "디퓨저",
            brand: "브랜드",
            price: 30000,
            imagePath: "/image/diffuser_5.png",
            isNew: false,
            
        },
        

    ];

    const [selectedProduct, setSelectedProduct]=useState(null);
    const [isModalOpen, setIsModalOpen]=useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(products.length/itemsPerPage);

    const startIndex= (currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
    };

    return(
        <div>
            <Banner title="Diffuser"imagePath={"/banner_diffuser.jpg"}/>
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product)=>(
                        <ProductCard
                        key={product.id}
                        product={product}
                        onClick={()=>handleCardClick(product)}
                        />
                    ))}
                </div>
                <div className="paging">
                    {currentPage > 1 && (
                        <button>
                        Prev
                        </button>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                        <button
                            key={pageNumber}
                            className={pageNumber===currentPage ? 'active' : ''}
                            onClick={()=>handlePageChange(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                        )
                    )}
                    {currentPage < totalPages && (
                        <button
                        onClick={()=>handlePageChange(currentPage+1)}>
                        Next
                        </button>
                    )}
                </div>
            </div>
            {isModalOpen && (<PayModal product={selectedProduct} onClose={handleCloseModal}/>
            )}
        </div>
    );
};

export default Diffuser;