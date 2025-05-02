import React from "react";

const History = () => {

	// onClick
	const handleCancel = () => {
		alert("주문이 취소되었습니다");
	}
	
  return (
    <div className="history-container-wrap">
        <div className="history-title">나의 쇼핑 내역</div>
        <div className="history-container">
            <table className="history-table" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                        <th>주문 일자</th>
                        <th>상품 정보</th>
                        <th>수량</th>
                        <th>구매 금액</th>
                        <th>상태</th>
                        <th>주문 취소</th>
                    </tr>
                </thead>
                <tbody>
		                <tr>
                        <td>2025-05-01</td>
                        <td>
                          <div className="history-product">
                            <img
                              src={`${process.env.PUBLIC_URL}/image/princess_dress1.jpeg`}
                              alt="princess_dress"
                              className="dress_image"
                            />
                            <div className="history-img-text">
                              <div className="history-img-text-1">??? 공주가 입다가 버린 드레스</div>
                              <div className='history-img-text-1-2'>항대왕국 보물창고</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>9,999,999,999,999원</td>
                        <td>배송중</td>
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={handleCancel}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
		                <tr>
                        <td>2025-05-01</td>
                        <td>
                          <div className="history-product">
                            <img
                              src={`${process.env.PUBLIC_URL}/image/princess_dress1.jpeg`}
                              alt="princess_dress"
                              className="dress_image"
                            />
                            <div className="history-img-text">
                              <div className="history-img-text-1">??? 공주가 입다가 버린 드레스</div>
                              <div className='history-img-text-1-2'>항대왕국 보물창고</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>9,999,999,999,999원</td>
                        <td>배송중</td>
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={handleCancel}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
		                <tr>
                        <td>2025-05-01</td>
                        <td>
                          <div className="history-product">
                            <img
                              src={`${process.env.PUBLIC_URL}/image/princess_dress1.jpeg`}
                              alt="princess_dress"
                              className="dress_image"
                            />
                            <div className="history-img-text">
                              <div className="history-img-text-1">??? 공주가 입다가 버린 드레스</div>
                              <div className='history-img-text-1-2'>항대왕국 보물창고</div>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>9,999,999,999,999원</td>
                        <td>배송중</td>
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={handleCancel}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>    
    );
};
export default History;