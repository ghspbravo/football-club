import React from 'react'

export default function competitionGames() {
	return (
		<div className="c-card u-p-medium u-text-small">
			<h6 className="u-text-bold">Игры турнира</h6>

			{Array(3).fill().map(() => <div className="game-item u-pv-large u-ph-medium u-mt-medium" style={{
				backgroundImage: `url(https://previews.123rf.com/images/praewpailin/praewpailin1606/praewpailin160600022/60968142-football-field-or-soccer-field-pattern-and-texture-abstract-soccer-field-or-football-field-backgroun.jpg)`,
				backgroundSize: 'cover',
			}}>

				<div className="row no-gutters align-items-center u-p-small" style={{
					backgroundColor: '#ffffff88',
					borderRadius: '25px'
				}}>
					<div class="c-avatar c-avatar--large">
						<img class="c-avatar__img" src="http://via.placeholder.com/150" alt=""/>
					</div>

					<div className="u-text-center u-p-small game-item__details col">
						Начало игры:
						<span className="u-text-bold"> 20.20.2020</span>
					</div>
	
					<div style={{
						marginLeft: 'auto'
					}} className="c-avatar c-avatar--large">
						<img className="c-avatar__img" src="http://via.placeholder.com/150" alt=""/>
					</div>
				</div>

				</div>)}
			</div>
			)
		}
