import { memo } from "react"
import './footer.scss'

function Footer() {
    return (
        <footer className='footer bg-[#1A1A1A] flex justify-center p-[2rem_2rem_1rem_2rem] mt-5'>
            <div className="container">
                <div className="footer__head text-white flex flex-wrap justify-between">
                    <div className="footer__content text-[#FFFFFFB3] w-1/4 max-[768px]:w-1/2 mt-5">
                        <h2 className="hover:text-[#f26b38] cursor-pointer text-lg">GIỚI THIỆU</h2>
                        <ul className="footer__list flex flex-col gap-2 mt-3">
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">VỀ CHÚNG TÔI</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">THOẢ THUẬN SỬ DỤNG</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">QUY CHẾ HOẠT ĐỘNG</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">CHÍNH SÁCH BẢO MẬT</li>
                        </ul>
                    </div>
                    <div className="footer__content text-[#FFFFFFB3] w-1/4 max-[768px]:w-1/2 mt-5">
                        <h2 className="hover:text-[#f26b38] cursor-pointer text-lg">GÓC ĐIỆN ẢNH</h2>
                        <ul className="footer__list flex flex-col gap-2 mt-3">
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">THỂ LOẠI PHIM</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">BÌNH LUẬN PHIM</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">BLOG ĐIỆN ẢNH</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">PHIM HAY THÁNG</li>
                        </ul>
                    </div>
                    <div className="footer__content text-[#FFFFFFB3] w-1/4 max-[768px]:w-1/2 mt-5">
                        <h2 className="hover:text-[#f26b38] cursor-pointer text-lg">HỖ TRỢ</h2>
                        <ul className="footer__list flex flex-col gap-2 mt-3">
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">GÓP Ý</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">SALE & SERVICES</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">RẠP / GIÁ VÉ</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">TUYỂN DỤNG</li>
                        </ul>
                    </div>
                    <div className="footer__content text-[#FFFFFFB3] w-1/4 max-[768px]:w-1/2 mt-5">
                        <h2 className="hover:text-[#f26b38] cursor-pointer text-lg">KẾT NỐI GALAXY CINEMA</h2>
                        <ul className="footer__list flex flex-col gap-2 mt-3">
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">VỀ CHÚNG TÔI</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">VỀ CHÚNG TÔI</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">VỀ CHÚNG TÔI</li>
                            <li className="footer__list--items hover:text-[#f26b38] cursor-pointer text-sm">VỀ CHÚNG TÔI</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__foot mt-[2rem] w-full flex items-center gap-4 border-t-[1px solid gray] text-[#FFFFFFB3] max-[768px]:flex-col">
                    <img src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-footer.7a918263.svg" alt="" />
                    <p>Công Ty Cổ Phần Phim Thiên Ngân, Tầng 3, Toà Nhà Bitexco Nam Long, 63A Võ Văn Tần, P. Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh</p>
                </div>
            </div>
        </footer>

    )
}
export default memo(Footer)