import React from 'react';
import "../../styles/Info.css";

const Info = () => {
    return (
        <div className='info-container'>
            <div className='info-section1'>
                <img
                    src={`${process.env.PUBLIC_URL}/image/about_us.png`}
                    alt="about_us"
                    className="info_image"
                ></img>
                <div className='info-text1'>ABOUT US</div>
            </div>
            <div className='info-section2'>
                <div className='info-text2'>
                    <div>자연과의 공존,</div>
                    <div>지속 가능한 아름다움을 향하여</div>
                </div>
                <div className='info-text3'>
                    <div>‘멋쟁이사자처럼’의 향수와 디퓨저는</div>
                    <div>자연에서 영감을 받아 엄선된 원료만을 사용해 만들어졌습니다.</div>
                    <br />
                    <div>환경을 지키기 위한 노력으로 지속 가능한 제조 공정을 채택하며,</div>
                    <div>재활용 가능한 친환경 찌꺼기를 사용합니다.</div>
                    <br />
                    <div>단순한 향기가 아닌, 지구를 위한 작은 실천과 아름다움을 담아냅니다.</div>
                    <p>지금, 자연과 함께하는 향기를 경험해보세요.</p>
                </div>
            </div>

        </div>
    );
};

export default Info;