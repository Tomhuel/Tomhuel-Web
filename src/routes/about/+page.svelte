<script>
	import Section from '$lib/components/layout/Section.svelte';
	import NeonText from '$lib/components/ui/Neon/NeonText.svelte';

	const multipleInteligentTheoryWikiLink =
		'https://es.wikipedia.org/wiki/Teor%C3%ADa_de_las_inteligencias_m%C3%BAltiples';

	const ccElMuelleOpenResults =
		'https://www.worldcubeassociation.org/competitions/CCElMuelleOpen2019/results/all?event=333';

	/*
Spanish
<Section classname="pt-6 lg:px-48">
	<div class="text-md text-white font-normal">
		<NeonText text="My Journey" textClasses="text-2xl"></NeonText>
		<br />
		<p class="mb-16">¡Hola! Soy Luka, espero que te esté gustando mi sitio web 😉. <br> En esta sección encontrarás un poco más sobre <span class="text-light-pink">mi camino</span> personal y profesional, los proyectos, etapas y logros que me han marcado para que te puedas ubicar más fácilmente con mi perfil. ¡Espero que disfrutes leyéndolo!</p>
		<div class="mb-12">
			<NeonText text="About me" textClasses="text-2xl"></NeonText>
			<p>Me llamo Tomás Nahuel, nací en 2003 en Valencia, pero a temprana edad me fui a vivir a <span class="text-light-pink">Tenerife</span>, <span class="text-lightblue">Canarias</span>. Desde pequeña edad siempre he tenido un comportamiendo obsesivo con aquellas cosas que me gustaban, al punto de que muchas veces esa pasión y amor la he podido <span class="text-lightblue">contagiar</span> a la gente de mi alrededor.</p>

			<p>Académicamente no era un alumno destacable, pero gracias mis defectos académicos tuve la oportunidad de entrar a los 14 años a unas "clases de refuerzo". Estas clases las impartía <span class="text-light-pink">Cerebritos</span> quienes son partidarios de la teoría de las <a href={multipleInteligentTheoryWikiLink} target="_blank" class="text-lightblue hover:underline">inteligencias múltiples</a>.</p>
		</div>

		<div class="mb-12">
			<NeonText text="My name" textClasses="text-2xl"></NeonText>

			<p>Mi nombre real es <span class="text-light-pink">Tomás Nahuel Antela Rizzo</span>, pero el nombre de <span class="text-lightblue">"Luka"</span> viene de una divertida anéctoda. La primera vez que conocí a uno de mis actuales mejores amigos, nos presentamos con nuestros nombres correspondientes. Cuando cada uno se iba a su casa, este nuevo conocido procedió a llamarme Luka a pesar de haber estado pasando varias horas compartiendo risas. Resultó ser un nombre que me gustó mucho y a partir de entonces ha sido el apodo con el que mucha gente de mi círculo cercano me llama. Incluso mi apodo en los videojuegos es <span class="text-light-pink">LukaLaKuka</span>. Es por eso que en muchos sitios me llamo Luka, a pesar de que mi nombre formal sea Tomás.</p>
		</div>

		<div class="mb-12">
			<NeonText text="The rubik's cube in my life" textClasses="text-2xl"></NeonText>

			<p>En la academia de Cerebritos conocí un puzzle que tal vez haya supuesto uno de mis grandes logros a lo largo de mi vida: el <span class="text-light-pink">cubo de Rubik</span>. En la academia nadie sabía resolverlo y me puse como primera meta aprender a resolverlo. Al cabo de 3 días prácticando sin parar y viendo un vídeo de Youtube, logré la gran hazaña.</p>
			<p>Después de disfrutar tanto resolviéndolo sin parar, conocí a unos conocidos en el instituto que me enseñaron que habían muchos más cubos distintos al convencional. Habían cubos grandes, pequeños, redondos, dodecaedros, etc. De todo.</p>
			
			<p>Conforme yo más aprendía y más disfrutaba, más compartía con mis conocidos de la academia. Sobretodo quien era mi instructor y ahora amigo, Abraham. Le propuse con 14 años hacer una actividad en un evento municipal para enseñar a la gente en la calle a resolver este puzzle tan singular y generarles esa pizca de curiosidad.</p>

			<p>¡Resultó un éxito! No logramos enseñar a absolutamente a nadie, pero gracias a eso Cerebritos ganó popularidad y podíamos ofrecer una cantidad de minijuegos orientados al cubo de rubik. Yo solo pensar que podríamos seguir haciendo actividades para poder seguir compartiendo nuestra pasión me alegraba mucho y nos sentíamos realizados.</p>

			<p>Desde entonces, Cerebritos ha seguido durante 7 años consecutivos desarrollando actividades para todo tipo de entidades orientadas a las inteligencias múltiples y usando el cubo de rubik como intermediario.</p>

			<p>Alrededor del primer año con Cerebritos, me dieron la oportunidad de poder participar en mi primer <a href={ccElMuelleOpenResults} class="text-light-pink hover:underline" target="_blank">torneo oficial</a> de cubos de Rubik, ya que para ese entonces yo ya estaba promediando una media de <span class="text-lightblue">15 segundos</span> con el cubo clásico 3x3.</p>

			<p>Para agrado de muchos, logré quedar undécimo en la final de dicho torneo, siendo mi mejor tiempo <span class="text-lightblue">13.72 segundos</span>. Uno de los logros de los que más orgulloso estoy.</p>
		</div>

		<div class="mb-12">
			<NeonText text="How I Got Into Computing" textClasses="text-2xl"></NeonText>

			<p>Antes de conocer una de mis actuales pasiones y hobbies, la informática, seguí colaborando con Cerebritos de forma voluntaria y me encargé de ser <span class="text-light-pink">monitor</span> y/o <span class="text-light-pink">coordinador</span> de muchas actividades en distintos eventos como la <span class="text-lightblue">TenerifeGG</span> o el <span class="text-lightblue">Foro Gamer de los Realejos</span>. Era bastante concurrente que los monitores y formadores de informática me comentaran que era probable de que me gustara la <span class="text-light-pink">programación</span>, ya que la resolución del cubo de rubik se compone de <span class="text-lightblue">patrones</span> y <span class="text-lightblue">algoritmos de resolución</span>.</p>

			<p>Durante todo el tiempo que estuve en el instituto, yo tenía claro que quería ser <span class="text-light-pink">profesor de magisterio de primaria</span>, debido a la larga experiencia como <span class="text-lightblue">instructor</span> y/o <span class="text-lightblue">tutor</span> con Cerebritos. Pero en 2021 cursé mi último año de Bachillerato y aprendí a programar cosas muy básicas en <span class="text-lightblue">Python</span>. Mi profesor tenía exactamente el mismo don que yo, compartir su pasión, y me lo contagió.</p>

			<p>Fue entonces que decidí rechazar la opción de ir a la universidad y me matriculé al ciclo formativo de grado superior de <span class="text-light-pink">desarrollo de aplicaciones web</span>. Para ese entonces no tenía ni la más mínima idea sobre qué iba el ciclo, ni de qué iba a trabajar, ni absolutamente nada relacionado con el sector. Solo sabía que me gustaba hacer scripts en Python.</p>

			<p>Empecé el ciclo formativo en 2021 y por suerte mía me acabó encantando el mundo de la informática. Aprendí a programar en <span class="text-lightblue">Java</span>, <span class="text-lightblue">PHP</span>, <span class="text-lightblue">JavaScript</span> y <span class="text-lightblue">TypeScript</span>. No usé Python al final, pero descubrí que <span class="text-light-pink">no era Python lo que me gustaba</span>. Lo que me gusta es desarrollar y tener la capacidad de poder <span class="text-lightblue">crear soluciones y herramientas</span> desde 0.</p>
		</div>
	</div>
</Section>
	*/
</script>

<svelte:head>
	<title>About - LukaLaKuka</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Section classname="pt-6 lg:px-48">
	<div class="text-md font-normal text-white">
		<NeonText text="My Journey" textClasses="text-2xl"></NeonText>
		<br />
		<p class="mb-16">
			¡Hola! Soy Luka, espero que te esté gustando mi sitio web 😉. <br /> En esta sección
			encontrarás un poco más sobre <span class="text-light-pink">mi camino</span> personal y profesional,
			los proyectos, etapas y logros que me han marcado para que te puedas ubicar más fácilmente con
			mi perfil. ¡Espero que disfrutes leyéndolo!
		</p>
		<div class="mb-12">
			<NeonText text="About me" textClasses="text-2xl"></NeonText>
			<p>
				Me llamo Tomás Nahuel, nací en 2003 en Valencia, pero a temprana edad me fui a vivir a <span
					class="text-light-pink">Tenerife</span
				>, <span class="text-lightblue">Canarias</span>. Desde pequeña edad siempre he tenido un
				comportamiendo obsesivo con aquellas cosas que me gustaban, al punto de que muchas veces esa
				pasión y amor la he podido <span class="text-lightblue">contagiar</span> a la gente de mi alrededor.
			</p>

			<p>
				Académicamente no era un alumno destacable, pero gracias mis defectos académicos tuve la
				oportunidad de entrar a los 14 años a unas "clases de refuerzo". Estas clases las impartía <span
					class="text-light-pink">Cerebritos</span
				>
				quienes son partidarios de la teoría de las
				<a
					href={multipleInteligentTheoryWikiLink}
					target="_blank"
					class="text-lightblue hover:underline">inteligencias múltiples</a
				>.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="My name" textClasses="text-2xl"></NeonText>

			<p>
				Mi nombre real es <span class="text-light-pink">Tomás Nahuel Antela Rizzo</span>, pero el
				nombre de <span class="text-lightblue">"Luka"</span> viene de una divertida anéctoda. La
				primera vez que conocí a uno de mis actuales mejores amigos, nos presentamos con nuestros
				nombres correspondientes. Cuando cada uno se iba a su casa, este nuevo conocido procedió a
				llamarme Luka a pesar de haber estado pasando varias horas compartiendo risas. Resultó ser
				un nombre que me gustó mucho y a partir de entonces ha sido el apodo con el que mucha gente
				de mi círculo cercano me llama. Incluso mi apodo en los videojuegos es
				<span class="text-light-pink">LukaLaKuka</span>. Es por eso que en muchos sitios me llamo
				Luka, a pesar de que mi nombre formal sea Tomás.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="The rubik's cube in my life" textClasses="text-2xl"></NeonText>

			<p>
				En la academia de Cerebritos conocí un puzzle que tal vez haya supuesto uno de mis grandes
				logros a lo largo de mi vida: el <span class="text-light-pink">cubo de Rubik</span>. En la
				academia nadie sabía resolverlo y me puse como primera meta aprender a resolverlo. Al cabo
				de 3 días prácticando sin parar y viendo un vídeo de Youtube, logré la gran hazaña.
			</p>
			<p>
				Después de disfrutar tanto resolviéndolo sin parar, conocí a unos conocidos en el instituto
				que me enseñaron que habían muchos más cubos distintos al convencional. Habían cubos
				grandes, pequeños, redondos, dodecaedros, etc. De todo.
			</p>

			<p>
				Conforme yo más aprendía y más disfrutaba, más compartía con mis conocidos de la academia.
				Sobretodo quien era mi instructor y ahora amigo, Abraham. Le propuse con 14 años hacer una
				actividad en un evento municipal para enseñar a la gente en la calle a resolver este puzzle
				tan singular y generarles esa pizca de curiosidad.
			</p>

			<p>
				¡Resultó un éxito! No logramos enseñar a absolutamente a nadie, pero gracias a eso
				Cerebritos ganó popularidad y podíamos ofrecer una cantidad de minijuegos orientados al cubo
				de rubik. Yo solo pensar que podríamos seguir haciendo actividades para poder seguir
				compartiendo nuestra pasión me alegraba mucho y nos sentíamos realizados.
			</p>

			<p>
				Desde entonces, Cerebritos ha seguido durante 7 años consecutivos desarrollando actividades
				para todo tipo de entidades orientadas a las inteligencias múltiples y usando el cubo de
				rubik como intermediario.
			</p>

			<p>
				Alrededor del primer año con Cerebritos, me dieron la oportunidad de poder participar en mi
				primer <a
					href={ccElMuelleOpenResults}
					class="text-light-pink hover:underline"
					target="_blank">torneo oficial</a
				>
				de cubos de Rubik, ya que para ese entonces yo ya estaba promediando una media de
				<span class="text-lightblue">15 segundos</span> con el cubo clásico 3x3.
			</p>

			<p>
				Para agrado de muchos, logré quedar undécimo en la final de dicho torneo, siendo mi mejor
				tiempo <span class="text-lightblue">13.72 segundos</span>. Uno de los logros de los que más
				orgulloso estoy.
			</p>
		</div>

		<div class="mb-12">
			<NeonText text="How I Got Into Computing" textClasses="text-2xl"></NeonText>

			<p>
				Antes de conocer una de mis actuales pasiones y hobbies, la informática, seguí colaborando
				con Cerebritos de forma voluntaria y me encargé de ser <span class="text-light-pink"
					>monitor</span
				>
				y/o <span class="text-light-pink">coordinador</span> de muchas actividades en distintos
				eventos como la <span class="text-lightblue">TenerifeGG</span> o el
				<span class="text-lightblue">Foro Gamer de los Realejos</span>. Era bastante concurrente que
				los monitores y formadores de informática me comentaran que era probable de que me gustara
				la <span class="text-light-pink">programación</span>, ya que la resolución del cubo de rubik
				se compone de <span class="text-lightblue">patrones</span> y
				<span class="text-lightblue">algoritmos de resolución</span>.
			</p>

			<p>
				Durante todo el tiempo que estuve en el instituto, yo tenía claro que quería ser <span
					class="text-light-pink">profesor de magisterio de primaria</span
				>, debido a la larga experiencia como <span class="text-lightblue">instructor</span> y/o
				<span class="text-lightblue">tutor</span>
				con Cerebritos. Pero en 2021 cursé mi último año de Bachillerato y aprendí a programar cosas
				muy básicas en <span class="text-lightblue">Python</span>. Mi profesor tenía exactamente el
				mismo don que yo, compartir su pasión, y me lo contagió.
			</p>

			<p>
				Fue entonces que decidí rechazar la opción de ir a la universidad y me matriculé al ciclo
				formativo de grado superior de <span class="text-light-pink"
					>desarrollo de aplicaciones web</span
				>. Para ese entonces no tenía ni la más mínima idea sobre qué iba el ciclo, ni de qué iba a
				trabajar, ni absolutamente nada relacionado con el sector. Solo sabía que me gustaba hacer
				scripts en Python.
			</p>

			<p>
				Empecé el ciclo formativo en 2021 y por suerte mía me acabó encantando el mundo de la
				informática. Aprendí a programar en <span class="text-lightblue">Java</span>,
				<span class="text-lightblue">PHP</span>, <span class="text-lightblue">JavaScript</span> y
				<span class="text-lightblue">TypeScript</span>. No usé Python al final, pero descubrí que
				<span class="text-light-pink">no era Python lo que me gustaba</span>. Lo que me gusta es
				desarrollar y tener la capacidad de poder
				<span class="text-lightblue">crear soluciones y herramientas</span> desde 0.
			</p>
		</div>
	</div>
</Section>

<style>
	p {
		margin-top: 1rem;
	}
</style>
