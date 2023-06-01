
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import icon from '../../Config/Images/iconMaxi.png'
import { Row, Container, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Footer() {
	const [classNameButtom, SetClassNameButtom] = useState('btn-outline-dark')

	useEffect(() => {
		const handleScroll = () => {
			const footer = document.getElementById("footer");
			const buttom = document.getElementById("button");
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
		<a id="button" className={classNameButtom} onClick={ClickInNavLinkOrNavbarBrand}></a>
		<footer className="main-footer" id="footer">
			<Container  >
				<div className="footer-content">
					<Row>
						<Col sm={12} md={12} lg={3} className='pt-3 pb-0'>
							<Link onClick={ClickInNavLinkOrNavbarBrand} to='/index' className="text-white footer-title color-secondary">
								<figure className="logo-box">
									<a href="#"><img src={icon} alt="" /></a>
								</figure>
							</Link>
							<div className="text mt-4">
								<a href="https://instagram.com/maxiforja?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
									<BsInstagram className="icons-social-media" />
								</a>
								<a href="https://www.linkedin.com/company/maxiforja/" target="_blank">
									<BsLinkedin className="icons-social-media" />
								</a>
							</div>

						</Col>
						<Col sm={12} md={12} lg={4} className='pt-3 pb-0'>
							<div className="footer-title bg-danger">Definir Nome</div>
							<ul className="list p-0 mt-3">
								<li className="pb-2 text-white color-secondary"> Aviso Legal </li>
								<li className="pb-2 text-white color-secondary"> Cookies </li>
								<Link onClick={ClickInNavLinkOrNavbarBrand} to='politica-privacidade'>
									<li className="pb-2 text-white color-secondary"> Políticas e Privacidade </li>
								</Link>
							</ul>
						</Col>
						<Col sm={12} md={12} lg={5} className='pt-3 pb-0'>
							<div className=" footer-widget">
								<div className="footer-title">
									<Link onClick={ClickInNavLinkOrNavbarBrand} to='/contato' className="text-white footer-title color-secondary">
										Contato
									</Link>
								</div>
								<ul className="list p-0 mt-3 ">
									<li className="pb-2 text-white color-secondary">Av. Antonio Frederico Ozanan, 1.181 - Bairro Brigadeira - Canoas - CEP 92420-360</li>
									<li className="pb-2 text-white color-secondary">+55 (51) 2121-8900 </li>
									<li className="pb-2 text-white color-secondary">maxiforja@maxiforja.com.br - Geral</li>
									<li className="pb-2 text-white color-secondary">comercial.atendimento@maxiforja.com.br - Vendas</li>
								</ul>

							</div>
						</Col>
						{/* <Container className='p-4'>
							<Row>
								<Col sm={12} md={12} lg={12} className='column'>
									<div className="copyright text-white color-secondary">Maxiforja &copy; {new Date().getFullYear()} Todos os direitos reservados</div>
								</Col>
							</Row>
						</Container>
					*/}
					</Row>
				</div>
			</Container>
		</footer>
		<div className="footer-bottom">
			<Container className='p-2'>
				<Row>
					<Col sm={12} md={12} lg={12} className='column'>
						<div className="copyright text-white color-secondary">Maxiforja &copy; {new Date().getFullYear()} Todos os direitos reservados</div>
					</Col>
				</Row>
			</Container>
		</div>
	</>
	);
}

export default Footer;