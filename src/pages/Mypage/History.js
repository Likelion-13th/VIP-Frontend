import React from "react";

const History = ({ historyData, onCancel }) => {
  

	// onClick
	const handleCancel = (orderId) => {

    onCancel(orderId);
	};
	
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
                  {historyData.map((order) => (
		                <tr>
                        <td>{order.createdAt.slice(0, 10)}</td>
                        <td>
                              <div className="history-img-text-1">{order.itemName}</div>
                        </td>
                        <td>{order.quantity}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.status}</td>
                        <td>
		                      <div className="history-cancel">
		                        <div
		                          className="history-cancel-button"
		                          onClick={() => handleCancel(order.orderId)}
		                        >  
		                          취소
		                        </div>
		                      </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </div>    
    );
};
export default History;