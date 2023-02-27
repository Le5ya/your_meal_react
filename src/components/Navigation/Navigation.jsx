import classNames from 'classnames';
import { Container } from '../Container/Container.jsx';
import { API_URI, POSTFIX } from '../../const.js'
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice.js';
import style from './Navigation.module.css';
import { useEffect } from 'react';


export const Navigation = () => {
	const { category, activeCategory } = useSelector((state) => state.category)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(categoryRequestAsync('max'));
	}, [])
	return (
		<nav className={style.navigation}>
			<Container className={style.container}>
				<ul className={style.list}>
					{category.map((item, i) => 
						<li key={item.title} className={style.item}>
							<button
								className={classNames(
									style.button,
									activeCategory === i ? style.button_active : '')}
								style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
								onClick={() => {
									dispatch(changeCategory({ indexCategory: i }));
								}
								}
							>
								{item.rus}
							</button>
						</li>
					)}
				</ul >
			</Container >
		</nav >
	)
}
