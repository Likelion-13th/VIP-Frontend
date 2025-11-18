import React from 'react';

const Status = ( {orderStatusData} ) => {

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount)
    }


    return(
        <div className='status-container-wrap'>
            <div className='status-container1'>나의 주문 현황</div>
            <div className='status-container2'>
                <div className='status-section'>
                    <div className='status-text'>배송중</div>
                    <div className='status-text'>
                        <span>{formatCurrency(orderStatusData?.PROCESSING)}</span>
                    </div>
                </div>
                <div className='status-section'>
                    <div className='status-text'>배송완료</div>
                    <div className='status-text'>
                        <span>{formatCurrency(orderStatusData?.COMPLETE)}</span>
                    </div>
                </div>
                <div className='status-section'>
                    <div className='status-text'>주문취소</div>
                    <div className='status-text'>
                        <span>{formatCurrency(orderStatusData?.CANCEL)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Status;