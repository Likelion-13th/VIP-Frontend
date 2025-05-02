import React from 'react';

const Status = () => {
    return(
        <div className='status-container-wrap'>
            <div className='status-container1'>나의 주문 현황</div>
            <div className='status-container2'>
                <div className='status-section'>
                    <div className='status-text'>입금완료</div>
                    <div className='status-text'>1</div>
                </div>
                <div className='status-section'>
                    <div className='status-text'>배송중</div>
                    <div className='status-text'>10</div>
                </div>
                <div className='status-section'>
                    <div className='status-text'>배송완료</div>
                    <div className='status-text'>10</div>
                </div>
                <div className='status-section'>
                    <div className='status-text'>주문취소</div>
                    <div className='status-text'>0</div>
                </div>
            </div>
        </div>
    );
};
export default Status;