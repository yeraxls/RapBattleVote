Factory
	Crear distintos tipos de batalla: VideoBattle, AudioBattle, TextoBattle.
	El factory devuelve la clase correcta según el tipo de batalla.

Facade
BattleFacade que coordina:
		Guardar voto
		Actualizar ranking
		Notificar al usuario
Strategy
	Diferentes formas de calcular el ranking:
		Por votos totales
		Por votos ponderados por popularidad del usuario
		Por recencia (batallas recientes tienen más peso)

Observer
	Cuando se añade un nuevo voto:
		Actualizar ranking
		Actualizar estadísticas del artista
		Notificar al usuario (opcional)

Repository
	Abstraer acceso a la base de datos: IBattleRepository, IVoteRepository, IUserRepository.