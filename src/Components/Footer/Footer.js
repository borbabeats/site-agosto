
import { BsInstagram, BsWhatsapp, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { Row, Container } from "reactstrap";
import { useEffect, useState } from "react";
import icon from '../../Config/Images/iconMaxi.png'
import { Link } from "react-router-dom"
import { backtotop } from "../../Config/Icons/backtotop.svg"
// import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, } from "reactstrap";

function Footer() {
	const [classNameButtom, SetClassNameButtom] = useState('btn-outline-dark')

	useEffect(() => {
		const handleScroll = () => {
			const footer = document.getElementById("footer");
			const buttom = document.getElementById("button");
			// console.log(window.;);
			if (footer.getBoundingClientRect().top < buttom.getBoundingClientRect().bottom) {
				SetClassNameButtom('color-secondary')
			} else {
				SetClassNameButtom('color-primary')
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const ClickInNavLinkOrNavbarBrand = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (<>
		{/* <button type="button" id="button" className={`btn btn-close `} onClick={ClickInNavLinkOrNavbarBrand} > s </button> */}
		<a id="button" className={classNameButtom} onClick={ClickInNavLinkOrNavbarBrand}></a>
		<footer className="main-footer" id="footer">
			<div className="container">
				<div className="footer-content">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-12 ">
							<div className="logo-widget footer-widget">
								<figure className="logo-box">
									<a href="#"><img src={icon} alt="" /></a>
								</figure>
								<div className="text">
									<p className="text-white">Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
								</div>
								<div className="text mt-5">
									<a href="https://instagram.com/maxiforja?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
										<BsInstagram className="icon" />
									</a>
									<a href="https://www.facebook.com/maxiforja?mibextid=ZbWKwL" target="_blank" >
										<BsFacebook className="icon" />
									</a>
									<a href="https://www.linkedin.com/company/maxiforja/" target="_blank">
										<BsLinkedin className="icon" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 ">
							<div className="">
								<div className="footer-title">Services</div>
								<ul className="list p-0 m-0">
									<li className="pb-3"><a className="text-white color-secondary" href="https://www.contatoseguro.com.br/" target="_blank" > Canal de Denúncia </a> </li>
									<li className="pb-3"><a className="text-white color-secondary" href="" target="_blank" > Education for all </a> </li>
									<li className="pb-3"><a className="text-white color-secondary" href="" target="_blank" > Food Serving </a> </li>
									<li className="pb-3"><a className="text-white color-secondary" href="" target="_blank" > Animal Saves </a> </li>
									<li className="pb-3"><a className="text-white color-secondary" href="" target="_blank" > Help Orphan </a> </li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
							<div className=" footer-widget">
								<div className="footer-title">Contacts</div>
								<div className="text">
									<p className="pb-3 text-white color-secondary" >Lorem Ipsum, simply dummy text, printing, Chandigarh</p>
									<p className="pb-3 text-white color-secondary" >+55 (051) 2121-8900 </p>
									<p className="pb-3 text-white color-secondary" >ti.desenvolvimento@maxiforja.com.br</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 column">
						<div className="copyright text-white color-secondary">Maxiforja &copy; {new Date().getFullYear()} Todos os direitos reservados</div>
					</div>
				</div>
			</div>
		</div>
	</>
	);
}

export default Footer;